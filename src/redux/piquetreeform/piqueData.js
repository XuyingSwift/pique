export const PIQUE_DATA = {
  "tqi":{
     "CERL TQI":{
        "name":"CERL TQI",
        "value":0.5512184913497696,
        "description":"Total software quality",
        "children":{
           "QualityAspect 03":{
              "name":"QualityAspect 03",
              "value":0.687573908024124,
              "description":"Maintainability",
              "children":{
                 "ProductFactor 03":{
                    "name":"ProductFactor 03",
                    "value":0.8935136341503003,
                    "description":"Modifiability",
                    "children":{
                       "Measure 01":{
                          "positive":false,
                          "name":"Measure 01",
                          "value":0.8935136341503003,
                          "description":"Formatting",
                          "children":{
                             "RCS1036":{
                                "toolName":"Roslynator",
                                "name":"RCS1036",
                                "value":2.0,
                                "description":"Remove redundant empty line",
                                "children":{
                                   "2065507157":{
                                      "name":"2065507157",
                                      "value":2.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   }
                                },
                                "weights":{
                                   
                                },
                                "eval_strategy":"pique.evaluation.DefaultDiagnosticEvaluator",
                                "normalizer":"pique.evaluation.DefaultNormalizer",
                                "utility_function":"pique.evaluation.DefaultUtility"
                             }
                          },
                          "weights":{
                             "RCS1036":1.0
                          },
                          "thresholds":[
                             0.0,
                             0.18595789273125654
                          ],
                          "eval_strategy":"pique.evaluation.DefaultMeasureEvaluator",
                          "normalizer":"pique.evaluation.DefaultNormalizer",
                          "utility_function":"pique.evaluation.DefaultUtility"
                       },
                       "Measure 04":{
                          "positive":false,
                          "name":"Measure 04",
                          "value":0.0,
                          "description":"Naming",
                          "children":{
                             "VSTHRD200":{
                                "toolName":"Roslynator",
                                "name":"VSTHRD200",
                                "value":0.0,
                                "description":"Use &quot;Async&quot; suffix for async methods",
                                "children":{
                                   "1380210009":{
                                      "name":"1380210009",
                                      "value":0.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   },
                                   "-246305689":{
                                      "name":"-246305689",
                                      "value":0.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   },
                                   "1332258976":{
                                      "name":"1332258976",
                                      "value":0.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   }
                                },
                                "weights":{
                                   
                                },
                                "eval_strategy":"pique.evaluation.DefaultDiagnosticEvaluator",
                                "normalizer":"pique.evaluation.DefaultNormalizer",
                                "utility_function":"pique.evaluation.DefaultUtility"
                             }
                          },
                          "weights":{
                             "VSTHRD200":1.0
                          },
                          "thresholds":[
                             0.0,
                             0.09745641611889111
                          ],
                          "eval_strategy":"pique.evaluation.DefaultMeasureEvaluator",
                          "normalizer":"pique.evaluation.DefaultNormalizer",
                          "utility_function":"pique.evaluation.DefaultUtility"
                       }
                    },
                    "weights":{
                       "Measure 01":0.5,
                       "Measure 04":0.5
                    },
                    "eval_strategy":"pique.evaluation.DefaultProductFactorEvaluator",
                    "normalizer":"pique.evaluation.DefaultNormalizer",
                    "utility_function":"pique.evaluation.DefaultUtility"
                 },
                 "ProductFactor 04":{
                    "name":"ProductFactor 04",
                    "value":0.27569445577177154,
                    "description":"Reusability",
                    "children":{
                       "Measure 02":{
                          "positive":false,
                          "name":"Measure 02",
                          "value":0.27569445577177154,
                          "description":"Unused variable",
                          "children":{
                             "RCS1163":{
                                "toolName":"Roslynator",
                                "name":"RCS1163",
                                "value":8.0,
                                "description":"Unused parameter",
                                "children":{
                                   "1754310597":{
                                      "name":"1754310597",
                                      "value":2.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   },
                                   "-181579935":{
                                      "name":"-181579935",
                                      "value":2.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   },
                                   "-1740057066":{
                                      "name":"-1740057066",
                                      "value":2.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   },
                                   "1264705162":{
                                      "name":"1264705162",
                                      "value":2.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   }
                                },
                                "weights":{
                                   
                                },
                                "eval_strategy":"pique.evaluation.DefaultDiagnosticEvaluator",
                                "normalizer":"pique.evaluation.DefaultNormalizer",
                                "utility_function":"pique.evaluation.DefaultUtility"
                             },
                             "CS0649":{
                                "toolName":"Roslynator",
                                "name":"CS0649",
                                "value":0.0,
                                "description":"Field is never assigned to, and will always have its default value",
                                "children":{
                                   
                                },
                                "weights":{
                                   
                                },
                                "eval_strategy":"pique.evaluation.DefaultDiagnosticEvaluator",
                                "normalizer":"pique.evaluation.DefaultNormalizer",
                                "utility_function":"pique.evaluation.DefaultUtility"
                             },
                             "RCS1213":{
                                "toolName":"Roslynator",
                                "name":"RCS1213",
                                "value":2.0,
                                "description":"Remove unused member declaration",
                                "children":{
                                   "-407174778":{
                                      "name":"-407174778",
                                      "value":2.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   }
                                },
                                "weights":{
                                   
                                },
                                "eval_strategy":"pique.evaluation.DefaultDiagnosticEvaluator",
                                "normalizer":"pique.evaluation.DefaultNormalizer",
                                "utility_function":"pique.evaluation.DefaultUtility"
                             }
                          },
                          "weights":{
                             "RCS1163":0.3333333333333333,
                             "CS0649":0.3333333333333333,
                             "RCS1213":0.3333333333333333
                          },
                          "thresholds":[
                             0.015242450223873487,
                             0.13089454129751357
                          ],
                          "eval_strategy":"pique.evaluation.DefaultMeasureEvaluator",
                          "normalizer":"pique.evaluation.DefaultNormalizer",
                          "utility_function":"pique.evaluation.DefaultUtility"
                       },
                       "Measure 04":{
                          "positive":false,
                          "name":"Measure 04",
                          "value":0.0,
                          "description":"Naming",
                          "children":{
                             "VSTHRD200":{
                                "toolName":"Roslynator",
                                "name":"VSTHRD200",
                                "value":0.0,
                                "description":"Use &quot;Async&quot; suffix for async methods",
                                "children":{
                                   "1380210009":{
                                      "name":"1380210009",
                                      "value":0.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   },
                                   "-246305689":{
                                      "name":"-246305689",
                                      "value":0.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   },
                                   "1332258976":{
                                      "name":"1332258976",
                                      "value":0.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   }
                                },
                                "weights":{
                                   
                                },
                                "eval_strategy":"pique.evaluation.DefaultDiagnosticEvaluator",
                                "normalizer":"pique.evaluation.DefaultNormalizer",
                                "utility_function":"pique.evaluation.DefaultUtility"
                             }
                          },
                          "weights":{
                             "VSTHRD200":1.0
                          },
                          "thresholds":[
                             0.0,
                             0.09745641611889111
                          ],
                          "eval_strategy":"pique.evaluation.DefaultMeasureEvaluator",
                          "normalizer":"pique.evaluation.DefaultNormalizer",
                          "utility_function":"pique.evaluation.DefaultUtility"
                       }
                    },
                    "weights":{
                       "Measure 02":0.5,
                       "Measure 04":0.5
                    },
                    "eval_strategy":"pique.evaluation.DefaultProductFactorEvaluator",
                    "normalizer":"pique.evaluation.DefaultNormalizer",
                    "utility_function":"pique.evaluation.DefaultUtility"
                 }
              },
              "weights":{
                 "ProductFactor 03":0.6666666666666666,
                 "ProductFactor 04":0.3333333333333333
              },
              "eval_strategy":"pique.evaluation.DefaultFactorEvaluator",
              "normalizer":"pique.evaluation.DefaultNormalizer",
              "utility_function":"pique.evaluation.DefaultUtility"
           },
           "QualityAspect 04":{
              "name":"QualityAspect 04",
              "value":0.517129637181181,
              "description":"Security",
              "children":{
                 "ProductFactor 05":{
                    "name":"ProductFactor 05",
                    "value":1.0,
                    "description":"Confidentiality",
                    "children":{
                       "Measure 03":{
                          "positive":false,
                          "name":"Measure 03",
                          "value":1.0,
                          "description":"Certifications",
                          "children":{
                             "SCS0004":{
                                "toolName":"Roslynator",
                                "name":"SCS0004",
                                "value":3.0,
                                "description":"Certificate Validation has been disabled",
                                "children":{
                                   "211943737":{
                                      "name":"211943737",
                                      "value":3.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   }
                                },
                                "weights":{
                                   
                                },
                                "eval_strategy":"pique.evaluation.DefaultDiagnosticEvaluator",
                                "normalizer":"pique.evaluation.DefaultNormalizer",
                                "utility_function":"pique.evaluation.DefaultUtility"
                             }
                          },
                          "weights":{
                             "SCS0004":1.0
                          },
                          "thresholds":[
                             2.0,
                             4.0
                          ],
                          "eval_strategy":"pique.evaluation.DefaultMeasureEvaluator",
                          "normalizer":"pique.evaluation.DefaultNormalizer",
                          "utility_function":"pique.evaluation.DefaultUtility"
                       }
                    },
                    "weights":{
                       "Measure 03":1.0
                    },
                    "eval_strategy":"pique.evaluation.DefaultProductFactorEvaluator",
                    "normalizer":"pique.evaluation.DefaultNormalizer",
                    "utility_function":"pique.evaluation.DefaultUtility"
                 },
                 "ProductFactor 06":{
                    "name":"ProductFactor 06",
                    "value":0.27569445577177154,
                    "description":"Integrity",
                    "children":{
                       "Measure 02":{
                          "positive":false,
                          "name":"Measure 02",
                          "value":0.27569445577177154,
                          "description":"Unused variable",
                          "children":{
                             "RCS1163":{
                                "toolName":"Roslynator",
                                "name":"RCS1163",
                                "value":8.0,
                                "description":"Unused parameter",
                                "children":{
                                   "1754310597":{
                                      "name":"1754310597",
                                      "value":2.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   },
                                   "-181579935":{
                                      "name":"-181579935",
                                      "value":2.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   },
                                   "-1740057066":{
                                      "name":"-1740057066",
                                      "value":2.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   },
                                   "1264705162":{
                                      "name":"1264705162",
                                      "value":2.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   }
                                },
                                "weights":{
                                   
                                },
                                "eval_strategy":"pique.evaluation.DefaultDiagnosticEvaluator",
                                "normalizer":"pique.evaluation.DefaultNormalizer",
                                "utility_function":"pique.evaluation.DefaultUtility"
                             },
                             "CS0649":{
                                "toolName":"Roslynator",
                                "name":"CS0649",
                                "value":0.0,
                                "description":"Field is never assigned to, and will always have its default value",
                                "children":{
                                   
                                },
                                "weights":{
                                   
                                },
                                "eval_strategy":"pique.evaluation.DefaultDiagnosticEvaluator",
                                "normalizer":"pique.evaluation.DefaultNormalizer",
                                "utility_function":"pique.evaluation.DefaultUtility"
                             },
                             "RCS1213":{
                                "toolName":"Roslynator",
                                "name":"RCS1213",
                                "value":2.0,
                                "description":"Remove unused member declaration",
                                "children":{
                                   "-407174778":{
                                      "name":"-407174778",
                                      "value":2.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   }
                                },
                                "weights":{
                                   
                                },
                                "eval_strategy":"pique.evaluation.DefaultDiagnosticEvaluator",
                                "normalizer":"pique.evaluation.DefaultNormalizer",
                                "utility_function":"pique.evaluation.DefaultUtility"
                             }
                          },
                          "weights":{
                             "RCS1163":0.3333333333333333,
                             "CS0649":0.3333333333333333,
                             "RCS1213":0.3333333333333333
                          },
                          "thresholds":[
                             0.015242450223873487,
                             0.13089454129751357
                          ],
                          "eval_strategy":"pique.evaluation.DefaultMeasureEvaluator",
                          "normalizer":"pique.evaluation.DefaultNormalizer",
                          "utility_function":"pique.evaluation.DefaultUtility"
                       },
                       "Measure 04":{
                          "positive":false,
                          "name":"Measure 04",
                          "value":0.0,
                          "description":"Naming",
                          "children":{
                             "VSTHRD200":{
                                "toolName":"Roslynator",
                                "name":"VSTHRD200",
                                "value":0.0,
                                "description":"Use &quot;Async&quot; suffix for async methods",
                                "children":{
                                   "1380210009":{
                                      "name":"1380210009",
                                      "value":0.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   },
                                   "-246305689":{
                                      "name":"-246305689",
                                      "value":0.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   },
                                   "1332258976":{
                                      "name":"1332258976",
                                      "value":0.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   }
                                },
                                "weights":{
                                   
                                },
                                "eval_strategy":"pique.evaluation.DefaultDiagnosticEvaluator",
                                "normalizer":"pique.evaluation.DefaultNormalizer",
                                "utility_function":"pique.evaluation.DefaultUtility"
                             }
                          },
                          "weights":{
                             "VSTHRD200":1.0
                          },
                          "thresholds":[
                             0.0,
                             0.09745641611889111
                          ],
                          "eval_strategy":"pique.evaluation.DefaultMeasureEvaluator",
                          "normalizer":"pique.evaluation.DefaultNormalizer",
                          "utility_function":"pique.evaluation.DefaultUtility"
                       }
                    },
                    "weights":{
                       "Measure 02":0.5,
                       "Measure 04":0.5
                    },
                    "eval_strategy":"pique.evaluation.DefaultProductFactorEvaluator",
                    "normalizer":"pique.evaluation.DefaultNormalizer",
                    "utility_function":"pique.evaluation.DefaultUtility"
                 }
              },
              "weights":{
                 "ProductFactor 05":0.3333333333333333,
                 "ProductFactor 06":0.6666666666666666
              },
              "eval_strategy":"pique.evaluation.DefaultFactorEvaluator",
              "normalizer":"pique.evaluation.DefaultNormalizer",
              "utility_function":"pique.evaluation.DefaultUtility"
           },
           "QualityAspect 01":{
              "name":"QualityAspect 01",
              "value":0.27569445577177154,
              "description":"Performance",
              "children":{
                 "ProductFactor 01":{
                    "name":"ProductFactor 01",
                    "value":0.27569445577177154,
                    "description":"Runtime",
                    "children":{
                       "Measure 02":{
                          "positive":false,
                          "name":"Measure 02",
                          "value":0.27569445577177154,
                          "description":"Unused variable",
                          "children":{
                             "RCS1163":{
                                "toolName":"Roslynator",
                                "name":"RCS1163",
                                "value":8.0,
                                "description":"Unused parameter",
                                "children":{
                                   "1754310597":{
                                      "name":"1754310597",
                                      "value":2.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   },
                                   "-181579935":{
                                      "name":"-181579935",
                                      "value":2.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   },
                                   "-1740057066":{
                                      "name":"-1740057066",
                                      "value":2.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   },
                                   "1264705162":{
                                      "name":"1264705162",
                                      "value":2.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   }
                                },
                                "weights":{
                                   
                                },
                                "eval_strategy":"pique.evaluation.DefaultDiagnosticEvaluator",
                                "normalizer":"pique.evaluation.DefaultNormalizer",
                                "utility_function":"pique.evaluation.DefaultUtility"
                             },
                             "CS0649":{
                                "toolName":"Roslynator",
                                "name":"CS0649",
                                "value":0.0,
                                "description":"Field is never assigned to, and will always have its default value",
                                "children":{
                                   
                                },
                                "weights":{
                                   
                                },
                                "eval_strategy":"pique.evaluation.DefaultDiagnosticEvaluator",
                                "normalizer":"pique.evaluation.DefaultNormalizer",
                                "utility_function":"pique.evaluation.DefaultUtility"
                             },
                             "RCS1213":{
                                "toolName":"Roslynator",
                                "name":"RCS1213",
                                "value":2.0,
                                "description":"Remove unused member declaration",
                                "children":{
                                   "-407174778":{
                                      "name":"-407174778",
                                      "value":2.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   }
                                },
                                "weights":{
                                   
                                },
                                "eval_strategy":"pique.evaluation.DefaultDiagnosticEvaluator",
                                "normalizer":"pique.evaluation.DefaultNormalizer",
                                "utility_function":"pique.evaluation.DefaultUtility"
                             }
                          },
                          "weights":{
                             "RCS1163":0.3333333333333333,
                             "CS0649":0.3333333333333333,
                             "RCS1213":0.3333333333333333
                          },
                          "thresholds":[
                             0.015242450223873487,
                             0.13089454129751357
                          ],
                          "eval_strategy":"pique.evaluation.DefaultMeasureEvaluator",
                          "normalizer":"pique.evaluation.DefaultNormalizer",
                          "utility_function":"pique.evaluation.DefaultUtility"
                       }
                    },
                    "weights":{
                       "Measure 02":1.0
                    },
                    "eval_strategy":"pique.evaluation.DefaultProductFactorEvaluator",
                    "normalizer":"pique.evaluation.DefaultNormalizer",
                    "utility_function":"pique.evaluation.DefaultUtility"
                 }
              },
              "weights":{
                 "ProductFactor 01":1.0
              },
              "eval_strategy":"pique.evaluation.DefaultFactorEvaluator",
              "normalizer":"pique.evaluation.DefaultNormalizer",
              "utility_function":"pique.evaluation.DefaultUtility"
           },
           "QualityAspect 02":{
              "name":"QualityAspect 02",
              "value":1.0,
              "description":"Compatibility",
              "children":{
                 "ProductFactor 02":{
                    "name":"ProductFactor 02",
                    "value":1.0,
                    "description":"Interoperability",
                    "children":{
                       "Measure 03":{
                          "positive":false,
                          "name":"Measure 03",
                          "value":1.0,
                          "description":"Certifications",
                          "children":{
                             "SCS0004":{
                                "toolName":"Roslynator",
                                "name":"SCS0004",
                                "value":3.0,
                                "description":"Certificate Validation has been disabled",
                                "children":{
                                   "211943737":{
                                      "name":"211943737",
                                      "value":3.0,
                                      "description":"",
                                      "children":{
                                         
                                      },
                                      "weights":{
                                         
                                      },
                                      "eval_strategy":"pique.evaluation.DefaultFindingEvaluator",
                                      "normalizer":"pique.evaluation.DefaultNormalizer",
                                      "utility_function":"pique.evaluation.DefaultUtility"
                                   }
                                },
                                "weights":{
                                   
                                },
                                "eval_strategy":"pique.evaluation.DefaultDiagnosticEvaluator",
                                "normalizer":"pique.evaluation.DefaultNormalizer",
                                "utility_function":"pique.evaluation.DefaultUtility"
                             }
                          },
                          "weights":{
                             "SCS0004":1.0
                          },
                          "thresholds":[
                             2.0,
                             4.0
                          ],
                          "eval_strategy":"pique.evaluation.DefaultMeasureEvaluator",
                          "normalizer":"pique.evaluation.DefaultNormalizer",
                          "utility_function":"pique.evaluation.DefaultUtility"
                       }
                    },
                    "weights":{
                       "Measure 03":1.0
                    },
                    "eval_strategy":"pique.evaluation.DefaultProductFactorEvaluator",
                    "normalizer":"pique.evaluation.DefaultNormalizer",
                    "utility_function":"pique.evaluation.DefaultUtility"
                 }
              },
              "weights":{
                 "ProductFactor 02":1.0
              },
              "eval_strategy":"pique.evaluation.DefaultFactorEvaluator",
              "normalizer":"pique.evaluation.DefaultNormalizer",
              "utility_function":"pique.evaluation.DefaultUtility"
           }
        },
        "weights":{
           "QualityAspect 03":0.2,
           "QualityAspect 04":0.5,
           "QualityAspect 01":0.2,
           "QualityAspect 02":0.1
        },
        "eval_strategy":"pique.evaluation.DefaultFactorEvaluator",
        "normalizer":"pique.evaluation.DefaultNormalizer",
        "utility_function":"pique.evaluation.DefaultUtility"
     }
  }
}