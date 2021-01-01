var plugins = [{
      plugin: require('/Users/MacBurchPro/trav-slice/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/MacBurchPro/trav-slice/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"lsjlt1b6","dataset":"production","watchMode":true,"token":"skPNPwZDb3JlhoplNrtgjGSUN1G92gbTWQAJ4mAgL0iWdfIX9R0MgmmP8ZaFfo6jJ29wIby1QhoyrTeKncxiGyXinBa0zb3apUkHcXNRNOoNe9UfUR84Vjh0sPWJ8sy3nYqMyhqZ76uAB44UUkJyG3P8bY6BJOipwkozEDn7mEgjNuGUpFMp"},
    },{
      plugin: require('/Users/MacBurchPro/trav-slice/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
