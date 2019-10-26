/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.contracts.v1.Pipeline');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.contracts.v1.GitCommit');
goog.require('proto.contracts.v1.Label');
goog.require('proto.contracts.v1.ReleaseTarget');
goog.require('proto.google.protobuf.Duration');
goog.require('proto.google.protobuf.Timestamp');
goog.require('proto.manifest.v1.EstafetteEvent');
goog.require('proto.manifest.v1.EstafetteTrigger');


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
proto.contracts.v1.Pipeline = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.contracts.v1.Pipeline.repeatedFields_, null);
};
goog.inherits(proto.contracts.v1.Pipeline, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.contracts.v1.Pipeline.displayName = 'proto.contracts.v1.Pipeline';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.contracts.v1.Pipeline.repeatedFields_ = [9,10,13,14,15];



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
proto.contracts.v1.Pipeline.prototype.toObject = function(opt_includeInstance) {
  return proto.contracts.v1.Pipeline.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.contracts.v1.Pipeline} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contracts.v1.Pipeline.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    repoSource: jspb.Message.getFieldWithDefault(msg, 2, ""),
    repoOwner: jspb.Message.getFieldWithDefault(msg, 3, ""),
    repoName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    repoBranch: jspb.Message.getFieldWithDefault(msg, 5, ""),
    repoRevision: jspb.Message.getFieldWithDefault(msg, 6, ""),
    buildVersion: jspb.Message.getFieldWithDefault(msg, 7, ""),
    buildStatus: jspb.Message.getFieldWithDefault(msg, 8, ""),
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    proto.contracts.v1.Label.toObject, includeInstance),
    releaseTargetsList: jspb.Message.toObjectList(msg.getReleaseTargetsList(),
    proto.contracts.v1.ReleaseTarget.toObject, includeInstance),
    manifest: jspb.Message.getFieldWithDefault(msg, 11, ""),
    manifestWithDefaults: jspb.Message.getFieldWithDefault(msg, 12, ""),
    commitsList: jspb.Message.toObjectList(msg.getCommitsList(),
    proto.contracts.v1.GitCommit.toObject, includeInstance),
    triggersList: jspb.Message.toObjectList(msg.getTriggersList(),
    proto.manifest.v1.EstafetteTrigger.toObject, includeInstance),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.manifest.v1.EstafetteEvent.toObject, includeInstance),
    insertedAt: (f = msg.getInsertedAt()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && proto.google.protobuf.Duration.toObject(includeInstance, f),
    lastUpdatedAt: (f = msg.getLastUpdatedAt()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.contracts.v1.Pipeline}
 */
proto.contracts.v1.Pipeline.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.contracts.v1.Pipeline;
  return proto.contracts.v1.Pipeline.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.contracts.v1.Pipeline} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.contracts.v1.Pipeline}
 */
proto.contracts.v1.Pipeline.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoSource(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoOwner(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoBranch(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepoRevision(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuildVersion(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuildStatus(value);
      break;
    case 9:
      var value = new proto.contracts.v1.Label;
      reader.readMessage(value,proto.contracts.v1.Label.deserializeBinaryFromReader);
      msg.addLabels(value);
      break;
    case 10:
      var value = new proto.contracts.v1.ReleaseTarget;
      reader.readMessage(value,proto.contracts.v1.ReleaseTarget.deserializeBinaryFromReader);
      msg.addReleaseTargets(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setManifest(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setManifestWithDefaults(value);
      break;
    case 13:
      var value = new proto.contracts.v1.GitCommit;
      reader.readMessage(value,proto.contracts.v1.GitCommit.deserializeBinaryFromReader);
      msg.addCommits(value);
      break;
    case 14:
      var value = new proto.manifest.v1.EstafetteTrigger;
      reader.readMessage(value,proto.manifest.v1.EstafetteTrigger.deserializeBinaryFromReader);
      msg.addTriggers(value);
      break;
    case 15:
      var value = new proto.manifest.v1.EstafetteEvent;
      reader.readMessage(value,proto.manifest.v1.EstafetteEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    case 16:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setInsertedAt(value);
      break;
    case 17:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 18:
      var value = new proto.google.protobuf.Duration;
      reader.readMessage(value,proto.google.protobuf.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 19:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setLastUpdatedAt(value);
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
proto.contracts.v1.Pipeline.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.contracts.v1.Pipeline.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.contracts.v1.Pipeline} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.contracts.v1.Pipeline.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRepoSource();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRepoOwner();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRepoName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRepoBranch();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRepoRevision();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBuildVersion();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getBuildStatus();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.contracts.v1.Label.serializeBinaryToWriter
    );
  }
  f = message.getReleaseTargetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.contracts.v1.ReleaseTarget.serializeBinaryToWriter
    );
  }
  f = message.getManifest();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getManifestWithDefaults();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCommitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.contracts.v1.GitCommit.serializeBinaryToWriter
    );
  }
  f = message.getTriggersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.manifest.v1.EstafetteTrigger.serializeBinaryToWriter
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.manifest.v1.EstafetteEvent.serializeBinaryToWriter
    );
  }
  f = message.getInsertedAt();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.google.protobuf.Duration.serializeBinaryToWriter
    );
  }
  f = message.getLastUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.contracts.v1.Pipeline.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.contracts.v1.Pipeline.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string repo_source = 2;
 * @return {string}
 */
proto.contracts.v1.Pipeline.prototype.getRepoSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.contracts.v1.Pipeline.prototype.setRepoSource = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string repo_owner = 3;
 * @return {string}
 */
proto.contracts.v1.Pipeline.prototype.getRepoOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.contracts.v1.Pipeline.prototype.setRepoOwner = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string repo_name = 4;
 * @return {string}
 */
proto.contracts.v1.Pipeline.prototype.getRepoName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.contracts.v1.Pipeline.prototype.setRepoName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string repo_branch = 5;
 * @return {string}
 */
proto.contracts.v1.Pipeline.prototype.getRepoBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.contracts.v1.Pipeline.prototype.setRepoBranch = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string repo_revision = 6;
 * @return {string}
 */
proto.contracts.v1.Pipeline.prototype.getRepoRevision = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.contracts.v1.Pipeline.prototype.setRepoRevision = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string build_version = 7;
 * @return {string}
 */
proto.contracts.v1.Pipeline.prototype.getBuildVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.contracts.v1.Pipeline.prototype.setBuildVersion = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string build_status = 8;
 * @return {string}
 */
proto.contracts.v1.Pipeline.prototype.getBuildStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.contracts.v1.Pipeline.prototype.setBuildStatus = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated Label labels = 9;
 * @return {!Array<!proto.contracts.v1.Label>}
 */
proto.contracts.v1.Pipeline.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.contracts.v1.Label>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.contracts.v1.Label, 9));
};


/** @param {!Array<!proto.contracts.v1.Label>} value */
proto.contracts.v1.Pipeline.prototype.setLabelsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.contracts.v1.Label=} opt_value
 * @param {number=} opt_index
 * @return {!proto.contracts.v1.Label}
 */
proto.contracts.v1.Pipeline.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.contracts.v1.Label, opt_index);
};


proto.contracts.v1.Pipeline.prototype.clearLabelsList = function() {
  this.setLabelsList([]);
};


/**
 * repeated ReleaseTarget release_targets = 10;
 * @return {!Array<!proto.contracts.v1.ReleaseTarget>}
 */
proto.contracts.v1.Pipeline.prototype.getReleaseTargetsList = function() {
  return /** @type{!Array<!proto.contracts.v1.ReleaseTarget>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.contracts.v1.ReleaseTarget, 10));
};


/** @param {!Array<!proto.contracts.v1.ReleaseTarget>} value */
proto.contracts.v1.Pipeline.prototype.setReleaseTargetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.contracts.v1.ReleaseTarget=} opt_value
 * @param {number=} opt_index
 * @return {!proto.contracts.v1.ReleaseTarget}
 */
proto.contracts.v1.Pipeline.prototype.addReleaseTargets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.contracts.v1.ReleaseTarget, opt_index);
};


proto.contracts.v1.Pipeline.prototype.clearReleaseTargetsList = function() {
  this.setReleaseTargetsList([]);
};


/**
 * optional string manifest = 11;
 * @return {string}
 */
proto.contracts.v1.Pipeline.prototype.getManifest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.contracts.v1.Pipeline.prototype.setManifest = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string manifest_with_defaults = 12;
 * @return {string}
 */
proto.contracts.v1.Pipeline.prototype.getManifestWithDefaults = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.contracts.v1.Pipeline.prototype.setManifestWithDefaults = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * repeated GitCommit commits = 13;
 * @return {!Array<!proto.contracts.v1.GitCommit>}
 */
proto.contracts.v1.Pipeline.prototype.getCommitsList = function() {
  return /** @type{!Array<!proto.contracts.v1.GitCommit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.contracts.v1.GitCommit, 13));
};


/** @param {!Array<!proto.contracts.v1.GitCommit>} value */
proto.contracts.v1.Pipeline.prototype.setCommitsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.contracts.v1.GitCommit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.contracts.v1.GitCommit}
 */
proto.contracts.v1.Pipeline.prototype.addCommits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.contracts.v1.GitCommit, opt_index);
};


proto.contracts.v1.Pipeline.prototype.clearCommitsList = function() {
  this.setCommitsList([]);
};


/**
 * repeated manifest.v1.EstafetteTrigger triggers = 14;
 * @return {!Array<!proto.manifest.v1.EstafetteTrigger>}
 */
proto.contracts.v1.Pipeline.prototype.getTriggersList = function() {
  return /** @type{!Array<!proto.manifest.v1.EstafetteTrigger>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.manifest.v1.EstafetteTrigger, 14));
};


/** @param {!Array<!proto.manifest.v1.EstafetteTrigger>} value */
proto.contracts.v1.Pipeline.prototype.setTriggersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.manifest.v1.EstafetteTrigger=} opt_value
 * @param {number=} opt_index
 * @return {!proto.manifest.v1.EstafetteTrigger}
 */
proto.contracts.v1.Pipeline.prototype.addTriggers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.manifest.v1.EstafetteTrigger, opt_index);
};


proto.contracts.v1.Pipeline.prototype.clearTriggersList = function() {
  this.setTriggersList([]);
};


/**
 * repeated manifest.v1.EstafetteEvent events = 15;
 * @return {!Array<!proto.manifest.v1.EstafetteEvent>}
 */
proto.contracts.v1.Pipeline.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.manifest.v1.EstafetteEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.manifest.v1.EstafetteEvent, 15));
};


/** @param {!Array<!proto.manifest.v1.EstafetteEvent>} value */
proto.contracts.v1.Pipeline.prototype.setEventsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.manifest.v1.EstafetteEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.manifest.v1.EstafetteEvent}
 */
proto.contracts.v1.Pipeline.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.manifest.v1.EstafetteEvent, opt_index);
};


proto.contracts.v1.Pipeline.prototype.clearEventsList = function() {
  this.setEventsList([]);
};


/**
 * optional google.protobuf.Timestamp inserted_at = 16;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.contracts.v1.Pipeline.prototype.getInsertedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 16));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.contracts.v1.Pipeline.prototype.setInsertedAt = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


proto.contracts.v1.Pipeline.prototype.clearInsertedAt = function() {
  this.setInsertedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.contracts.v1.Pipeline.prototype.hasInsertedAt = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 17;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.contracts.v1.Pipeline.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 17));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.contracts.v1.Pipeline.prototype.setUpdatedAt = function(value) {
  jspb.Message.setWrapperField(this, 17, value);
};


proto.contracts.v1.Pipeline.prototype.clearUpdatedAt = function() {
  this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.contracts.v1.Pipeline.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Duration duration = 18;
 * @return {?proto.google.protobuf.Duration}
 */
proto.contracts.v1.Pipeline.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Duration, 18));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.contracts.v1.Pipeline.prototype.setDuration = function(value) {
  jspb.Message.setWrapperField(this, 18, value);
};


proto.contracts.v1.Pipeline.prototype.clearDuration = function() {
  this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.contracts.v1.Pipeline.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional google.protobuf.Timestamp last_updated_at = 19;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.contracts.v1.Pipeline.prototype.getLastUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 19));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.contracts.v1.Pipeline.prototype.setLastUpdatedAt = function(value) {
  jspb.Message.setWrapperField(this, 19, value);
};


proto.contracts.v1.Pipeline.prototype.clearLastUpdatedAt = function() {
  this.setLastUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.contracts.v1.Pipeline.prototype.hasLastUpdatedAt = function() {
  return jspb.Message.getField(this, 19) != null;
};


