/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.manifest.v1.EstafetteSemverVersion');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.manifest.v1.StringOrStringArray');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.manifest.v1.EstafetteSemverVersion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.manifest.v1.EstafetteSemverVersion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.manifest.v1.EstafetteSemverVersion.displayName = 'proto.manifest.v1.EstafetteSemverVersion';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.manifest.v1.EstafetteSemverVersion.prototype.toObject = function(opt_includeInstance) {
  return proto.manifest.v1.EstafetteSemverVersion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.manifest.v1.EstafetteSemverVersion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.manifest.v1.EstafetteSemverVersion.toObject = function(includeInstance, msg) {
  var f, obj = {
    major: jspb.Message.getFieldWithDefault(msg, 1, 0),
    minor: jspb.Message.getFieldWithDefault(msg, 2, 0),
    patch: jspb.Message.getFieldWithDefault(msg, 3, ""),
    labelTemplate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    releaseBranch: (f = msg.getReleaseBranch()) && proto.manifest.v1.StringOrStringArray.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.manifest.v1.EstafetteSemverVersion}
 */
proto.manifest.v1.EstafetteSemverVersion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.manifest.v1.EstafetteSemverVersion;
  return proto.manifest.v1.EstafetteSemverVersion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.manifest.v1.EstafetteSemverVersion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.manifest.v1.EstafetteSemverVersion}
 */
proto.manifest.v1.EstafetteSemverVersion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMajor(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMinor(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPatch(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabelTemplate(value);
      break;
    case 5:
      var value = new proto.manifest.v1.StringOrStringArray;
      reader.readMessage(value,proto.manifest.v1.StringOrStringArray.deserializeBinaryFromReader);
      msg.setReleaseBranch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.manifest.v1.EstafetteSemverVersion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.manifest.v1.EstafetteSemverVersion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.manifest.v1.EstafetteSemverVersion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.manifest.v1.EstafetteSemverVersion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMajor();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMinor();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPatch();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLabelTemplate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReleaseBranch();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.manifest.v1.StringOrStringArray.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 major = 1;
 * @return {number}
 */
proto.manifest.v1.EstafetteSemverVersion.prototype.getMajor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.manifest.v1.EstafetteSemverVersion.prototype.setMajor = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 minor = 2;
 * @return {number}
 */
proto.manifest.v1.EstafetteSemverVersion.prototype.getMinor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.manifest.v1.EstafetteSemverVersion.prototype.setMinor = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string patch = 3;
 * @return {string}
 */
proto.manifest.v1.EstafetteSemverVersion.prototype.getPatch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.manifest.v1.EstafetteSemverVersion.prototype.setPatch = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string label_template = 4;
 * @return {string}
 */
proto.manifest.v1.EstafetteSemverVersion.prototype.getLabelTemplate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.manifest.v1.EstafetteSemverVersion.prototype.setLabelTemplate = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional StringOrStringArray release_branch = 5;
 * @return {?proto.manifest.v1.StringOrStringArray}
 */
proto.manifest.v1.EstafetteSemverVersion.prototype.getReleaseBranch = function() {
  return /** @type{?proto.manifest.v1.StringOrStringArray} */ (
    jspb.Message.getWrapperField(this, proto.manifest.v1.StringOrStringArray, 5));
};


/** @param {?proto.manifest.v1.StringOrStringArray|undefined} value */
proto.manifest.v1.EstafetteSemverVersion.prototype.setReleaseBranch = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.manifest.v1.EstafetteSemverVersion.prototype.clearReleaseBranch = function() {
  this.setReleaseBranch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.manifest.v1.EstafetteSemverVersion.prototype.hasReleaseBranch = function() {
  return jspb.Message.getField(this, 5) != null;
};


