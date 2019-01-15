(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@babel/runtime-corejs2/helpers/slicedToArray'), require('@babel/runtime-corejs2/core-js/get-iterator'), require('@babel/runtime-corejs2/core-js/array/is-array'), require('@babel/runtime-corejs2/helpers/objectSpread'), require('@babel/runtime-corejs2/core-js/promise'), require('@babel/runtime-corejs2/regenerator'), require('@babel/runtime-corejs2/helpers/asyncToGenerator'), require('@babel/runtime-corejs2/core-js/object/assign'), require('@babel/runtime-corejs2/core-js/set'), require('@babel/runtime-corejs2/helpers/classCallCheck'), require('@babel/runtime-corejs2/helpers/createClass'), require('@babel/runtime-corejs2/helpers/defineProperty'), require('@babel/runtime-corejs2/core-js/object/keys'), require('@babel/runtime-corejs2/helpers/typeof'), require('@babel/runtime-corejs2/core-js/object/get-prototype-of'), require('@babel/runtime-corejs2/helpers/possibleConstructorReturn'), require('@babel/runtime-corejs2/helpers/getPrototypeOf'), require('@babel/runtime-corejs2/helpers/inherits'), require('chance')) :
  typeof define === 'function' && define.amd ? define(['exports', '@babel/runtime-corejs2/helpers/slicedToArray', '@babel/runtime-corejs2/core-js/get-iterator', '@babel/runtime-corejs2/core-js/array/is-array', '@babel/runtime-corejs2/helpers/objectSpread', '@babel/runtime-corejs2/core-js/promise', '@babel/runtime-corejs2/regenerator', '@babel/runtime-corejs2/helpers/asyncToGenerator', '@babel/runtime-corejs2/core-js/object/assign', '@babel/runtime-corejs2/core-js/set', '@babel/runtime-corejs2/helpers/classCallCheck', '@babel/runtime-corejs2/helpers/createClass', '@babel/runtime-corejs2/helpers/defineProperty', '@babel/runtime-corejs2/core-js/object/keys', '@babel/runtime-corejs2/helpers/typeof', '@babel/runtime-corejs2/core-js/object/get-prototype-of', '@babel/runtime-corejs2/helpers/possibleConstructorReturn', '@babel/runtime-corejs2/helpers/getPrototypeOf', '@babel/runtime-corejs2/helpers/inherits', 'chance'], factory) :
  (global = global || self, factory(global.umd = {}, global._slicedToArray, global._getIterator, global._Array$isArray, global._objectSpread, global._Promise, global._regeneratorRuntime, global._asyncToGenerator, global._Object$assign, global._Set, global._classCallCheck, global._createClass, global._defineProperty, global._Object$keys, global._typeof, global._Object$getPrototypeOf, global._possibleConstructorReturn, global._getPrototypeOf, global._inherits, global.Chance));
}(this, function (exports, _slicedToArray, _getIterator, _Array$isArray, _objectSpread, _Promise, _regeneratorRuntime, _asyncToGenerator, _Object$assign, _Set, _classCallCheck, _createClass, _defineProperty, _Object$keys, _typeof, _Object$getPrototypeOf, _possibleConstructorReturn, _getPrototypeOf, _inherits, Chance) { 'use strict';

  _slicedToArray = _slicedToArray && _slicedToArray.hasOwnProperty('default') ? _slicedToArray['default'] : _slicedToArray;
  _getIterator = _getIterator && _getIterator.hasOwnProperty('default') ? _getIterator['default'] : _getIterator;
  _Array$isArray = _Array$isArray && _Array$isArray.hasOwnProperty('default') ? _Array$isArray['default'] : _Array$isArray;
  _objectSpread = _objectSpread && _objectSpread.hasOwnProperty('default') ? _objectSpread['default'] : _objectSpread;
  _Promise = _Promise && _Promise.hasOwnProperty('default') ? _Promise['default'] : _Promise;
  _regeneratorRuntime = _regeneratorRuntime && _regeneratorRuntime.hasOwnProperty('default') ? _regeneratorRuntime['default'] : _regeneratorRuntime;
  _asyncToGenerator = _asyncToGenerator && _asyncToGenerator.hasOwnProperty('default') ? _asyncToGenerator['default'] : _asyncToGenerator;
  _Object$assign = _Object$assign && _Object$assign.hasOwnProperty('default') ? _Object$assign['default'] : _Object$assign;
  _Set = _Set && _Set.hasOwnProperty('default') ? _Set['default'] : _Set;
  _classCallCheck = _classCallCheck && _classCallCheck.hasOwnProperty('default') ? _classCallCheck['default'] : _classCallCheck;
  _createClass = _createClass && _createClass.hasOwnProperty('default') ? _createClass['default'] : _createClass;
  _defineProperty = _defineProperty && _defineProperty.hasOwnProperty('default') ? _defineProperty['default'] : _defineProperty;
  _Object$keys = _Object$keys && _Object$keys.hasOwnProperty('default') ? _Object$keys['default'] : _Object$keys;
  _typeof = _typeof && _typeof.hasOwnProperty('default') ? _typeof['default'] : _typeof;
  _Object$getPrototypeOf = _Object$getPrototypeOf && _Object$getPrototypeOf.hasOwnProperty('default') ? _Object$getPrototypeOf['default'] : _Object$getPrototypeOf;
  _possibleConstructorReturn = _possibleConstructorReturn && _possibleConstructorReturn.hasOwnProperty('default') ? _possibleConstructorReturn['default'] : _possibleConstructorReturn;
  _getPrototypeOf = _getPrototypeOf && _getPrototypeOf.hasOwnProperty('default') ? _getPrototypeOf['default'] : _getPrototypeOf;
  _inherits = _inherits && _inherits.hasOwnProperty('default') ? _inherits['default'] : _inherits;
  Chance = Chance && Chance.hasOwnProperty('default') ? Chance['default'] : Chance;

  /* eslint-disable no-underscore-dangle */
  function asyncPopulate(target, source) {
    if (_typeof(target) !== 'object') {
      return _Promise.reject(new Error('Invalid target passed'));
    }

    if (_typeof(source) !== 'object') {
      return _Promise.reject(new Error('Invalid source passed'));
    }

    var promises = _Object$keys(source).map(function (attr) {
      var promise;

      if (_Array$isArray(source[attr])) {
        target[attr] = [];
        promise = asyncPopulate(target[attr], source[attr]);
      } else if (source[attr] === null || source[attr] === undefined) {
        target[attr] = source[attr];
      } else if (isPlainObject(source[attr])) {
        target[attr] = target[attr] || {};
        promise = asyncPopulate(target[attr], source[attr]);
      } else if (typeof source[attr] === 'function') {
        promise = _Promise.resolve(source[attr]()).then(function (v) {
          target[attr] = v;
        });
      } else {
        promise = _Promise.resolve(source[attr]).then(function (v) {
          target[attr] = v;
        });
      }

      return promise;
    });

    return _Promise.all(promises);
  }
  /* eslint-enable no-underscore-dangle */

  var objectProto = _Object$getPrototypeOf({});

  function isPlainObject(o) {
    return _Object$getPrototypeOf(o) === objectProto;
  }

  var Factory =
  /*#__PURE__*/
  function () {
    function Factory(Model, initializer) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Factory);

      _defineProperty(this, "name", null);

      _defineProperty(this, "Model", null);

      _defineProperty(this, "initializer", null);

      _defineProperty(this, "options", {});

      if (!Model) {
        throw new Error('Invalid Model constructor passed to the factory');
      }

      if (_typeof(initializer) !== 'object' && typeof initializer !== 'function' || !initializer) {
        throw new Error('Invalid initializer passed to the factory');
      }

      this.Model = Model;
      this.initializer = initializer;
      this.options = _objectSpread({}, this.options, options);
    }

    _createClass(Factory, [{
      key: "getFactoryAttrs",
      value: function getFactoryAttrs() {
        var buildOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var attrs;

        if (typeof this.initializer === 'function') {
          attrs = this.initializer(buildOptions);
        } else {
          attrs = _objectSpread({}, this.initializer);
        }

        return _Promise.resolve(attrs);
      }
    }, {
      key: "attrs",
      value: function () {
        var _attrs = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee() {
          var extraAttrs,
              buildOptions,
              factoryAttrs,
              modelAttrs,
              filteredAttrs,
              _args = arguments;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  extraAttrs = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                  buildOptions = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                  _context.next = 4;
                  return this.getFactoryAttrs(buildOptions);

                case 4:
                  factoryAttrs = _context.sent;
                  modelAttrs = {};
                  filteredAttrs = _Object$keys(factoryAttrs).reduce(function (attrs, name) {
                    if (!extraAttrs.hasOwnProperty(name)) attrs[name] = factoryAttrs[name];
                    return attrs;
                  }, {});
                  _context.next = 9;
                  return asyncPopulate(modelAttrs, filteredAttrs);

                case 9:
                  _context.next = 11;
                  return asyncPopulate(modelAttrs, extraAttrs);

                case 11:
                  return _context.abrupt("return", modelAttrs);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function attrs() {
          return _attrs.apply(this, arguments);
        }

        return attrs;
      }()
    }, {
      key: "build",
      value: function () {
        var _build = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee2(adapter) {
          var extraAttrs,
              buildOptions,
              modelAttrs,
              model,
              _args2 = arguments;
          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  extraAttrs = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                  buildOptions = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
                  _context2.next = 4;
                  return this.attrs(extraAttrs, buildOptions);

                case 4:
                  modelAttrs = _context2.sent;
                  model = adapter.build(this.Model, modelAttrs);
                  return _context2.abrupt("return", this.options.afterBuild ? this.options.afterBuild(model, extraAttrs, buildOptions) : model);

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function build(_x) {
          return _build.apply(this, arguments);
        }

        return build;
      }()
    }, {
      key: "create",
      value: function () {
        var _create = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee3(adapter) {
          var _this = this;

          var attrs,
              buildOptions,
              model,
              _args3 = arguments;
          return _regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  attrs = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
                  buildOptions = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
                  _context3.next = 4;
                  return this.build(adapter, attrs, buildOptions);

                case 4:
                  model = _context3.sent;
                  return _context3.abrupt("return", adapter.save(model, this.Model).then(function (savedModel) {
                    return _this.options.afterCreate ? _this.options.afterCreate(savedModel, attrs, buildOptions) : savedModel;
                  }));

                case 6:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function create(_x2) {
          return _create.apply(this, arguments);
        }

        return create;
      }()
    }, {
      key: "attrsMany",
      value: function attrsMany(num) {
        var attrsArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var buildOptionsArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var attrObject = null;
        var buildOptionsObject = null;

        if (_typeof(attrsArray) === 'object' && !_Array$isArray(attrsArray)) {
          attrObject = attrsArray;
          attrsArray = [];
        }

        if (_typeof(buildOptionsArray) === 'object' && !_Array$isArray(buildOptionsArray)) {
          buildOptionsObject = buildOptionsArray;
          buildOptionsArray = [];
        }

        if (typeof num !== 'number' || num < 1) {
          return _Promise.reject(new Error('Invalid number of objects requested'));
        }

        if (!_Array$isArray(attrsArray)) {
          return _Promise.reject(new Error('Invalid attrsArray passed'));
        }

        if (!_Array$isArray(buildOptionsArray)) {
          return _Promise.reject(new Error('Invalid buildOptionsArray passed'));
        }

        attrsArray.length = buildOptionsArray.length = num;
        var models = [];

        for (var i = 0; i < num; i++) {
          models[i] = this.attrs(attrObject || attrsArray[i] || {}, buildOptionsObject || buildOptionsArray[i] || {});
        }

        return _Promise.all(models);
      }
    }, {
      key: "buildMany",
      value: function () {
        var _buildMany = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee4(adapter, num) {
          var _this2 = this;

          var attrsArray,
              buildOptionsArray,
              buildCallbacks,
              attrs,
              models,
              _args4 = arguments;
          return _regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  attrsArray = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : [];
                  buildOptionsArray = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : [];
                  buildCallbacks = _args4.length > 4 && _args4[4] !== undefined ? _args4[4] : true;
                  _context4.next = 5;
                  return this.attrsMany(num, attrsArray, buildOptionsArray);

                case 5:
                  attrs = _context4.sent;
                  models = attrs.map(function (attr) {
                    return adapter.build(_this2.Model, attr);
                  });
                  return _context4.abrupt("return", _Promise.all(models).then(function (builtModels) {
                    return _this2.options.afterBuild && buildCallbacks ? _Promise.all(builtModels.map(function (builtModel) {
                      return _this2.options.afterBuild(builtModel, attrsArray, buildOptionsArray);
                    })) : builtModels;
                  }));

                case 8:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function buildMany(_x3, _x4) {
          return _buildMany.apply(this, arguments);
        }

        return buildMany;
      }()
    }, {
      key: "createMany",
      value: function () {
        var _createMany = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee5(adapter, num) {
          var _this3 = this;

          var attrsArray,
              buildOptionsArray,
              models,
              savedModels,
              _args5 = arguments;
          return _regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  attrsArray = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : [];
                  buildOptionsArray = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : [];

                  if (_Array$isArray(num)) {
                    buildOptionsArray = attrsArray;
                    attrsArray = num;
                    num = attrsArray.length;
                  }

                  _context5.next = 5;
                  return this.buildMany(adapter, num, attrsArray, buildOptionsArray);

                case 5:
                  models = _context5.sent;
                  savedModels = models.map(function (model) {
                    return adapter.save(model, _this3.Model);
                  });
                  return _context5.abrupt("return", _Promise.all(savedModels).then(function (createdModels) {
                    return _this3.options.afterCreate ? _Promise.all(createdModels.map(function (createdModel) {
                      return _this3.options.afterCreate(createdModel, attrsArray, buildOptionsArray);
                    })) : createdModels;
                  }));

                case 8:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function createMany(_x5, _x6) {
          return _createMany.apply(this, arguments);
        }

        return createMany;
      }()
    }]);

    return Factory;
  }();

  var Generator =
  /*#__PURE__*/
  function () {
    function Generator(factoryGirl) {
      _classCallCheck(this, Generator);

      if (!factoryGirl) {
        throw new Error('No FactoryGirl instance provided');
      }

      this.factoryGirl = factoryGirl;
    }

    _createClass(Generator, [{
      key: "generate",
      value: function generate() {
        throw new Error('Override this method to generate a value');
      }
    }, {
      key: "getAttribute",
      value: function getAttribute(name, model, key) {
        return this.factoryGirl.getAdapter(name).get(model, key);
      }
    }]);

    return Generator;
  }();

  var Sequence =
  /*#__PURE__*/
  function (_Generator) {
    _inherits(Sequence, _Generator);

    function Sequence() {
      _classCallCheck(this, Sequence);

      return _possibleConstructorReturn(this, _getPrototypeOf(Sequence).apply(this, arguments));
    }

    _createClass(Sequence, [{
      key: "generate",
      value: function generate() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (typeof id === 'function') {
          callback = id;
          id = null;
        }

        id = id || this.id || (this.id = generateId());
        Sequence.sequences[id] = Sequence.sequences[id] || 1;
        var next = Sequence.sequences[id]++;
        return callback ? callback(next) : next;
      }
    }], [{
      key: "reset",
      value: function reset() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (!id) {
          Sequence.sequences = {};
        } else {
          Sequence.sequences[id] = undefined;
        }
      }
    }]);

    return Sequence;
  }(Generator);

  _defineProperty(Sequence, "sequences", {});

  function generateId() {
    var id;
    var i = 0;

    do {
      id = "_".concat(i++);
    } while (id in Sequence.sequences);

    return id;
  }

  var Assoc =
  /*#__PURE__*/
  function (_Generator) {
    _inherits(Assoc, _Generator);

    function Assoc() {
      _classCallCheck(this, Assoc);

      return _possibleConstructorReturn(this, _getPrototypeOf(Assoc).apply(this, arguments));
    }

    _createClass(Assoc, [{
      key: "generate",
      value: function () {
        var _generate = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(name) {
          var key,
              attrs,
              buildOptions,
              model,
              _args = arguments;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  key = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
                  attrs = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
                  buildOptions = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
                  _context.next = 5;
                  return this.factoryGirl.create(name, attrs, buildOptions);

                case 5:
                  model = _context.sent;
                  return _context.abrupt("return", key ? this.getAttribute(name, model, key) : model);

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function generate(_x) {
          return _generate.apply(this, arguments);
        }

        return generate;
      }()
    }]);

    return Assoc;
  }(Generator);

  var AssocAttrs =
  /*#__PURE__*/
  function (_Generator) {
    _inherits(AssocAttrs, _Generator);

    function AssocAttrs() {
      _classCallCheck(this, AssocAttrs);

      return _possibleConstructorReturn(this, _getPrototypeOf(AssocAttrs).apply(this, arguments));
    }

    _createClass(AssocAttrs, [{
      key: "generate",
      value: function () {
        var _generate = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(name) {
          var key,
              attrs,
              buildOptions,
              model,
              _args = arguments;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  key = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
                  attrs = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
                  buildOptions = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
                  _context.next = 5;
                  return this.factoryGirl.attrs(name, attrs, buildOptions);

                case 5:
                  model = _context.sent;
                  return _context.abrupt("return", key ? this.getAttribute(name, model, key) : model);

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function generate(_x) {
          return _generate.apply(this, arguments);
        }

        return generate;
      }()
    }]);

    return AssocAttrs;
  }(Generator);

  var AssocMany =
  /*#__PURE__*/
  function (_Generator) {
    _inherits(AssocMany, _Generator);

    function AssocMany() {
      _classCallCheck(this, AssocMany);

      return _possibleConstructorReturn(this, _getPrototypeOf(AssocMany).apply(this, arguments));
    }

    _createClass(AssocMany, [{
      key: "generate",
      value: function () {
        var _generate = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(name, num) {
          var _this = this;

          var key,
              attrs,
              buildOptions,
              models,
              _args = arguments;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  key = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
                  attrs = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
                  buildOptions = _args.length > 4 && _args[4] !== undefined ? _args[4] : {};
                  _context.next = 5;
                  return this.factoryGirl.createMany(name, num, attrs, buildOptions);

                case 5:
                  models = _context.sent;
                  return _context.abrupt("return", key ? models.map(function (model) {
                    return _this.getAttribute(name, model, key);
                  }) : models);

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function generate(_x, _x2) {
          return _generate.apply(this, arguments);
        }

        return generate;
      }()
    }]);

    return AssocMany;
  }(Generator);

  var AssocAttrsMany =
  /*#__PURE__*/
  function (_Generator) {
    _inherits(AssocAttrsMany, _Generator);

    function AssocAttrsMany() {
      _classCallCheck(this, AssocAttrsMany);

      return _possibleConstructorReturn(this, _getPrototypeOf(AssocAttrsMany).apply(this, arguments));
    }

    _createClass(AssocAttrsMany, [{
      key: "generate",
      value: function () {
        var _generate = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(name, num) {
          var _this = this;

          var key,
              attrs,
              buildOptions,
              models,
              _args = arguments;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  key = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
                  attrs = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
                  buildOptions = _args.length > 4 && _args[4] !== undefined ? _args[4] : {};

                  if (!(typeof num !== 'number' || num < 1)) {
                    _context.next = 5;
                    break;
                  }

                  throw new Error('Invalid number of items requested');

                case 5:
                  _context.next = 7;
                  return this.factoryGirl.attrsMany(name, num, attrs, buildOptions);

                case 7:
                  models = _context.sent;
                  return _context.abrupt("return", key ? models.map(function (model) {
                    return _this.getAttribute(name, model, key);
                  }) : models);

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function generate(_x, _x2) {
          return _generate.apply(this, arguments);
        }

        return generate;
      }()
    }]);

    return AssocAttrsMany;
  }(Generator);

  var chance = new Chance();

  var ChanceGenerator =
  /*#__PURE__*/
  function (_Generator) {
    _inherits(ChanceGenerator, _Generator);

    function ChanceGenerator() {
      _classCallCheck(this, ChanceGenerator);

      return _possibleConstructorReturn(this, _getPrototypeOf(ChanceGenerator).apply(this, arguments));
    }

    _createClass(ChanceGenerator, [{
      key: "generate",
      value: function generate(chanceMethod) {
        if (typeof chance[chanceMethod] !== 'function') {
          throw new Error('Invalid chance method requested');
        }

        for (var _len = arguments.length, options = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          options[_key - 1] = arguments[_key];
        }

        return chance[chanceMethod].apply(chance, options);
      }
    }]);

    return ChanceGenerator;
  }(Generator);

  var OneOf =
  /*#__PURE__*/
  function (_Generator) {
    _inherits(OneOf, _Generator);

    function OneOf() {
      _classCallCheck(this, OneOf);

      return _possibleConstructorReturn(this, _getPrototypeOf(OneOf).apply(this, arguments));
    }

    _createClass(OneOf, [{
      key: "generate",
      value: function () {
        var _generate = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(possibleValues) {
          var size, randomIndex, value;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (_Array$isArray(possibleValues)) {
                    _context.next = 2;
                    break;
                  }

                  throw new Error('Expected an array of possible values');

                case 2:
                  if (!(possibleValues.length < 1)) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('Empty array passed for possible values');

                case 4:
                  size = possibleValues.length;
                  randomIndex = Math.floor(Math.random() * size);
                  value = possibleValues[randomIndex];
                  return _context.abrupt("return", typeof value === 'function' ? value() : value);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function generate(_x) {
          return _generate.apply(this, arguments);
        }

        return generate;
      }()
    }]);

    return OneOf;
  }(Generator);

  /* eslint-disable no-unused-vars */
  var DefaultAdapter =
  /*#__PURE__*/
  function () {
    function DefaultAdapter() {
      _classCallCheck(this, DefaultAdapter);
    }

    _createClass(DefaultAdapter, [{
      key: "build",
      value: function build(Model, props) {
        return new Model(props);
      }
    }, {
      key: "save",
      value: function () {
        var _save = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(model, Model) {
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", _Promise.resolve(model.save()).then(function () {
                    return model;
                  }));

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function save(_x, _x2) {
          return _save.apply(this, arguments);
        }

        return save;
      }()
    }, {
      key: "destroy",
      value: function () {
        var _destroy = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee2(model, Model) {
          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", _Promise.resolve(model.destroy()).then(function () {
                    return model;
                  }));

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function destroy(_x3, _x4) {
          return _destroy.apply(this, arguments);
        }

        return destroy;
      }()
    }, {
      key: "get",
      value: function get(model, attr, Model) {
        return model.get(attr);
      }
    }, {
      key: "set",
      value: function set(props, model, Model) {
        return model.set(props);
      }
    }]);

    return DefaultAdapter;
  }();

  var FactoryGirl =
  /*#__PURE__*/
  function () {
    function FactoryGirl() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, FactoryGirl);

      _defineProperty(this, "factories", {});

      _defineProperty(this, "options", {});

      _defineProperty(this, "adapters", {});

      _defineProperty(this, "created", new _Set());

      this.assoc = generatorThunk(this, Assoc);
      this.assocMany = generatorThunk(this, AssocMany);
      this.assocBuild = deprecate('assocBuild', 'assocAttrs');
      this.assocBuildMany = deprecate('assocBuildMany', 'assocAttrsMany');
      this.assocAttrs = generatorThunk(this, AssocAttrs);
      this.assocAttrsMany = generatorThunk(this, AssocAttrsMany);

      this.seq = this.sequence = function () {
        return generatorThunk(_this, Sequence).apply(void 0, arguments);
      };

      this.resetSeq = this.resetSequence = function (id) {
        Sequence.reset(id);
      };

      this.chance = generatorThunk(this, ChanceGenerator);
      this.oneOf = generatorThunk(this, OneOf);
      this.defaultAdapter = new DefaultAdapter();
      this.options = options;
    }

    _createClass(FactoryGirl, [{
      key: "define",
      value: function define(name, Model, initializer) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        if (this.getFactory(name, false)) {
          throw new Error("Factory ".concat(name, " already defined"));
        }

        var factory = this.factories[name] = new Factory(Model, initializer, options);
        return factory;
      }
    }, {
      key: "extend",
      value: function extend(parent, name, childInitializer) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        if (this.getFactory(name, false)) {
          throw new Error("Factory ".concat(name, " already defined"));
        }

        var parentFactory = this.getFactory(parent, true);
        var Model = options.model || parentFactory.Model;
        var jointInitializer;

        function resolveInitializer(initializer, buildOptions) {
          return typeof initializer === 'function' ? initializer(buildOptions) : initializer;
        }

        if (typeof parentFactory.initializer === 'function' || typeof childInitializer === 'function') {
          jointInitializer = function initializer() {
            var buildOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return _Object$assign({}, resolveInitializer(parentFactory.initializer, buildOptions), resolveInitializer(childInitializer, buildOptions));
          };
        } else {
          jointInitializer = _Object$assign({}, parentFactory.initializer, childInitializer);
        }

        var factory = this.factories[name] = new Factory(Model, jointInitializer, options);
        return factory;
      }
    }, {
      key: "attrs",
      value: function () {
        var _attrs2 = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(name, _attrs) {
          var buildOptions,
              _args = arguments;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  buildOptions = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
                  return _context.abrupt("return", this.getFactory(name).attrs(_attrs, buildOptions));

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function attrs(_x, _x2) {
          return _attrs2.apply(this, arguments);
        }

        return attrs;
      }()
    }, {
      key: "build",
      value: function () {
        var _build = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee2(name) {
          var _this2 = this;

          var attrs,
              buildOptions,
              adapter,
              _args2 = arguments;
          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  attrs = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                  buildOptions = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
                  adapter = this.getAdapter(name);
                  return _context2.abrupt("return", this.getFactory(name).build(adapter, attrs, buildOptions).then(function (model) {
                    return _this2.options.afterBuild ? _this2.options.afterBuild(model, attrs, buildOptions) : model;
                  }));

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function build(_x3) {
          return _build.apply(this, arguments);
        }

        return build;
      }()
    }, {
      key: "create",
      value: function () {
        var _create = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee3(name, attrs) {
          var _this3 = this;

          var buildOptions,
              adapter,
              _args3 = arguments;
          return _regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  buildOptions = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
                  adapter = this.getAdapter(name);
                  return _context3.abrupt("return", this.getFactory(name).create(adapter, attrs, buildOptions).then(function (createdModel) {
                    return _this3.addToCreatedList(adapter, createdModel);
                  }).then(function (model) {
                    return _this3.options.afterCreate ? _this3.options.afterCreate(model, attrs, buildOptions) : model;
                  }));

                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function create(_x4, _x5) {
          return _create.apply(this, arguments);
        }

        return create;
      }()
    }, {
      key: "attrsMany",
      value: function attrsMany(name, num, attrs) {
        var buildOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        return this.getFactory(name).attrsMany(num, attrs, buildOptions);
      }
    }, {
      key: "buildMany",
      value: function () {
        var _buildMany = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee4(name, num, attrs) {
          var _this4 = this;

          var buildOptions,
              adapter,
              _args4 = arguments;
          return _regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  buildOptions = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : {};
                  adapter = this.getAdapter(name);
                  return _context4.abrupt("return", this.getFactory(name).buildMany(adapter, num, attrs, buildOptions).then(function (models) {
                    return _this4.options.afterBuild ? _Promise.all(models.map(function (model) {
                      return _this4.options.afterBuild(model, attrs, buildOptions);
                    })) : models;
                  }));

                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function buildMany(_x6, _x7, _x8) {
          return _buildMany.apply(this, arguments);
        }

        return buildMany;
      }()
    }, {
      key: "createMany",
      value: function () {
        var _createMany = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee5(name, num, attrs) {
          var _this5 = this;

          var buildOptions,
              adapter,
              _args5 = arguments;
          return _regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  buildOptions = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : {};
                  adapter = this.getAdapter(name);
                  return _context5.abrupt("return", this.getFactory(name).createMany(adapter, num, attrs, buildOptions).then(function (models) {
                    return _this5.addToCreatedList(adapter, models);
                  }).then(function (models) {
                    return _this5.options.afterCreate ? _Promise.all(models.map(function (model) {
                      return _this5.options.afterCreate(model, attrs, buildOptions);
                    })) : models;
                  }));

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function createMany(_x9, _x10, _x11) {
          return _createMany.apply(this, arguments);
        }

        return createMany;
      }()
    }, {
      key: "getFactory",
      value: function getFactory(name) {
        var throwError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (!this.factories[name] && throwError) {
          throw new Error("Invalid factory '".concat(name, "' requested"));
        }

        return this.factories[name];
      }
    }, {
      key: "withOptions",
      value: function withOptions(options) {
        var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.options = merge ? _objectSpread({}, this.options, options) : options;
      }
    }, {
      key: "getAdapter",
      value: function getAdapter(factory) {
        return factory ? this.adapters[factory] || this.defaultAdapter : this.defaultAdapter;
      }
    }, {
      key: "addToCreatedList",
      value: function addToCreatedList(adapter, models) {
        if (!_Array$isArray(models)) {
          this.created.add([adapter, models]);
        } else {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _getIterator(models), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var model = _step.value;
              this.created.add([adapter, model]);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        return models;
      }
    }, {
      key: "cleanUp",
      value: function cleanUp() {
        var createdArray = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _getIterator(this.created), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var c = _step2.value;
            createdArray.push(c);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        var promise = createdArray.reduce(function (prev, _ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              adapter = _ref2[0],
              model = _ref2[1];

          return prev.then(function () {
            return adapter.destroy(model, model.constructor);
          });
        }, _Promise.resolve());
        this.created.clear();
        this.resetSeq();
        return promise;
      }
    }, {
      key: "setAdapter",
      value: function setAdapter(adapter) {
        var _this6 = this;

        var factoryNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (!factoryNames) {
          this.defaultAdapter = adapter;
        } else {
          factoryNames = _Array$isArray(factoryNames) ? factoryNames : [factoryNames];
          factoryNames.forEach(function (name) {
            _this6.adapters[name] = adapter;
          });
        }

        return adapter;
      }
    }]);

    return FactoryGirl;
  }();
  function generatorThunk(factoryGirl, SomeGenerator) {
    var generator = new SomeGenerator(factoryGirl);
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return function () {
        return generator.generate.apply(generator, args);
      };
    };
  }

  function deprecate(method, see) {
    return function () {
      throw new Error("The ".concat(method, " method has been deprecated, use ").concat(see, " instead"));
    };
  }

  /* eslint-disable no-unused-vars */

  var ObjectAdapter =
  /*#__PURE__*/
  function (_DefaultAdapter) {
    _inherits(ObjectAdapter, _DefaultAdapter);

    function ObjectAdapter() {
      _classCallCheck(this, ObjectAdapter);

      return _possibleConstructorReturn(this, _getPrototypeOf(ObjectAdapter).apply(this, arguments));
    }

    _createClass(ObjectAdapter, [{
      key: "build",
      value: function build(Model, props) {
        var model = new Model();
        this.set(props, model, Model);
        return model;
      }
    }, {
      key: "save",
      value: function () {
        var _save = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(model, Model) {
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", model);

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function save(_x, _x2) {
          return _save.apply(this, arguments);
        }

        return save;
      }()
    }, {
      key: "destroy",
      value: function () {
        var _destroy = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee2(model, Model) {
          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", model);

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function destroy(_x3, _x4) {
          return _destroy.apply(this, arguments);
        }

        return destroy;
      }()
    }, {
      key: "get",
      value: function get(model, attr, Model) {
        return model[attr];
      }
    }, {
      key: "set",
      value: function set(props, model, Model) {
        return _Object$assign(model, props);
      }
    }]);

    return ObjectAdapter;
  }(DefaultAdapter);

  /* eslint-disable no-unused-vars */

  var BookshelfAdapter =
  /*#__PURE__*/
  function (_DefaultAdapter) {
    _inherits(BookshelfAdapter, _DefaultAdapter);

    function BookshelfAdapter() {
      _classCallCheck(this, BookshelfAdapter);

      return _possibleConstructorReturn(this, _getPrototypeOf(BookshelfAdapter).apply(this, arguments));
    }

    _createClass(BookshelfAdapter, [{
      key: "save",
      value: function save(doc, Model) {
        return doc.save(null, {
          method: 'insert'
        });
      }
    }]);

    return BookshelfAdapter;
  }(DefaultAdapter);

  /* eslint-disable no-unused-vars */

  var MongooseAdapter =
  /*#__PURE__*/
  function (_DefaultAdapter) {
    _inherits(MongooseAdapter, _DefaultAdapter);

    function MongooseAdapter() {
      _classCallCheck(this, MongooseAdapter);

      return _possibleConstructorReturn(this, _getPrototypeOf(MongooseAdapter).apply(this, arguments));
    }

    _createClass(MongooseAdapter, [{
      key: "destroy",
      value: function () {
        var _destroy = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(model, Model) {
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", model.remove());

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function destroy(_x, _x2) {
          return _destroy.apply(this, arguments);
        }

        return destroy;
      }()
    }]);

    return MongooseAdapter;
  }(DefaultAdapter);

  /* eslint-disable no-unused-vars */

  var SequelizeAdapter =
  /*#__PURE__*/
  function (_DefaultAdapter) {
    _inherits(SequelizeAdapter, _DefaultAdapter);

    function SequelizeAdapter() {
      _classCallCheck(this, SequelizeAdapter);

      return _possibleConstructorReturn(this, _getPrototypeOf(SequelizeAdapter).apply(this, arguments));
    }

    _createClass(SequelizeAdapter, [{
      key: "build",
      value: function build(Model, props) {
        return Model.build(props);
      }
    }]);

    return SequelizeAdapter;
  }(DefaultAdapter);

  /* eslint-disable no-unused-vars */

  var ReduxORMAdapter =
  /*#__PURE__*/
  function (_DefaultAdapter) {
    _inherits(ReduxORMAdapter, _DefaultAdapter);

    function ReduxORMAdapter(session) {
      var _this;

      _classCallCheck(this, ReduxORMAdapter);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ReduxORMAdapter).call(this));
      _this.session = session;
      return _this;
    }

    _createClass(ReduxORMAdapter, [{
      key: "build",
      value: function build(modelName, props) {
        return this.session[modelName].create(props);
      }
    }, {
      key: "get",
      value: function get(model, attr) {
        return model[attr];
      }
    }, {
      key: "save",
      value: function () {
        var _save = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(model, Model) {
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", model);

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function save(_x, _x2) {
          return _save.apply(this, arguments);
        }

        return save;
      }()
    }, {
      key: "destroy",
      value: function () {
        var _destroy = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee2(model, Model) {
          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", _Promise.resolve(model.delete()).then(function () {
                    return true;
                  }));

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function destroy(_x3, _x4) {
          return _destroy.apply(this, arguments);
        }

        return destroy;
      }()
    }]);

    return ReduxORMAdapter;
  }(DefaultAdapter);

  var factory = new FactoryGirl();
  factory.FactoryGirl = FactoryGirl;

  exports.ObjectAdapter = ObjectAdapter;
  exports.BookshelfAdapter = BookshelfAdapter;
  exports.DefaultAdapter = DefaultAdapter;
  exports.MongooseAdapter = MongooseAdapter;
  exports.SequelizeAdapter = SequelizeAdapter;
  exports.ReduxORMAdapter = ReduxORMAdapter;
  exports.factory = factory;
  exports.default = factory;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
