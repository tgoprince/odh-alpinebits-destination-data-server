module.exports = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://www.alpinebits.org/schemas/v1/general/Event",
  "title": "Event",
  "type": "object",
  "required": [
    "lastUpdate",
    "dataProvider",
    "@type",
    "id",
    "name",
    "venues",
    "organizers",
    "publisher"
  ],
  "properties": {
    "@type": {
      "const": "Event"
    },
    "dataProvider": {
      "oneOf": [
        {
          "$ref": "#/definitions/agent"
        },
        {
          "type": "string",
          "format": "uri"
        }
      ]
    },
    "lastUpdate": {
      "type": "string",
      "format": "date-time"
    },
    "id": {},
    "name": {},
    "venues": {},
    "organizers": {},
    "publisher": {}
  },
  "allOf": [
    {
      "$ref": "#/definitions/event"
    }
  ],
  "definitions": {
    "event": {
      "title": "Basic Event",
      "type": "object",
      "required": [
        "@type",
        "id",
        "name",
        "venues"
      ],
      "properties": {
        "@type": {
          "const": "Event"
        },
        "id": {
          "type": "string",
          "minLength": 1
        },
        "name": {
          "$ref": "#/definitions/text"
        },
        "shortName": {
          "$ref": "#/definitions/text"
        },
        "abstract": {
          "$ref": "#/definitions/text"
        },
        "description": {
          "$ref": "#/definitions/text"
        },
        "url": {
          "$ref": "#/definitions/url"
        },
        "multimediaDescriptions": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/mediaObject"
          }
        },
        "structure": {
          "type": "string",
          "enum": [
            "simple",
            "composite"
          ]
        },
        "startDate": {
          "$ref": "#/definitions/date"
        },
        "endDate": {
          "$ref": "#/definitions/date"
        },
        "categories": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "type": "string"
          }
        },
        "status": {
          "type": "string",
          "enum": [
            "scheduled",
            "rescheduled",
            "ongoing",
            "realized",
            "cancelled"
          ]
        },
        "capacity": {
          "description": "The total number of individuals that can attend an event.",
          "type": "integer",
          "minimum": 1
        },
        "offerings": {
          "type": "array",
          "items": {
            "title": "Offering",
            "type": "object",
            "required": [
              "@type",
              "id",
              "price",
              "offeredBy",
              "availableAt",
              "itemOffered"
            ],
            "properties": {
              "@type": {
                "const": "Offering"
              },
              "id": {
                "type": "string",
                "minLength": 1
              },
              "name": {
                "$ref": "#/definitions/text"
              },
              "shortName": {
                "$ref": "#/definitions/text"
              },
              "abstract": {
                "$ref": "#/definitions/text"
              },
              "description": {
                "$ref": "#/definitions/text"
              },
              "url": {
                "$ref": "#/definitions/url"
              },
              "price": {
                "title": "Price Specification",
                "type": "object",
                "required": [
                  "@type",
                  "value",
                  "currency"
                ],
                "properties": {
                  "@type": {
                    "const": "PriceSpecification"
                  },
                  "value": {
                    "type": "number"
                  },
                  "currency": {
                    "type": "string",
                    "enum": [
                      "eur",
                      "usd",
                      "cny",
                      "chf"
                    ]
                  }
                }
              },
              "offeredBy": {
                "$ref": "#/definitions/agent"
              },
              "acceptedPaymentMethods": {
                "type": "array",
                "uniqueItems": true,
                "items": {
                  "type": "string"
                }
              },
              "validFrom": {
                "$ref": "#/definitions/date"
              },
              "validThrough": {
                "$ref": "#/definitions/date"
              },
              "itemOffered": {
                "oneOf": [
                  {
                    "title": "TicketType",
                    "type": "object",
                    "required": [
                      "@type",
                      "id"
                    ],
                    "properties": {
                      "@type": {
                        "const": "TicketType"
                      },
                      "id": {
                        "type": "string",
                        "minLength": 1
                      },
                      "name": {
                        "$ref": "#/definitions/text"
                      },
                      "shortName": {
                        "$ref": "#/definitions/text"
                      },
                      "abstract": {
                        "$ref": "#/definitions/text"
                      },
                      "description": {
                        "$ref": "#/definitions/text"
                      },
                      "url": {
                        "$ref": "#/definitions/url"
                      }
                    }
                  }
                ]
              },
              "eligibleCustomerType": {
                "properties": {
                  "id": {
                    "type": "string",
                    "minLength": 1
                  },
                  "name": {
                    "$ref": "#/definitions/text"
                  },
                  "shortName": {
                    "$ref": "#/definitions/text"
                  },
                  "abstract": {
                    "$ref": "#/definitions/text"
                  },
                  "description": {
                    "$ref": "#/definitions/text"
                  },
                  "url": {
                    "$ref": "#/definitions/url"
                  },
                  "minAge": {
                    "description": "The minimum age, in years, a customer can have to be eligible for an offering.",
                    "type": "number"
                  },
                  "maxAge": {
                    "description": "The maximum age, in years, a customer can have to be eligible for an offering.",
                    "type": "number"
                  },
                  "isStudent": {
                    "type": "boolean"
                  }
                }
              },
              "availableAt": {
                "type": "array",
                "items": {
                  "oneOf": [
                    {
                      "$ref": "#/definitions/url"
                    },
                    {
                      "title": "Place",
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "string",
                          "minLength": 1
                        },
                        "name": {
                          "$ref": "#/definitions/text"
                        },
                        "shortName": {
                          "$ref": "#/definitions/text"
                        },
                        "abstract": {
                          "$ref": "#/definitions/text"
                        },
                        "description": {
                          "$ref": "#/definitions/text"
                        },
                        "url": {
                          "$ref": "#/definitions/url"
                        },
                        "multimediaDescriptions": {
                          "type": "array",
                          "items": {
                            "$ref": "#/definitions/mediaObject"
                          }
                        },
                        "address": {
                          "$ref": "#/definitions/address"
                        },
                        "geometries": {
                          "type": "array",
                          "items": {
                            "title": "Geometry",
                            "oneOf": [
                              {
                                "title": "Point",
                                "type": "object",
                                "properties": {
                                  "@type": {
                                    "const": "Point"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "minItems": 2,
                                    "items": {
                                      "type": "number"
                                    }
                                  }
                                },
                                "required": [
                                  "@type",
                                  "coordinates"
                                ]
                              },
                              {
                                "title": "LineString",
                                "type": "object",
                                "properties": {
                                  "@type": {
                                    "const": "LineString"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "minItems": 2,
                                    "items": {
                                      "type": "array",
                                      "minItems": 2,
                                      "items": {
                                        "type": "number"
                                      }
                                    }
                                  }
                                },
                                "required": [
                                  "@type",
                                  "coordinates"
                                ]
                              },
                              {
                                "title": "Polygon",
                                "type": "object",
                                "properties": {
                                  "@type": {
                                    "const": "Polygon"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "items": {
                                      "type": "array",
                                      "minItems": 4,
                                      "items": {
                                        "type": "array",
                                        "minItems": 2,
                                        "items": {
                                          "type": "number"
                                        }
                                      }
                                    }
                                  }
                                },
                                "required": [
                                  "@type",
                                  "coordinates"
                                ]
                              },
                              {
                                "title": "MultiPoint",
                                "type": "object",
                                "properties": {
                                  "@type": {
                                    "const": "MultiPoint"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "items": {
                                      "type": "array",
                                      "minItems": 2,
                                      "items": {
                                        "type": "number"
                                      }
                                    }
                                  }
                                },
                                "required": [
                                  "@type",
                                  "coordinates"
                                ]
                              },
                              {
                                "title": "MultiLineString",
                                "type": "object",
                                "properties": {
                                  "@type": {
                                    "const": "MultiLineString"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "items": {
                                      "type": "array",
                                      "minItems": 2,
                                      "items": {
                                        "type": "array",
                                        "minItems": 2,
                                        "items": {
                                          "type": "number"
                                        }
                                      }
                                    }
                                  }
                                },
                                "required": [
                                  "@type",
                                  "coordinates"
                                ]
                              },
                              {
                                "title": "MultiPolygon",
                                "type": "object",
                                "properties": {
                                  "@type": {
                                    "const": "MultiPolygon"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "items": {
                                      "type": "array",
                                      "items": {
                                        "type": "array",
                                        "minItems": 4,
                                        "items": {
                                          "type": "array",
                                          "minItems": 2,
                                          "items": {
                                            "type": "number"
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "required": [
                                  "@type",
                                  "coordinates"
                                ]
                              }
                            ]
                          }
                        },
                        "howToArrive": {
                          "$ref": "#/definitions/text"
                        },
                        "connections": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        },
        "publisher": {
          "$ref": "#/definitions/agent"
        },
        "organizers": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/agent"
          }
        },
        "sponsors": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/definitions/agent"
          }
        },
        "contributors": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "required": [
              "role",
              "agent"
            ],
            "properties": {
              "role": {
                "type": "string"
              },
              "agent": {
                "$ref": "#/definitions/agent"
              }
            }
          }
        },
        "series": {
          "title": "Event Series",
          "type": "object",
          "required": [
            "@type",
            "id",
            "name"
          ],
          "properties": {
            "@type": {
              "const": "EventSeries"
            },
            "id": {
              "type": "string",
              "minLength": 1
            },
            "name": {
              "$ref": "#/definitions/text"
            },
            "shortName": {
              "$ref": "#/definitions/text"
            },
            "abstract": {
              "$ref": "#/definitions/text"
            },
            "description": {
              "$ref": "#/definitions/text"
            },
            "url": {
              "$ref": "#/definitions/url"
            },
            "multimediaDescriptions": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/mediaObject"
              }
            },
            "frequency": {
              "type": "string",
              "enum": [
                "daily",
                "weekly",
                "monthly",
                "bimonthly",
                "quaterly",
                "annual",
                "biennial",
                "triennial"
              ]
            }
          }
        },
        "subEvents": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/event"
          }
        },
        "venues": {
          "type": "array",
          "minItems": 1,
          "items": {
            "required": [
              "@type",
              "id",
              "name"
            ],
            "properties": {
              "@type": {
                "const": "Venue"
              },
              "id": {
                "type": "string",
                "minLength": 1
              },
              "name": {
                "$ref": "#/definitions/text"
              },
              "shortName": {
                "$ref": "#/definitions/text"
              },
              "abstract": {
                "$ref": "#/definitions/text"
              },
              "description": {
                "$ref": "#/definitions/text"
              },
              "url": {
                "$ref": "#/definitions/url"
              },
              "multimediaDescriptions": {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/mediaObject"
                }
              },
              "address": {
                "$ref": "#/definitions/address"
              },
              "geometries": {
                "type": "array",
                "items": {
                  "title": "Geometry",
                  "oneOf": [
                    {
                      "title": "Point",
                      "type": "object",
                      "properties": {
                        "@type": {
                          "const": "Point"
                        },
                        "coordinates": {
                          "type": "array",
                          "minItems": 2,
                          "items": {
                            "type": "number"
                          }
                        }
                      },
                      "required": [
                        "@type",
                        "coordinates"
                      ]
                    },
                    {
                      "title": "LineString",
                      "type": "object",
                      "properties": {
                        "@type": {
                          "const": "LineString"
                        },
                        "coordinates": {
                          "type": "array",
                          "minItems": 2,
                          "items": {
                            "type": "array",
                            "minItems": 2,
                            "items": {
                              "type": "number"
                            }
                          }
                        }
                      },
                      "required": [
                        "@type",
                        "coordinates"
                      ]
                    },
                    {
                      "title": "Polygon",
                      "type": "object",
                      "properties": {
                        "@type": {
                          "const": "Polygon"
                        },
                        "coordinates": {
                          "type": "array",
                          "items": {
                            "type": "array",
                            "minItems": 4,
                            "items": {
                              "type": "array",
                              "minItems": 2,
                              "items": {
                                "type": "number"
                              }
                            }
                          }
                        }
                      },
                      "required": [
                        "@type",
                        "coordinates"
                      ]
                    },
                    {
                      "title": "MultiPoint",
                      "type": "object",
                      "properties": {
                        "@type": {
                          "const": "MultiPoint"
                        },
                        "coordinates": {
                          "type": "array",
                          "items": {
                            "type": "array",
                            "minItems": 2,
                            "items": {
                              "type": "number"
                            }
                          }
                        }
                      },
                      "required": [
                        "@type",
                        "coordinates"
                      ]
                    },
                    {
                      "title": "MultiLineString",
                      "type": "object",
                      "properties": {
                        "@type": {
                          "const": "MultiLineString"
                        },
                        "coordinates": {
                          "type": "array",
                          "items": {
                            "type": "array",
                            "minItems": 2,
                            "items": {
                              "type": "array",
                              "minItems": 2,
                              "items": {
                                "type": "number"
                              }
                            }
                          }
                        }
                      },
                      "required": [
                        "@type",
                        "coordinates"
                      ]
                    },
                    {
                      "title": "MultiPolygon",
                      "type": "object",
                      "properties": {
                        "@type": {
                          "const": "MultiPolygon"
                        },
                        "coordinates": {
                          "type": "array",
                          "items": {
                            "type": "array",
                            "items": {
                              "type": "array",
                              "minItems": 4,
                              "items": {
                                "type": "array",
                                "minItems": 2,
                                "items": {
                                  "type": "number"
                                }
                              }
                            }
                          }
                        }
                      },
                      "required": [
                        "@type",
                        "coordinates"
                      ]
                    }
                  ]
                }
              },
              "howToArrive": {
                "$ref": "#/definitions/text"
              },
              "connections": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "openingHours": {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/hoursSpecification"
                }
              }
            },
            "anyOf": [
              {
                "required": [
                  "address"
                ]
              },
              {
                "required": [
                  "geometries"
                ]
              }
            ]
          }
        }
      },
      "allOf": [
        {
          "anyOf": [
            {
              "required": [
                "startDate"
              ]
            },
            {
              "required": [
                "endDate"
              ]
            }
          ]
        },
        {
          "if": {
            "required": [
              "status"
            ],
            "properties": {
              "status": {
                "const": "rescheduled"
              }
            }
          },
          "then": {
            "properties": {
              "originalStartDate": {
                "$ref": "#/definitions/date"
              },
              "originalEndDate": {
                "$ref": "#/definitions/date"
              }
            },
            "anyOf": [
              {
                "required": [
                  "originalStartDate",
                  "startDate"
                ]
              },
              {
                "required": [
                  "originalEndDate",
                  "endDate"
                ]
              }
            ]
          }
        },
        {
          "if": {
            "required": [
              "structure"
            ],
            "properties": {
              "structure": {
                "const": "simple"
              }
            }
          },
          "then": {
            "not": {
              "required": [
                "subEvents"
              ]
            }
          }
        }
      ]
    },
    "agent": {
      "title": "Agent",
      "type": "object",
      "required": [
        "@type"
      ],
      "properties": {
        "@type": {
          "const": "Agent"
        },
        "id": {
          "type": "string",
          "minLength": 1
        },
        "name": {
          "$ref": "#/definitions/text"
        },
        "shortName": {
          "$ref": "#/definitions/text"
        },
        "abstract": {
          "$ref": "#/definitions/text"
        },
        "description": {
          "$ref": "#/definitions/text"
        },
        "url": {
          "$ref": "#/definitions/url"
        },
        "category": {
          "type": "string",
          "enum": [
            "person",
            "organization"
          ]
        },
        "contacts": {
          "type": "array",
          "minItems": 1,
          "items": {
            "title": "Contact Point",
            "type": "object",
            "required": [
              "@type"
            ],
            "properties": {
              "@type": {
                "const": "ContactPoint"
              },
              "id": {
                "type": "string",
                "minLength": 1
              },
              "name": {
                "$ref": "#/definitions/text"
              },
              "shortName": {
                "$ref": "#/definitions/text"
              },
              "abstract": {
                "$ref": "#/definitions/text"
              },
              "description": {
                "$ref": "#/definitions/text"
              },
              "url": {
                "$ref": "#/definitions/url"
              },
              "email": {
                "format": "email",
                "type": "string"
              },
              "telephone": {
                "type": "string"
              },
              "address": {
                "$ref": "#/definitions/address"
              },
              "availableHours": {
                "$ref": "#/definitions/hoursSpecification"
              }
            },
            "anyOf": [
              {
                "required": [
                  "telephone"
                ]
              },
              {
                "required": [
                  "email"
                ]
              },
              {
                "required": [
                  "address"
                ]
              }
            ]
          }
        }
      },
      "anyOf": [
        {
          "required": [
            "url"
          ]
        },
        {
          "required": [
            "name"
          ]
        }
      ]
    },
    "mediaObject": {
      "title": "Media Object",
      "type": "object",
      "required": [
        "@type",
        "url",
        "contentType"
      ],
      "properties": {
        "@type": {
          "const": "MediaObject"
        },
        "id": {
          "type": "string",
          "minLength": 1
        },
        "name": {
          "$ref": "#/definitions/text"
        },
        "shortName": {
          "$ref": "#/definitions/text"
        },
        "abstract": {
          "$ref": "#/definitions/text"
        },
        "description": {
          "$ref": "#/definitions/text"
        },
        "url": {
          "$ref": "#/definitions/url"
        },
        "contentType": {
          "type": "string",
          "pattern": "^(application|audio|font|example|image|message|model|multipart|text|video)/[a-zA-Z0-9-.+]+$"
        },
        "height": {
          "description": "The height of an image or a video in pixels.",
          "type": "integer",
          "minimum": 0
        },
        "width": {
          "description": "The width of an image or a video in pixels.",
          "type": "integer",
          "minimum": 0
        },
        "duration": {
          "description": "The duration of an audio or a video in seconds.",
          "type": "number",
          "minimum": 0
        },
        "license": {
          "description": "The license defined for a media object. The value of this field should be a valid license identifier as defined in https://spdx.org/licenses/ (e.g. CC-BY-4.0, FreeImage)",
          "type": "string"
        },
        "copyrightOwner": {
          "$ref": "#/definitions/agent"
        }
      },
      "allOf": [
        {
          "if": {
            "properties": {
              "contentType": {
                "type": "string",
                "pattern": "^(application|font|example|image|message|model|multipart|text)"
              }
            }
          },
          "then": {
            "not": {
              "required": [
                "duration"
              ]
            }
          }
        },
        {
          "if": {
            "properties": {
              "contentType": {
                "type": "string",
                "pattern": "^(application|audio|font|example|message|model|multipart|text)"
              }
            }
          },
          "then": {
            "not": {
              "required": [
                "width",
                "height"
              ]
            }
          }
        }
      ]
    },
    "address": {
      "title": "Address",
      "type": "object",
      "required": [
        "@type",
        "city",
        "country"
      ],
      "properties": {
        "@type": {
          "const": "Address"
        },
        "category": {
          "type": "string"
        },
        "street": {
          "$ref": "#/definitions/text"
        },
        "city": {
          "$ref": "#/definitions/text"
        },
        "region": {
          "$ref": "#/definitions/text"
        },
        "zipcode": {
          "type": "string"
        },
        "complement": {
          "$ref": "#/definitions/text"
        },
        "country": {
          "description": "A two-letter country code as defined in the ISO 3166.",
          "type": "string",
          "enum": [
            "IT",
            "DE",
            "AU"
          ]
        }
      }
    },
    "hoursSpecification": {
      "title": "Hours Specification",
      "type": "object",
      "required": [
        "@type",
        "hours"
      ],
      "properties": {
        "@type": {
          "const": "HoursSpecification"
        },
        "validFrom": {
          "type": "string",
          "format": "date"
        },
        "validTo": {
          "type": "string",
          "format": "date"
        },
        "daysOfWeek": {
          "type": "array",
          "minItems": 1,
          "uniqueItems": true,
          "items": {
            "type": "string",
            "enum": [
              "sunday",
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
              "saturday"
            ]
          }
        },
        "hours": {
          "type": "array",
          "minItems": 1,
          "items": {
            "required": [
              "opens",
              "closes"
            ],
            "properties": {
              "opens": {
                "type": "string",
                "format": "time"
              },
              "closes": {
                "type": "string",
                "format": "time"
              }
            }
          }
        }
      }
    },
    "text": {
      "patternProperties": {
        "": {
          "type": "string"
        }
      },
      "type": "object",
      "propertyNames": {
        "type": "string",
        "enum": [
          "eng",
          "ita",
          "deu",
          "lld"
        ]
      }
    },
    "url": {
      "oneOf": [
        {
          "type": "string",
          "format": "uri"
        },
        {
          "patternProperties": {
            "": {
              "type": "string",
              "format": "uri"
            }
          },
          "type": "object",
          "propertyNames": {
            "type": "string",
            "enum": [
              "eng",
              "ita",
              "deu",
              "lld"
            ]
          }
        }
      ]
    },
    "date": {
      "type": "string",
      "anyOf": [
        {
          "format": "date-time"
        },
        {
          "format": "date"
        }
      ]
    }
  }
}
