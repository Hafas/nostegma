/**
 * AbstractPlugin(params)
 * params contains the following properties
 * profile: The whole Profile-Object, that includes the executable, extras, etc.
 * cwd: The directory where the plugin came from
 * file: The file the executable should open. Might not be present in case of a simple profile.
 */
var AbstractPlugin=function(params){
  throw new Error("This prototype is abstract and can't be instantiated!");
};

/**
 * General information, when implementing a method:
 * params: An object that might contains useful information about the game
 *		nonSteamGame: the Non-Steam Game so far, after applying changes from extra and previous plugins
 * callback: Return in its first argument a truthy value if an error occured while trying to acquire a property. The next Plugin will then try to acquire that property.
 *		Return in its second argument the property you acquired. No other Plugin will override that value.
 *		Return in its second argument a falsy value, when you are unable to acquire that property. The next Plugin will then try to acquire that property.
 */

/**
 * getAppname(callback)
 * callback: The callback. Returns the appname in its 2nd argument.
 */
AbstractPlugin.prototype.getAppname=function(params,callback){
  callback(null,null);
};

/**
 * getExe(callback)
 * callback: The callback. Returns the command that Steam will run in its 2nd argument.
 */
AbstractPlugin.prototype.getExe=function(params,callback){
  callback(null,null);
};

/**
 * getStartDir(callback)
 * callback: The callback. Returns the working directory of the executable in its 2nd argument.
 */
AbstractPlugin.prototype.getStartDir=function(params,callback){
  callback(null,null);
};

/**
 * getIcon(callback)
 * callback: The callback. Returns a path to an icon-file in its 2nd argument.
 */
AbstractPlugin.prototype.getIcon=function(params,callback){
  callback(null,null);
};

/**
 * getShortcutPath(callback)
 * callback: The callback.
 */
AbstractPlugin.prototype.getShortcutPath(params,callback){
  callback(null,null);
};

/**
 * getTags(callback)
 * callback: The callback. Returns an array of tags in its 2nd argument.
 */
AbstractPlugin.prototype.getTags=function(params,callback){
  callback(null,null);
}

module.exports=AbstractPlugin;
