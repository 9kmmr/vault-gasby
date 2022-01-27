const path = require('path');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const slugify = require('@sindresorhus/slugify');
const axios = require('axios')

const API_URL = process.env.API_URL;

exports.createPages = async ({ page, actions }) => {

  console.log("/// crete pages")

  const { createPage } = actions
  /* createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  }) */

  /* if (page?.path.match(/^\/results/)) {
    page.matchPath = "/results/*"

    // Update the page.
    createPage(page)
  } */



  // pre-render mxgp pages
  const mxgpYears = await getMXGPYears();
  mxgpYears.years.forEach(async mxgpyear => {

    const year = mxgpyear.year;
    let mxgpChampionships = await getMXGPChampionships(year);

    mxgpChampionships.championships.forEach(async championship => {

      const championshipid = championship.id
      let mxgpClasses = await getMXGPClasses(year, championshipid);

      if (mxgpClasses.classes.length > 0) {

        mxgpClasses.classes.forEach(async mxgpclass => {

          const classid = mxgpclass.id
          let mxgpEvents = await getMXGPEvents(year, championshipid, classid);
          mxgpEvents.events.forEach(async event => {
            const eventid = event.id;

            let Races = await getMXGPRaces(year, championshipid, classid, eventid);

            Races.races.forEach(async race => {

              const raceid = race.id;
              let mxgpResults = await getMXGPResults(year, championshipid, classid, eventid, raceid);

              mxgpResults.forEach(result => {
                try {
                  createPage({
                    path: `/results/${year}/mxgp/${slugify(championship.name)}/${slugify(mxgpclass.name)}/${slugify(event.name)}/${slugify(race.name)}/${slugify(result.name)}`,
                    component: require.resolve("./src/templates/result-page.js"),
                    context: { year: year, championship: championship, classes: mxgpclass, event: event, race: race, result: result },// This is to pass data as props to your component.
                    defer: true
                  })
                  
                } catch (error) {
                  console.log("err on create page", error)
                }

              });
            })
          })
        });
      } else {
        let Races = await getMXGPRaces(year, championshipid);
        Races.races.forEach(async race => {

          const raceid = race.id;
          let mxgpResults = await getMXGPResults(year, championshipid, null, null, raceid);

          mxgpResults.results.forEach(result => {
            try {
              createPage({
                path: `/results/${year}/mxgp/${slugify(championship.name)}/${slugify(race.name)}/${slugify(result.name)}`,
                component: require.resolve("./src/templates/result-page.js"),
                context: { year: year, championship: championship, race: race, result: result },// This is to pass data as props to your component.
                defer: true
              })              
            } catch (error) {
              console.log("err on create page", error)
            }
          });
        })
      }
    });

  });




  // pre-render pro-motocross pages
  const promotocrossYears = await getYears("promotocross", [], 50, 0);

  const promotocrossClasses = await getClasses("promotocross");

  promotocrossYears.years.forEach(async proyear => {
    const year = proyear.year;

    let promotocrossEvents = await getEvents("promotocross", year, [], 50, 0);

    promotocrossEvents.events.forEach(async event => {

      let promotocrossRaces = await getRaces("promotocross", year, event.name, [], 50, 0);

      promotocrossRaces.races.forEach(race => {
        try {
          
          createPage({
            path: `/results/${year}/promotocross/${slugify(event.name)}/${slugify(race.classType.name)}/${slugify(race.name)}/`,
            component: require.resolve("./src/templates/result-page-2.js"),
            context: { year: year, event: event, race: race, classes: race.classType },// This is to pass data as props to your component.
            defer: true
          })
        } catch (error) {
          console.log("err on create page", error)
        }
      });
    })

  })

  // pre-render pro-motocross riders pages
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  letters.forEach(async letter => {

    let promotocrossRiders = await getRiders(letter);
    try {
      
      createPage({
        path: `/results/promotocross/riders/${letter}/`,
        component: require.resolve("./src/templates/riders-letter.js"),
        context: { letter: letter, riders: promotocrossRiders },// This is to pass data as props to your component.
        defer: true
      })
    } catch (error) {
      
    }
    promotocrossRiders.forEach(async rider => {
      try {
        
        createPage({
          path: `/results/promotocross/rider/${slugify(rider.name)}/`,
          component: require.resolve("./src/templates/rider-page.js"),
          context: { riders: rider },// This is to pass data as props to your component.
          defer: true
        })
      } catch (error) {
        console.log("err on create page", error)
      }

    })


  })


  // pre-render supercross pages
  const supercrossYears = await getYears("supercross", [], 50, 0);

  const supercrossClasses = await getClasses("supercross");

  supercrossYears.years.forEach(async proyear => {
    const year = proyear.year;

    let supercrossEvents = await getEvents("supercross", year, [], 50, 0);

    supercrossEvents.events.forEach(async event => {

      let supercrossRaces = await getRaces("supercross", year, event.name, [], 50, 0);

      supercrossRaces.races.forEach(async race => {
        try {
          createPage({
            path: `/results/${year}/supercross/${slugify(event.name)}/${slugify(race.classType.name)}/${slugify(race.name)}/`,
            component: require.resolve("./src/templates/result-page-2.js"),
            context: { year: year, event: event, race: race, classes: race.classType },// This is to pass data as props to your component.
            defer: true
          })          
        } catch (error) {
          console.log("err on create page", error)
        }
      });
    })

  })




}

async function getMXGPYears() {
  try {
    
    return axios.get(`${API_URL}mxgp/years`).then(res => res.data)
  } catch (error) {
    console.log("err", error);
    return [];
  }
}

async function getMXGPChampionships(year) {
  try {
    return axios.get(`${API_URL}mxgp/championships?year=${year}`).then(res => res.data);    
  } catch (error) {
    console.log("err", error);
    return [];
  }
}

async function getMXGPClasses(year, championship) {
  try {
    
    return axios.get(`${API_URL}mxgp/classes?year=${year}&championship=${championship}`).then(res => res.data);
  } catch (error) {
    console.log("err", error);
    return [];
  }
}

async function getMXGPEvents(year, championship, classes) {
  try {
    return axios.get(`${API_URL}mxgp/events?year=${year}&championship=${championship}&classes=${classes}`).then(res => res.data);    
  } catch (error) {
    console.log("err", error);
    return [];
  }
}

async function getMXGPRaces(year, championship, classes = null, event = null) {
  try {
    
    if (classes && event) {
      return axios.get(`${API_URL}mxgp/races?year=${year}&championship=${championship}&classes=${classes}&event=${event}`).then(res => res.data);
    } else {
      return axios.get(`${API_URL}mxgp/races?year=${year}&championship=${championship}`).then(res => res.data);
    }
  } catch (error) {
    console.log("err", error);
    return [];
  }
}
async function getMXGPResults(year, championship, classes = null, event = null, race) {
  try {
    
    if (classes && event) {
      return axios.get(`${API_URL}mxgp/results?year=${year}&championship=${championship}&classes=${classes}&event=${event}&race=${race}`).then(res => res.data);
    } else {
      return axios.get(`${API_URL}mxgp/results?year=${year}&championship=${championship}&race=${race}`).then(res => res.data);
    }
  } catch (error) {
    console.log("err", error);
    return [];
  }
}

async function getYears(type, yearData, limit, skip) {
  let yData = await fetchYears(type, limit, skip);
  let data = yearData.concat(yData.years);
  if ((parseInt(yData.count) - limit - skip) > 0) {
    let t = await getYears(type, data, limit, limit + skip)
    data.concat(t);
  }
  return data;
}
async function getEvents(type, year, eventData, limit, skip) {
  let eData = await fetchEvents(type, year, limit, skip);
  let data = eventData.concat(eData.events);
  if ((parseInt(eData.count) - limit - skip) > 0) {
    let t = await getEvents(type, year, data, limit, limit + skip);
    data.concat(t);
  }
  return data;
}
async function getRaces(type, year, event, raceData, limit, skip) {
  let rData = await fetchRaces(type, year, event, limit, skip);
  let data = raceData.concat(rData.races);
  if ((parseInt(rData.count) - limit - skip) > 0) {
    let t = await getRaces(type, year, event, data, limit, limit + skip);
    data.concat(t);
  }
  return data;
}


//
async function fetchYears(type, limit = 50, skip = 0) {
  try {
    return axios.get(`${API_URL}${type}/years?limit=${limit}&skip=${skip}`).then(res => res.data);    
  } catch (error) {
    console.log("err", error);
    return [];
  }
}

async function fetchEvents(type, year, limit = 50, skip = 0) {
  try {
    return axios.get(`${API_URL}${type}/events?year=${year}&limit=${limit}&skip=${skip}`).then(res => res.data)
  } catch (error) {
    console.log("err", error);
    return [];
  }
}

async function fetchRaces(type, year, event, limit = 50, skip = 0) {
  try {
    return axios.get(`${API_URL}${type}/races?year=${year}&event=${event}&limit=${limit}&skip=${skip}`).then(res => res.data)    
  } catch (error) {
    console.log("err", error);
    return [];
  }
}

async function getClasses(type) {
  try {
    return axios.get(`${API_URL}${type}/classes`).then(res => res.data)    
  } catch (error) {
    console.log("err", error);
    return [];
  }
}

async function getResults(type, year, event, classes, race) {
  try {
    return axios.get(`${API_URL}${type}/results?year=${year}&event=${event}&race=${race}`).then(res => res.data)    
  } catch (error) {
    console.log("err", error);
    return [];
  }
}


// 
async function getRiders(type, letter, limit = 50, skip = 0) {
  try {
    return axios.get(`${API_URL}${type}/riders?letterentry=${letter}&limit=${limit}&skip=${skip}`).then(res => res.data);    
  } catch (error) {
    console.log("err", error);
    return [];
  }
}
async function getRider(type, letter, name, location) {
  try {
    return axios.get(`${API_URL}${type}/riders?letterentry=${letter}&location=${location}&name=${name}`).then(res => res.data);    
  } catch (error) {
    console.log("err", error);
    return [];
  }
}

