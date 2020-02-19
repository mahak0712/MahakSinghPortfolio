// const { environment } = require('@rails/webpacker')




// const webpack = require('webpack')
// environment.plugins.prepend('Provide',
//   new webpack.ProvidePlugin({
//     $: 'jquery/src/jquery',
//     jQuery: 'jquery/src/jquery'
//   })
// )

// const aliasConfig = {
//     'jquery': 'jquery-ui-dist/external/jquery/jquery.js',
//     'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
// };

// environment.config.set('resolve.alias', aliasConfig);

// module.exports = environment

const { environment } = require('@rails/webpacker');


const coffee = require('./loaders/coffee')

environment.loaders.append('coffee', coffee)
const webpack = require('webpack');


// resolve-url-loader must be used before sass-loader
environment.loaders.get('sass').use.splice(-1, 0, {
    loader: 'resolve-url-loader',
    options: {
        attempts: 1
    }
});


// Add an additional plugin of your choosing : ProvidePlugin

environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
        $: 'jquery',
        JQuery: 'jquery',
        jquery: 'jquery',
        'window.Tether': "tether",
        Popper: ['popper.js', 'default'], // for Bootstrap 4
    })
)

const aliasConfig = {
    'jquery': 'jquery/src/jquery',
    'jquery-ui': 'jquery-ui-dist/jquery-ui.js'

};

environment.config.set('resolve.alias', aliasConfig);

//
module.exports = environment;