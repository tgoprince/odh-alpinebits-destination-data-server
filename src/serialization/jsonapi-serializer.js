let JSONAPISerializer = require('jsonapi-serializer').Serializer;

const basicAttributes = ['name','shortName','description','abstract','url'];
const agentAttributes = [...basicAttributes,'category','contacts'];
const mediaObjectAttributes = [...basicAttributes,'contentType','height','width','duration','license','copyrightOwner'];
const metaAttributes = ['dataProvider', 'lastUpdate'];

function serializeEvent(data, included){
  let EventSerializer = new JSONAPISerializer('events', getRootEventSerialization(included));
  return EventSerializer.serialize(data);
}

function getType (attribute, data) {
  switch(data['@type']) {
    case 'Event':
      return 'events';
    case 'Agent':
      return 'agents';
    case 'MediaObject':
      return 'mediaObjects';
    case 'EventSeries':
      return 'eventSeries';
    case 'Point':
    case 'LineString':
    case 'Polygon':
    case 'MultiPoint':
    case 'MultiLineString':
    case 'MultiPolygon':
      return 'geometries';

    return data['@type'];
  }
}

function getAddressSerialization() {
  return ({
    attributes: ['street', 'category', 'street', 'city', 'region', 'zipcode', 'complement', 'country']
  });
}

function getHoursSerialization() {
  return ({
    attributes: ['hours', 'validFrom', 'validTo']
  });
}

function getContactSerialization() {
  return ({
    attributes: [...basicAttributes, 'email', 'telephone', 'address', 'availableHours'],
    address: getAddressSerialization(),
    availableHours: getHoursSerialization()
  });
}

function getAgentSerialization(included) {
  return ({
    ref: 'id',
    included: included,
    typeForAttribute: getType,
    attributes: [...agentAttributes],
    contacts: getContactSerialization()
  });
}

function contributorSerialization(included) {
  return ({
    ref: 'id',
    included: included,
    typeForAttribute: getType,
    attributes: ['agent', 'role'],
    agent: getAgentSerialization(included)
  });
}

function getMediaSerialization(included) {
  return ({
    ref: 'id',
    included: included,
    typeForAttribute: getType,
    attributes: [...mediaObjectAttributes],
    copyrightOwner: getAgentSerialization(included)
  });
}

function getEventSeriesSerialization(included) {
  return ({
    ref: 'id',
    included: included,
    typeForAttribute: getType,
    attributes: [...basicAttributes, 'multimediaDescriptions', 'frequency'],
    multimediaDescriptions: getMediaSerialization(included)
  });
}

function getGeometrySerialization(included) {
  return ({
    ref: 'id',
    included: included,
    typeForAttribute: getType,
    attributes: ['coordinates', 'category'],
    transform: function (data) {
       data.category = data['@type'];
       return data;
    }
  });
}

function getVenueSerialization(included) {
  return ({
    ref: 'id',
    included: included,
    typeForAttribute: getType,
    attributes: [...basicAttributes, 'multimediaDescriptions', 'frequency', 'address', 'geometries', 'howToArrive', 'connections', 'openingHours'],
    multimediaDescriptions: getMediaSerialization(included),
    address: getAddressSerialization(),
    openingHours: getHoursSerialization(),
    geometries: getGeometrySerialization(included)
  });
}

function getEventSerialization(included) {
  return({
    attributes: [...metaAttributes, ...basicAttributes, 'startDate', 'endDate', 'originalStartDate',
  'originalEndDate', 'categories', 'structure', 'status', 'capacity', 'multimediaDescriptions', 'publisher', 'organizers', 'sponsors', 'contributors', 'series', 'venues'],
    keyForAttribute: 'camelCase',
    nullIfMissing: true,
    typeForAttribute: getType,
    multimediaDescriptions: getMediaSerialization(included),
    publisher: getAgentSerialization(included),
    organizers: getAgentSerialization(included),
    sponsors:getAgentSerialization(included),
    contributors: contributorSerialization(included),
    series: getEventSeriesSerialization(included),
    venues: getVenueSerialization(included)
  })
}

function getRootEventSerialization(included) {
  let serializer = getEventSerialization(included);
  serializer.attributes.push('subEvents');

  let subEvents = {
    ref: 'id',
    included: included,
    typeForAttribute: getType,
    ...getEventSerialization(included)
  }

  serializer.subEvents = subEvents;
  return serializer;
}

module.exports.serializeEvent = serializeEvent;