"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Order_Checkout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Checkout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Checkout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaymentForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentForm.vue */ "./resources/js/components/Order/PaymentForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PaymentForm: _PaymentForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      isProceedToPayment: false
    };
  },
  computed: {
    cart: function cart() {
      return this.$store.state.cart;
    },
    cartQuantity: function cartQuantity() {
      return this.$store.state.cart.reduce(function (acc, item) {
        return acc + item.quantity;
      }, 0);
    },
    cartTotal: function cartTotal() {
      var price = this.$store.state.cart.reduce(function (acc, item) {
        return acc + item.amount * item.quantity;
      }, 0);
      return this.formatCurrency(price);
    }
  },
  methods: {
    removeFromCart: function removeFromCart(index) {
      this.$store.commit('removeFromCart', index);
    },
    cartLineTotal: function cartLineTotal(item) {
      var price = item.amount * item.quantity;
      return this.formatCurrency(price);
    },
    formatCurrency: function formatCurrency(price) {
      price = price / 100;
      return price.toLocaleString('en-SG', {
        style: 'currency',
        currency: 'SGD'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/PaymentForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/PaymentForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { loadStripe } from '@stripe/stripe-js';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: [],
  name: 'PaymentForm',
  data: function data() {
    return {
      stripe: {},
      cardElement: {},
      paymentProcessing: false,
      user: {
        title: 'Mr',
        givenName: 'Marnelle',
        familyName: 'Apat',
        email: 'marnelle24@gmail.com',
        contactNo: 'marnelle24@gmail.com',
        address1: 'Arcenas St, Sta Ana',
        address2: 'Labango',
        city: 'Cebu City',
        country: 'SG',
        postcode: '6000'
      }
    };
  },
  mounted: function mounted() {// const stripe_apiKey = 'pk_test_51KPSpAGYOLqshLvifq7OcpiqvhGn1AZislKKhYBXA90Tk7vcvJ1hkXX93m86Tp1wJWhp8Ohfml6GzXzCo1PKjuSo005hWihw5c';
    // this.stripe = await loadStripe(stripe_apiKey);
    // const elements = this.stripe.elements();
    // this.cardElement = elements.create('card', {
    //     classes: {
    //         base: 'bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out'
    //     }
    // });
    // this.cardElement.mount('#card-element');

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    processPayment: function processPayment() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$_this$stripe$c, paymentMethod, error;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // send the payment information to Laravel + Stripe
                _this.paymentProcessing = true;
                _context2.next = 3;
                return _this.stripe.createPaymentMethod('card', _this.cardElement, {
                  billing_details: {
                    name: _this.user.title + ' ' + _this.user.givenName + ' ' + _this.user.familyName,
                    email: _this.user.email,
                    address: {
                      line1: _this.user.address1,
                      line2: _this.user.address2,
                      city: _this.user.city,
                      country: _this.user.country,
                      postal_code: _this.user.postcode
                    }
                  }
                });

              case 3:
                _yield$_this$stripe$c = _context2.sent;
                paymentMethod = _yield$_this$stripe$c.paymentMethod;
                error = _yield$_this$stripe$c.error;

                // error processing the payment
                if (error) {
                  _this.paymentProcessing = false;
                  alert(error);
                } // no error during the payment processing
                else {
                  _this.user.payment_method_id = paymentMethod.id;
                  _this.user.amount = _this.$store.state.cart.reduce(function (acc, item) {
                    return acc + item.amount * item.quantity;
                  }, 0);
                  _this.user.cart = JSON.stringify(_this.$store.state.cart); // store in the database after payment processing

                  axios.post('/api/purchase', _this.user).then(function (response) {
                    _this.paymentProcessing = false; // console.log(response);

                    _this.$store.commit('updateOrder', response.data);

                    _this.$store.dispatch('clearCart');

                    _this.$router.push({
                      name: 'order.summary'
                    });
                  })["catch"](function (error) {
                    _this.paymentProcessing = false;
                    alert(error);
                  });
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Order/Checkout.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Order/Checkout.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Checkout_vue_vue_type_template_id_c4431a9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.vue?vue&type=template&id=c4431a9c&scoped=true& */ "./resources/js/components/Order/Checkout.vue?vue&type=template&id=c4431a9c&scoped=true&");
/* harmony import */ var _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkout.vue?vue&type=script&lang=js& */ "./resources/js/components/Order/Checkout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Checkout_vue_vue_type_template_id_c4431a9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Checkout_vue_vue_type_template_id_c4431a9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c4431a9c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Order/Checkout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Order/PaymentForm.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Order/PaymentForm.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaymentForm_vue_vue_type_template_id_6a7fa72e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentForm.vue?vue&type=template&id=6a7fa72e& */ "./resources/js/components/Order/PaymentForm.vue?vue&type=template&id=6a7fa72e&");
/* harmony import */ var _PaymentForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Order/PaymentForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaymentForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaymentForm_vue_vue_type_template_id_6a7fa72e___WEBPACK_IMPORTED_MODULE_0__.render,
  _PaymentForm_vue_vue_type_template_id_6a7fa72e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Order/PaymentForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Order/Checkout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Order/Checkout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Checkout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Order/PaymentForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Order/PaymentForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/PaymentForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Order/Checkout.vue?vue&type=template&id=c4431a9c&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Order/Checkout.vue?vue&type=template&id=c4431a9c&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_c4431a9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_c4431a9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_c4431a9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Checkout.vue?vue&type=template&id=c4431a9c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Checkout.vue?vue&type=template&id=c4431a9c&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Order/PaymentForm.vue?vue&type=template&id=6a7fa72e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Order/PaymentForm.vue?vue&type=template&id=6a7fa72e& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentForm_vue_vue_type_template_id_6a7fa72e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentForm_vue_vue_type_template_id_6a7fa72e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentForm_vue_vue_type_template_id_6a7fa72e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentForm.vue?vue&type=template&id=6a7fa72e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/PaymentForm.vue?vue&type=template&id=6a7fa72e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Checkout.vue?vue&type=template&id=c4431a9c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Checkout.vue?vue&type=template&id=c4431a9c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "px-5 mt-12" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "lg:ml-30 md:ml-0 sm:ml-0 w-100 border-b-1 mt-5" },
        [
          _vm.cart.length
            ? _c(
                "table",
                {
                  staticClass:
                    "rounded-lg bg-white divide-y divide-gray-300 overflow-hidden w-full",
                },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    { staticClass: "divide-y divide-gray-200" },
                    [
                      _vm._l(_vm.cart, function (item, index) {
                        return _c(
                          "tr",
                          {
                            key: item.id,
                            staticClass: "border-b-1 border-gray-400",
                          },
                          [
                            _c(
                              "td",
                              { staticClass: "p-4" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass:
                                      "hover:text-gray-600 font-semibold text-gray-800",
                                    attrs: {
                                      to: {
                                        name: "event.show",
                                        params: { slug: item.slug },
                                      },
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(item.event_name) +
                                        "\n                        "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "p-4 text-center" }, [
                              _vm._v(_vm._s(item.quantity)),
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "p-4 text-left" }, [
                              _vm._v(_vm._s(_vm.formatCurrency(item.amount))),
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "p-4 text-left" }, [
                              _vm._v(_vm._s(_vm.cartLineTotal(item))),
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "p-4" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "flex ml-auto bg-none text-red-500 hover:text-red-700 font-normal",
                                  on: {
                                    click: function ($event) {
                                      return _vm.removeFromCart(index)
                                    },
                                  },
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "h-5 w-5",
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                      },
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "fill-rule": "evenodd",
                                          d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
                                          "clip-rule": "evenodd",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _c("tr", { staticClass: "border-t-2 bg-gray-100" }, [
                        _c("td", { staticClass: "p-4 font-bold" }, [
                          _vm._v("Total Amount"),
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "p-4 font-bold text-center" }, [
                          _vm._v(_vm._s(_vm.cartQuantity)),
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(" ")]),
                        _vm._v(" "),
                        _c("td", { staticClass: "p-4 font-bold text-left" }, [
                          _vm._v(_vm._s(_vm.cartTotal)),
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(" ")]),
                      ]),
                    ],
                    2
                  ),
                ]
              )
            : _c(
                "p",
                { staticClass: "text-left italic text-lg text-gray-500" },
                [_vm._v("No items on the cart found.")]
              ),
        ]
      ),
      _vm._v(" "),
      _vm.cart.length
        ? _c(
            "div",
            { staticClass: "lg:ml-30 md:ml-0 sm:ml-0 w-100 border-b-1 mt-5" },
            [
              _c(
                "button",
                {
                  staticClass:
                    "flex ml-auto bg-green-500 hover:bg-green-600 font-semibold rounded-full py-2 px-3 text-white",
                  on: {
                    click: function ($event) {
                      _vm.isProceedToPayment = true
                    },
                  },
                },
                [_vm._v("\n            PROCEED TO PAYMENT\n        ")]
              ),
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isProceedToPayment ? _c("PaymentForm") : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lg:ml-30 md:ml-0 sm:ml-0 w-100" }, [
      _c("h4", { staticClass: "text-gray-900 text-lg font-semibold" }, [
        _vm._v("Checkout Orders"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "sm:text-sm" }, [
      _c("tr", [
        _c(
          "th",
          {
            staticClass:
              "px-4 py-4 tracking-wide font-medium text-gray-900 text-sm bg-gray-200 text-left",
          },
          [_vm._v("Item")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-4 tracking-wide font-medium text-gray-900 text-sm bg-gray-200 text-center",
          },
          [_vm._v("Quantity")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-4 tracking-wide font-medium text-gray-900 text-sm bg-gray-200 text-left",
          },
          [_vm._v("Price")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-4 tracking-wide font-medium text-gray-900 text-sm bg-gray-200 text-left",
          },
          [_vm._v("Total")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-4 tracking-wide font-medium text-gray-900 text-sm bg-gray-200",
          },
          [_vm._v(" ")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/PaymentForm.vue?vue&type=template&id=6a7fa72e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/PaymentForm.vue?vue&type=template&id=6a7fa72e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "lg:ml-30 md:ml-0 sm:ml-0 w-100 mt-10" }, [
      _c("div", { staticClass: "flex flex-wrap -mx-2 mt-4" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "p-2 mb-24 w-full" }, [
          _c("button", {
            staticClass:
              "flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:ountline-none",
            attrs: { disabled: _vm.paymentProcessing },
            domProps: {
              textContent: _vm._s(
                _vm.paymentProcessing ? "Processing" : "Pay Now"
              ),
            },
            on: {
              click: function ($event) {
                return _vm.processPayment()
              },
            },
          }),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lg:ml-30 md:ml-0 sm:ml-0 w-100 mt-10" }, [
      _c("hr", { staticClass: "mb-10" }),
      _vm._v(" "),
      _c("h4", { staticClass: "text-gray-900 font-semibold text-2xl" }, [
        _vm._v("Payment Details"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-2 w-full" }, [
      _c("div", { staticClass: "relative" }, [
        _c(
          "label",
          {
            staticClass: "leading-7 text-sm text-gray-40",
            attrs: { for: "card_element" },
          },
          [_vm._v("Credit Card Information")]
        ),
        _vm._v(" "),
        _c("div", { attrs: { id: "card-element" } }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);