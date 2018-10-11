### JavaScript Modules
---
- **JavaScript does not define a standard library**
- **CommonJS API fills this gap(间隙，缺口) by defining APIs for common application needs <br>-It defines a module format<br>-Node follows the CommonJS module specification(规格，说明书)**


### Node Modules
---
- **Each file in Node is its own module**
- **The module variable gives access(使用) to the current modules definition(定义) in a file**
- **The module.exports variable determines（确定） the export from the current module**
- **The require function is used to import a module**
- **File-based Modules**
- **Core Modules<br>-Part of core Node <br>-Examples:path,fs,os,util,...**
- **External Node modules<br>-Third-party modules <br>-Installed using NPM<br>-node_modules folder in your Node application**

### Using Node Modules
----
- **Include them using require function**
- **File-based modules:<br>-require('./module_name)<br>Specify the relative path to the file**
- **Core and External modules:<br>-require('./'module_name')<br>-Looks for external modules in node_modules**