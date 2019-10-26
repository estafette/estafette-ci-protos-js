/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.contracts.v1.ListResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.contracts.v1.Pagination');
goog.require('proto.google.protobuf.Any');


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
proto.contracts.v1.ListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.contracts.v1.ListResponse.repeatedFields_, null);
};
goog.inherits(proto.contracts.v1.ListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.contracts.v1.ListResponse.displayName = 'proto.contracts.v1.ListResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.contracts.v1.ListResponse.repeatedFields_ = [1];



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
proto.contracts.v1.ListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.contracts.v1.ListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.contracts.v1.ListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contracts.v1.ListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.google.protobuf.Any.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && proto.contracts.v1.Pagination.toObject(includeInstance, f)
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
 * @return {!proto.contracts.v1.ListResponse}
 */
proto.contracts.v1.ListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.contracts.v1.ListResponse;
  return proto.contracts.v1.ListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.contracts.v1.ListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.contracts.v1.ListResponse}
 */
proto.contracts.v1.ListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.Any;
      reader.readMessage(value,proto.google.protobuf.Any.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    case 2:
      var value = new proto.contracts.v1.Pagination;
      reader.readMessage(value,proto.contracts.v1.Pagination.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.contracts.v1.ListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.contracts.v1.ListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.contracts.v1.ListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contracts.v1.ListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.google.protobuf.Any.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.contracts.v1.Pagination.serializeBinaryToWriter
    );
  }
};


/**
 * repeated google.protobuf.Any items = 1;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.contracts.v1.ListResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.Any, 1));
};


/** @param {!Array<!proto.google.protobuf.Any>} value */
proto.contracts.v1.ListResponse.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.contracts.v1.ListResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.Any, opt_index);
};


proto.contracts.v1.ListResponse.prototype.clearItemsList = function() {
  this.setItemsList([]);
};


/**
 * optional Pagination pagination = 2;
 * @return {?proto.contracts.v1.Pagination}
 */
proto.contracts.v1.ListResponse.prototype.getPagination = function() {
  return /** @type{?proto.contracts.v1.Pagination} */ (
    jspb.Message.getWrapperField(this, proto.contracts.v1.Pagination, 2));
};


/** @param {?proto.contracts.v1.Pagination|undefined} value */
proto.contracts.v1.ListResponse.prototype.setPagination = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.contracts.v1.ListResponse.prototype.clearPagination = function() {
  this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.contracts.v1.ListResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};


