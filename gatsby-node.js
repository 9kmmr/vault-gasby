const path = require('path');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
import slugify from '@sindresorhus/slugify';

exports.createPages = async ({ page,  actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  /* if (page?.path.match(/^\/results/)) {
    page.matchPath = "/results/*"

    // Update the page.
    createPage(page)
  } */

  const API_URL = process.env.API_URL;

  // pre-render mxgp pages
  const mxgpYears = await getMXGPYears();
  mxgpYears.years.forEach(mxgpyear => {

    const year = mxgpyear.year;
    let mxgpChampionships = await getMXGPChampionships(year);

    mxgpChampionships.championships.forEach(championship => {

      const championshipid = championship.id
      let mxgpClasses = await getMXGPClasses(year, championshipid);

      if (mxgpClasses.classes.length > 0) {

        mxgpClasses.classes.forEach(mxgpclass => {

          const classid = mxgpclass.id
          let mxgpEvents = await getMXGPEvents(year, championshipid, classid);
          mxgpEvents.events.forEach(event => {
            const eventid = event.id;

            let Races = await getMXGPRaces(year, championshipid, classid, eventid);

            Races.races.forEach(race => {

              const raceid = race.id;
              let mxgpResults = await getMXGPResults(year, championshipid, classid, eventid, raceid);

              mxgpResults.forEach(result => {
                
                createPage({
                  path: `/results/${year}/mxgp/${slugify(championship.name)}/${slugify(mxgpclass.name)}/${slugify(event.name)}/${slugify(race.name)}/${slugify(result.name)}`,
                  component: require.resolve("./src/templates/using-dsg.js"),
                  context: {year: year, championship: championship, classes: mxgpclass, event: event, race: race, result: result } // This is to pass data as props to your component.
                })

              });
            })
          })          
        });
      } else {
          let Races = await getMXGPRaces(year, championshipid);
          Races.races.forEach(race => {

            const raceid = race.id;
            let mxgpResults = await getMXGPResults(year, championshipid, classid, eventid, raceid);

            mxgpResults.results.forEach(result => {
              
              createPage({
                path: `/results/${year}/mxgp/${slugify(championship.name)}/${slugify(race.name)}/${slugify(result.name)}`,
                component: require.resolve("./src/templates/result-page.js"),
                context: {year: year, championship: championship, race: race, result: result } // This is to pass data as props to your component.
              })
            });
          })
      }
    });

  });




  // pre-render pro-motocross pages
  const promotocrossYears = await getYears("promotocross");

  const promotocrossClasses = await getClasses("promotocross");

  promotocrossYears.years.forEach(proyear => {
    const year = proyear.year;

    let promotocrossEvents = await getEvents("promotocross", year);

    promotocrossEvents.events.forEach(event => {

      let promotocrossRaces = await getRaces("promotocross", year, event.name);

      promotocrossRaces.races.forEach(race => {
              
        createPage({
          path: `/results/${year}/promotocross/${slugify(event.name)}/${slugify(race.classType.name)}/${slugify(race.name)}/`,
          component: require.resolve("./src/templates/result-page-2.js"),
          context: {year: year, event: event, race: race, classes: race.classType } // This is to pass data as props to your component.
        })
      });
    })

  })

  // pre-render pro-motocross riders pages
  const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  letters.forEach(letter => {

    let promotocrossRiders = await  getRiders(letter);
    createPage({
      path: `/results/promotocross/riders/${letter}/`,
      component: require.resolve("./src/templates/riders-letter.js"),
      context: {letter: letter, riders: promotocrossRiders } // This is to pass data as props to your component.
    })
    promotocrossRiders.forEach(rider => {

      createPage({
        path: `/results/promotocross/rider/${slugify(rider.name)}/`,
        component: require.resolve("./src/templates/rider-page.js"),
        context: { riders: rider } // This is to pass data as props to your component.
      })

    })


  })


  // pre-render supercross pages
  const supercrossYears = await getYears("supercross");

  const supercrossClasses = await getClasses("supercross");

  supercrossYears.years.forEach(proyear => {
    const year = proyear.year;

    let supercrossEvents = await getEvents("supercross", year);

    supercrossEvents.events.forEach(event => {

      let supercrossRaces = await getRaces("supercross", year, event.name);

      supercrossRaces.races.forEach(race => {
              
        createPage({
          path: `/results/${year}/supercross/${slugify(event.name)}/${slugify(race.classType.name)}/${slugify(race.name)}/`,
          component: require.resolve("./src/templates/result-page-2.js"),
          context: {year: year, event: event, race: race, classes: race.classType } // This is to pass data as props to your component.
        })
      });
    })

  })


  

}

async function getMXGPYears(){
  return fetch(`${API_URL}mxgp/years`).then(res => res.json())
}

async function getMXGPChampionships(year){
  return fetch(`${API_URL}mxgp/championships?year=${year}`).then(res => res.json());
}

async function getMXGPClasses(year, championship) {
  return fetch(`${API_URL}mxgp/classes?year=${year}&championship=${championship}`).then(res => res.json());
}

async function getMXGPEvents(year, championship, classes) {
  return fetch(`${API_URL}mxgp/events?year=${year}&championship=${championship}&classes=${classes}`).then(res => res.json());
}

async function getMXGPRaces(year, championship, classes=null, event=null) {
  if (classes && event) {
    return fetch(`${API_URL}mxgp/races?year=${year}&championship=${championship}&classes=${classes}&event=${event}`).then(res => res.json());
  } else {
    return fetch(`${API_URL}mxgp/races?year=${year}&championship=${championship}`).then(res => res.json());
  }
}
async function getMXGPResults(year, championship, classes=null, event=null, race) {
  if (classes && event) {
    return fetch(`${API_URL}mxgp/results?year=${year}&championship=${championship}&classes=${classes}&event=${event}&race=${race}`).then(res => res.json());
  } else {
    return fetch(`${API_URL}mxgp/results?year=${year}&championship=${championship}&race=${race}`).then(res => res.json());
  }
}


//
async function getYears(type){
  return fetch(`${API_URL}${type}/years`).then(res => res.json())
}

async function getEvents(type, year){
  return fetch(`${API_URL}${type}/events?year=${year}`).then(res => res.json())
}

async function getRaces(type, year, event, classes){
  return fetch(`${API_URL}${type}/races?year=${year}&event=${event}&classes=${classes}`).then(res => res.json())
}

async function getClasses(type){
  return fetch(`${API_URL}${type}/classes`).then(res => res.json())
}

async function getResults(type, year, event, classes, race){
  return fetch(`${API_URL}${type}/results?year=${year}&event=${event}&classes=${classes}&race=${race}`).then(res => res.json())
}


// 
async function getRiders(type, letter){
  return fetch(`${API_URL}${type}/riders?letterentry=${letter}`).then(res => res.json());
}
async function getRider(type, letter, name, location) {
  return fetch(`${API_URL}${type}/riders?letterentry=${letter}&location=${location}&name=${name}`).then(res => res.json());
}

