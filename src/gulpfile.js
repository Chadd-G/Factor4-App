var replace = require('replace');
var replaceFiles = ['./www/js/app.js'];

gulp.task('add-proxy', function() {
  return replace({
    regex: "https://trans.api.sparkbase.com/v4/transaction?wsdl",
    replacement: "http://localhost:8100/api",
    paths: replaceFiles,
    recursive: false,
    silent: false,
  });
})

gulp.task('remove-proxy', function() {
  return replace({
    regex: "http://localhost:8100/api",
    replacement: "https://trans.api.sparkbase.com/v4/transaction?wsdl",
    paths: replaceFiles,
    recursive: false,
    silent: false,
  });
})