//
// @brief
// @author ongaeshi
// @date   2011/06/02

console.dir = function (object) {
  var pairs = [];
  for (var name in object) {
    try {
      pairs.push([name, object[name]]);
    }
    catch (exc) {
    }
  }
  pairs.sort(function(a, b) { return a[0] < b[0] ? -1 : 1; });

  var out = [];
  out.push("console.dir");
  for (var i = 0; i < pairs.length; ++i)
  {
    var name = pairs[i][0], value = pairs[i][1];

    switch (typeof value) {
    case "function":
      value = "function";
      break;
    case "string":
      value = '"' + value + '"';
      break;
    }

    out.push("  " + name + ": " + value);
  }

  console.log(out.join("\n"));
}

