/******/ var __webpack_modules__ = ({

/***/ "./src/app.tag.ts":
/*!************************!*\
  !*** ./src/app.tag.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taggedjs */ "../../taggedjs/main/dist/js/index.js");
/* harmony import */ var taggedjs_animate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taggedjs-animate-css */ "../main/dist/js/index.js");


const app = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tag)(() => {
    let showHide = false;
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.states)(get => [{ showHide }] = get({ showHide }));
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
    hello world
    ${showHide && ((0,taggedjs_animate_css__WEBPACK_IMPORTED_MODULE_1__.animateWrap)().innerHTML = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
      Hello animated world 33
    `)}
    ${showHide && ((0,taggedjs_animate_css__WEBPACK_IMPORTED_MODULE_1__.animateLoop)().innerHTML = (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.html) `
      Hello animated world 33
    `)}
    <button type="button" onclick=${() => showHide = !showHide}>show/hide ${showHide}</button>
  `;
});


/***/ }),

/***/ "./src/run.function.ts":
/*!*****************************!*\
  !*** ./src/run.function.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   run: () => (/* binding */ run)
/* harmony export */ });
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taggedjs */ "../../taggedjs/main/dist/js/index.js");
/* harmony import */ var _app_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.tag */ "./src/app.tag.ts");


const run = () => {
    console.info('attaching app to element...');
    const element = document.getElementsByTagName('app')[0];
    (0,taggedjs__WEBPACK_IMPORTED_MODULE_0__.tagElement)(_app_tag__WEBPACK_IMPORTED_MODULE_1__.app, element, { test: 1 });
};


/***/ }),

/***/ "../main/dist/js/createFx.function.js":
/*!********************************************!*\
  !*** ../main/dist/js/createFx.function.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captureElementPosition: () => (/* binding */ captureElementPosition),
/* harmony export */   createFx: () => (/* binding */ createFx)
/* harmony export */ });
function createFx({ fxIn, fxOut, staggerBy = 300, outPositionAbsolute = true, }) {
    return {
        in: (input) => animateInit({ fxName: fxIn, staggerBy, ...input }),
        out: (input) => animateDestroy({ fxName: fxOut, staggerBy, outPositionAbsolute, ...input }),
    };
}
const animateInit = async ({ target, stagger, staggerBy, fxName = 'fadeInDown' }) => {
    target.style.opacity = '0';
    if (stagger) {
        await wait(stagger * staggerBy);
    }
    target.style.opacity = '1';
    target.classList.add('animate__animated', 'animate__' + fxName);
};
const animateDestroy = async ({ target, stagger, outPositionAbsolute = true, fxName = 'fadeOutUp', staggerBy }) => {
    if (!outPositionAbsolute) {
        console.log('outPositionAbsolute', outPositionAbsolute);
    }
    if (outPositionAbsolute) {
        captureElementPosition(target);
    }
    if (stagger) {
        await wait(stagger * staggerBy);
    }
    return new Promise(function (res) {
        // Create a one-time event listener
        function handleAnimationEnd(event) {
            // Optional: make sure the event is from the target element
            if (event.target !== target)
                return;
            // Clean up
            target.classList.remove('animate__animated', 'animate__' + fxName);
            target.removeEventListener('animationend', handleAnimationEnd);
            res(undefined);
        }
        target.classList.add('animate__animated', 'animate__' + fxName);
        target.addEventListener('animationend', handleAnimationEnd);
    });
};
// absolute
function captureElementPosition(element) {
    element.style.zIndex = element.style.zIndex || 1;
    const toTop = element.offsetTop + 'px';
    const toLeft = element.offsetLeft + 'px';
    const toWidth = (element.clientWidth + (element.offsetWidth - element.clientWidth) + 1) + 'px';
    const toHeight = (element.clientHeight + (element.offsetHeight - element.clientHeight) + 1) + 'px';
    const fix = () => {
        element.style.top = toTop;
        element.style.left = toLeft;
        element.style.width = toWidth;
        element.style.height = toHeight;
        element.style.position = 'absolute';
    };
    // element.style.position = 'fixed'
    // allow other elements that are being removed to have a moment to figure out where they currently sit
    setTimeout(fix, 0);
}
function wait(time) {
    return new Promise((res) => {
        setTimeout(res, time);
    });
}
//# sourceMappingURL=createFx.function.js.map

/***/ }),

/***/ "../main/dist/js/index.js":
/*!********************************!*\
  !*** ../main/dist/js/index.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateLoop: () => (/* binding */ animateLoop),
/* harmony export */   animateWrap: () => (/* binding */ animateWrap),
/* harmony export */   fadeIn: () => (/* binding */ fadeIn),
/* harmony export */   fadeInDown: () => (/* binding */ fadeInDown),
/* harmony export */   fadeOut: () => (/* binding */ fadeOut),
/* harmony export */   fadeOutUp: () => (/* binding */ fadeOutUp)
/* harmony export */ });
/* harmony import */ var _createFx_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createFx.function.js */ "../main/dist/js/createFx.function.js");
/* harmony import */ var taggedjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taggedjs */ "../../taggedjs/main/dist/js/index.js");


const { in: fadeInDown, out: fadeOutUp } = (0,_createFx_function_js__WEBPACK_IMPORTED_MODULE_0__.createFx)({ fxIn: 'fadeInDown', fxOut: 'fadeOutUp' });
const { in: fadeIn, out: fadeOut } = (0,_createFx_function_js__WEBPACK_IMPORTED_MODULE_0__.createFx)({ fxIn: 'fadeIn', fxOut: 'fadeOut' });
/** Use on html elements to have them animated in and out */
function animateWrap({ fxIn, fxOut, duration = '.2s', outPositionAbsolute = false, } = {
    duration: '.2s',
    outPositionAbsolute: false,
}) {
    if (!fxIn || !fxOut) {
        const created = (0,_createFx_function_js__WEBPACK_IMPORTED_MODULE_0__.createFx)({ fxIn: 'fadeInDown', fxOut: 'fadeOutUp', outPositionAbsolute });
        if (!fxIn) {
            fxIn = created.in;
        }
        if (!fxOut) {
            fxOut = created.out;
        }
    }
    const innerHTML = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.getInnerHTML)();
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div oninit=${fxIn} ondestroy=${fxOut} style.--animate-duration=${duration}>${innerHTML}</div>
  `.acceptInnerHTML(innerHTML);
}
/** Use on html elements, within a loop, to have them animated in and out */
function animateLoop({ fxIn, fxOut, duration = '.2s', outPositionAbsolute = true, } = {
    duration: '.2s',
    outPositionAbsolute: true,
}) {
    if (!fxIn || !fxOut) {
        const created = (0,_createFx_function_js__WEBPACK_IMPORTED_MODULE_0__.createFx)({ fxIn: 'fadeInDown', fxOut: 'fadeOutUp', outPositionAbsolute });
        if (!fxIn) {
            fxIn = created.in;
        }
        if (!fxOut) {
            fxOut = created.out;
        }
    }
    const innerHTML = (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.getInnerHTML)();
    return (0,taggedjs__WEBPACK_IMPORTED_MODULE_1__.html) `
    <div oninit=${fxIn} ondestroy=${fxOut} style.--animate-duration=${duration}>${innerHTML}</div>
  `.acceptInnerHTML(innerHTML);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/TagJsEvent.type.js":
/*!******************************************************!*\
  !*** ../../taggedjs/main/dist/js/TagJsEvent.type.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=TagJsEvent.type.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/castTextValue.function.js":
/*!*************************************************************!*\
  !*** ../../taggedjs/main/dist/js/castTextValue.function.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   castTextValue: () => (/* binding */ castTextValue)
/* harmony export */ });
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");

function castTextValue(value) {
    switch (value) {
        case undefined:
        case false:
        case null:
            return _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.empty;
    }
    return value;
}
//# sourceMappingURL=castTextValue.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/deepFunctions.js":
/*!****************************************************!*\
  !*** ../../taggedjs/main/dist/js/deepFunctions.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepClone: () => (/* binding */ deepClone),
/* harmony export */   deepEqual: () => (/* binding */ deepEqual)
/* harmony export */ });
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");


function deepClone(obj, maxDepth) {
    // return makeDeepClone(obj, new WeakMap())
    return makeDeepClone(obj, maxDepth);
}
function makeDeepClone(obj, 
// visited: WeakMap<any, any>
maxDepth) {
    // If obj is a primitive type or null, return it directly
    if (obj === null || typeof obj !== _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__.BasicTypes.object) {
        return obj;
    }
    // If obj is already visited, return the cloned reference
    /*
    if (visited.has(obj)) {
      return visited.get(obj)
    }
    */
    if (maxDepth < 0) {
        return obj;
    }
    // Handle special cases like Date and RegExp
    if (obj instanceof Date) {
        return new Date(obj);
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    // Create an empty object or array with the same prototype
    const clone = (0,_isInstance_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
    // Clone each property or element of the object or array
    if ((0,_isInstance_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(obj)) {
        for (let i = 0; i < obj.length; i++) {
            clone[i] = makeDeepClone(obj[i], maxDepth - 1);
        }
    }
    else {
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                clone[key] = makeDeepClone(obj[key], maxDepth - 1);
            }
        }
    }
    return clone;
}
function deepEqual(obj1, obj2, maxDepth) {
    return isDeepEqual(obj1, obj2, maxDepth);
}
function isDeepEqual(obj1, obj2, 
// visited: WeakMap<any, any>,
maxDepth) {
    const directEqual = obj1 === obj2;
    if (directEqual || isSameFunctions(obj1, obj2)) {
        return true;
    }
    // If obj is already visited, return the cloned reference
    // if (visited.has(obj1)) {
    if (maxDepth < 0) {
        return true;
    }
    if (typeof obj1 === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__.BasicTypes.object && typeof obj2 === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__.BasicTypes.object) {
        // both are dates and were already determined not the same
        if (obj1 instanceof Date && obj2 instanceof Date) {
            return obj1.getTime() === obj2.getTime();
        }
        // Register the cloned object to avoid cyclic references
        // visited.set(obj1, 0)
        // Check if obj1 and obj2 are both arrays
        if ((0,_isInstance_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(obj1) && (0,_isInstance_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(obj2)) {
            return isArrayDeepEqual(obj1, obj2, maxDepth - 1);
        }
        else if ((0,_isInstance_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(obj1) || (0,_isInstance_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(obj2)) {
            // One is an array, and the other is not
            return false;
        }
        // return isObjectDeepEqual(obj1, obj2, visited)
        return isObjectDeepEqual(obj1, obj2, maxDepth - 1);
    }
    return false;
}
function isObjectDeepEqual(obj1, obj2, 
// visited: WeakMap<any, any>,
maxDepth) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length === 0 && keys2.length === 0) {
        return true;
    }
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const keyFound = keys2.includes(key);
        if (!keyFound || !isDeepEqual(obj1[key], obj2[key], maxDepth - 1)) {
            return false;
        }
    }
    return true;
}
function isArrayDeepEqual(obj1, obj2, maxDepth) {
    if (obj1.length !== obj2.length) {
        return false;
    }
    for (let i = 0; i < obj1.length; i++) {
        if (!isDeepEqual(obj1[i], obj2[i], maxDepth - 1)) {
            return false;
        }
    }
    return true;
}
function isSameFunctions(fn0, fn1) {
    const bothFunction = (0,_isInstance_js__WEBPACK_IMPORTED_MODULE_0__.isFunction)(fn0) && (0,_isInstance_js__WEBPACK_IMPORTED_MODULE_0__.isFunction)(fn1);
    return bothFunction && fn0.toString() === fn1.toString();
}
//# sourceMappingURL=deepFunctions.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/errors.js":
/*!*********************************************!*\
  !*** ../../taggedjs/main/dist/js/errors.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayNoKeyError: () => (/* binding */ ArrayNoKeyError),
/* harmony export */   StateMismatchError: () => (/* binding */ StateMismatchError),
/* harmony export */   SyncCallbackError: () => (/* binding */ SyncCallbackError),
/* harmony export */   TagError: () => (/* binding */ TagError)
/* harmony export */ });
class TagError extends Error {
    details;
    constructor(message, errorCode, details = {}) {
        super(message);
        this.name = TagError.name;
        this.details = { ...details, errorCode };
    }
}
class ArrayNoKeyError extends TagError {
    constructor(message, details) {
        super(message, 'array-no-key-error', details);
        this.name = ArrayNoKeyError.name;
    }
}
class StateMismatchError extends TagError {
    constructor(message, details) {
        super(message, 'state-mismatch-error', details);
        this.name = StateMismatchError.name;
    }
}
class SyncCallbackError extends TagError {
    constructor(message, details) {
        super(message, 'sync-callback-error', details);
        this.name = SyncCallbackError.name;
    }
}
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/index.js":
/*!********************************************!*\
  !*** ../../taggedjs/main/dist/js/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayNoKeyError: () => (/* reexport safe */ _errors_js__WEBPACK_IMPORTED_MODULE_6__.ArrayNoKeyError),
/* harmony export */   BasicTypes: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.BasicTypes),
/* harmony export */   ImmutableTypes: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.ImmutableTypes),
/* harmony export */   PropWatches: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.PropWatches),
/* harmony export */   RouteQuery: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.RouteQuery),
/* harmony export */   StateMismatchError: () => (/* reexport safe */ _errors_js__WEBPACK_IMPORTED_MODULE_6__.StateMismatchError),
/* harmony export */   Subject: () => (/* reexport safe */ _subject_index_js__WEBPACK_IMPORTED_MODULE_3__.Subject),
/* harmony export */   Subjective: () => (/* reexport safe */ _subject_index_js__WEBPACK_IMPORTED_MODULE_3__.Subjective),
/* harmony export */   SyncCallbackError: () => (/* reexport safe */ _errors_js__WEBPACK_IMPORTED_MODULE_6__.SyncCallbackError),
/* harmony export */   TagError: () => (/* reexport safe */ _errors_js__WEBPACK_IMPORTED_MODULE_6__.TagError),
/* harmony export */   ValueSubject: () => (/* reexport safe */ _subject_index_js__WEBPACK_IMPORTED_MODULE_3__.ValueSubject),
/* harmony export */   ValueSubjective: () => (/* reexport safe */ _subject_index_js__WEBPACK_IMPORTED_MODULE_3__.ValueSubjective),
/* harmony export */   ValueTypes: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes),
/* harmony export */   addOneContext: () => (/* reexport safe */ _render_index_js__WEBPACK_IMPORTED_MODULE_2__.addOneContext),
/* harmony export */   appElements: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.appElements),
/* harmony export */   buildBeforeElement: () => (/* reexport safe */ _render_index_js__WEBPACK_IMPORTED_MODULE_2__.buildBeforeElement),
/* harmony export */   callback: () => (/* reexport safe */ _state_index_js__WEBPACK_IMPORTED_MODULE_1__.callback),
/* harmony export */   callbackMaker: () => (/* reexport safe */ _state_index_js__WEBPACK_IMPORTED_MODULE_1__.callbackMaker),
/* harmony export */   checkArrayValueChange: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.checkArrayValueChange),
/* harmony export */   checkSimpleValueChange: () => (/* reexport safe */ _tagJsVars_index_js__WEBPACK_IMPORTED_MODULE_4__.checkSimpleValueChange),
/* harmony export */   checkSubContext: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.checkSubContext),
/* harmony export */   checkTagValueChange: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.checkTagValueChange),
/* harmony export */   combineLatest: () => (/* reexport safe */ _subject_index_js__WEBPACK_IMPORTED_MODULE_3__.combineLatest),
/* harmony export */   createHtmlSupport: () => (/* reexport safe */ _tag_createHtmlSupport_function_js__WEBPACK_IMPORTED_MODULE_9__.createHtmlSupport),
/* harmony export */   createTrigger: () => (/* reexport safe */ _state_index_js__WEBPACK_IMPORTED_MODULE_1__.createTrigger),
/* harmony export */   defineValueOn: () => (/* reexport safe */ _subject_index_js__WEBPACK_IMPORTED_MODULE_3__.defineValueOn),
/* harmony export */   deleteSimpleValue: () => (/* reexport safe */ _tagJsVars_index_js__WEBPACK_IMPORTED_MODULE_4__.deleteSimpleValue),
/* harmony export */   deleteSubContext: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.deleteSubContext),
/* harmony export */   destroyArray: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.destroyArray),
/* harmony export */   destroyArrayContextItem: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.destroyArrayContextItem),
/* harmony export */   destroySupport: () => (/* reexport safe */ _render_index_js__WEBPACK_IMPORTED_MODULE_2__.destroySupport),
/* harmony export */   destroySupportByContextItem: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.destroySupportByContextItem),
/* harmony export */   empty: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.empty),
/* harmony export */   forceUpdateExistingValue: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.forceUpdateExistingValue),
/* harmony export */   getBaseSupport: () => (/* reexport safe */ _tag_createHtmlSupport_function_js__WEBPACK_IMPORTED_MODULE_9__.getBaseSupport),
/* harmony export */   getDomMeta: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.getDomMeta),
/* harmony export */   getDomTag: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.getDomTag),
/* harmony export */   getInnerHTML: () => (/* reexport safe */ _tagJsVars_index_js__WEBPACK_IMPORTED_MODULE_4__.getInnerHTML),
/* harmony export */   getNewGlobal: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.getNewGlobal),
/* harmony export */   getTemplaterResult: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.getTemplaterResult),
/* harmony export */   guaranteeInsertBefore: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.guaranteeInsertBefore),
/* harmony export */   hasPropChanges: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.hasPropChanges),
/* harmony export */   hmr: () => (/* binding */ hmr),
/* harmony export */   howToSetFirstInputValue: () => (/* reexport safe */ _interpolations_attributes_howToSetInputValue_function_js__WEBPACK_IMPORTED_MODULE_10__.howToSetFirstInputValue),
/* harmony export */   howToSetInputValue: () => (/* reexport safe */ _interpolations_attributes_howToSetInputValue_function_js__WEBPACK_IMPORTED_MODULE_10__.howToSetInputValue),
/* harmony export */   html: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.html),
/* harmony export */   isArray: () => (/* reexport safe */ _isInstance_js__WEBPACK_IMPORTED_MODULE_7__.isArray),
/* harmony export */   isFunction: () => (/* reexport safe */ _isInstance_js__WEBPACK_IMPORTED_MODULE_7__.isFunction),
/* harmony export */   isObject: () => (/* reexport safe */ _isInstance_js__WEBPACK_IMPORTED_MODULE_7__.isObject),
/* harmony export */   isPromise: () => (/* reexport safe */ _isInstance_js__WEBPACK_IMPORTED_MODULE_7__.isPromise),
/* harmony export */   isSimpleType: () => (/* reexport safe */ _isInstance_js__WEBPACK_IMPORTED_MODULE_7__.isSimpleType),
/* harmony export */   isStaticTag: () => (/* reexport safe */ _isInstance_js__WEBPACK_IMPORTED_MODULE_7__.isStaticTag),
/* harmony export */   isSubjectInstance: () => (/* reexport safe */ _isInstance_js__WEBPACK_IMPORTED_MODULE_7__.isSubjectInstance),
/* harmony export */   isTagComponent: () => (/* reexport safe */ _isInstance_js__WEBPACK_IMPORTED_MODULE_7__.isTagComponent),
/* harmony export */   letProp: () => (/* reexport safe */ _state_index_js__WEBPACK_IMPORTED_MODULE_1__.letProp),
/* harmony export */   onDestroy: () => (/* reexport safe */ _state_index_js__WEBPACK_IMPORTED_MODULE_1__.onDestroy),
/* harmony export */   onFirstSubContext: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.onFirstSubContext),
/* harmony export */   onInit: () => (/* reexport safe */ _state_index_js__WEBPACK_IMPORTED_MODULE_1__.onInit),
/* harmony export */   oneRenderToSupport: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.oneRenderToSupport),
/* harmony export */   output: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.output),
/* harmony export */   paint: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.paint),
/* harmony export */   processFirstSubjectValue: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.processFirstSubjectValue),
/* harmony export */   providers: () => (/* reexport safe */ _state_index_js__WEBPACK_IMPORTED_MODULE_1__.providers),
/* harmony export */   renderSupport: () => (/* reexport safe */ _render_index_js__WEBPACK_IMPORTED_MODULE_2__.renderSupport),
/* harmony export */   renderTagOnly: () => (/* reexport safe */ _render_index_js__WEBPACK_IMPORTED_MODULE_2__.renderTagOnly),
/* harmony export */   renderWithSupport: () => (/* reexport safe */ _render_index_js__WEBPACK_IMPORTED_MODULE_2__.renderWithSupport),
/* harmony export */   setUseMemory: () => (/* reexport safe */ _state_index_js__WEBPACK_IMPORTED_MODULE_1__.setUseMemory),
/* harmony export */   signal: () => (/* reexport safe */ _subject_index_js__WEBPACK_IMPORTED_MODULE_3__.signal),
/* harmony export */   state: () => (/* reexport safe */ _state_index_js__WEBPACK_IMPORTED_MODULE_1__.state),
/* harmony export */   states: () => (/* reexport safe */ _state_states_function_js__WEBPACK_IMPORTED_MODULE_8__.states),
/* harmony export */   subject: () => (/* reexport safe */ _state_index_js__WEBPACK_IMPORTED_MODULE_1__.subject),
/* harmony export */   subscribe: () => (/* reexport safe */ _state_index_js__WEBPACK_IMPORTED_MODULE_1__.subscribe),
/* harmony export */   subscribeWith: () => (/* reexport safe */ _state_index_js__WEBPACK_IMPORTED_MODULE_1__.subscribeWith),
/* harmony export */   syncError: () => (/* reexport safe */ _state_index_js__WEBPACK_IMPORTED_MODULE_1__.syncError),
/* harmony export */   tag: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.tag),
/* harmony export */   tagElement: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.tagElement),
/* harmony export */   tags: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.tags),
/* harmony export */   upgradeBaseToSupport: () => (/* reexport safe */ _tag_createHtmlSupport_function_js__WEBPACK_IMPORTED_MODULE_9__.upgradeBaseToSupport),
/* harmony export */   variablePrefix: () => (/* reexport safe */ _tag_index_js__WEBPACK_IMPORTED_MODULE_0__.variablePrefix),
/* harmony export */   watch: () => (/* reexport safe */ _state_index_js__WEBPACK_IMPORTED_MODULE_1__.watch),
/* harmony export */   willCallback: () => (/* reexport safe */ _subject_index_js__WEBPACK_IMPORTED_MODULE_3__.willCallback),
/* harmony export */   willPromise: () => (/* reexport safe */ _subject_index_js__WEBPACK_IMPORTED_MODULE_3__.willPromise),
/* harmony export */   willSubscribe: () => (/* reexport safe */ _subject_index_js__WEBPACK_IMPORTED_MODULE_3__.willSubscribe)
/* harmony export */ });
/* harmony import */ var _tag_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag/index.js */ "../../taggedjs/main/dist/js/tag/index.js");
/* harmony import */ var _state_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/index.js */ "../../taggedjs/main/dist/js/state/index.js");
/* harmony import */ var _render_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render/index.js */ "../../taggedjs/main/dist/js/render/index.js");
/* harmony import */ var _subject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subject/index.js */ "../../taggedjs/main/dist/js/subject/index.js");
/* harmony import */ var _tagJsVars_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tagJsVars/index.js */ "../../taggedjs/main/dist/js/tagJsVars/index.js");
/* harmony import */ var _interpolations_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interpolations/index.js */ "../../taggedjs/main/dist/js/interpolations/index.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errors.js */ "../../taggedjs/main/dist/js/errors.js");
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");
/* harmony import */ var _state_states_function_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state/states.function.js */ "../../taggedjs/main/dist/js/state/states.function.js");
/* harmony import */ var _tag_createHtmlSupport_function_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tag/createHtmlSupport.function.js */ "../../taggedjs/main/dist/js/tag/createHtmlSupport.function.js");
/* harmony import */ var _interpolations_attributes_howToSetInputValue_function_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interpolations/attributes/howToSetInputValue.function.js */ "../../taggedjs/main/dist/js/interpolations/attributes/howToSetInputValue.function.js");
/* harmony import */ var _TagJsEvent_type_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TagJsEvent.type.js */ "../../taggedjs/main/dist/js/TagJsEvent.type.js");
/* harmony import */ var _render_renderTagOnly_function_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./render/renderTagOnly.function.js */ "../../taggedjs/main/dist/js/render/renderTagOnly.function.js");
/* harmony import */ var _render_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./render/renderSupport.function.js */ "../../taggedjs/main/dist/js/render/renderSupport.function.js");
/* harmony import */ var _render_renderWithSupport_function_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./render/renderWithSupport.function.js */ "../../taggedjs/main/dist/js/render/renderWithSupport.function.js");
/* harmony import */ var _tag_tagElement_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tag/tagElement.js */ "../../taggedjs/main/dist/js/tag/tagElement.js");
/* harmony import */ var _render_paint_function_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./render/paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");

















const hmr = {
    tagElement: _tag_tagElement_js__WEBPACK_IMPORTED_MODULE_15__.tagElement, renderWithSupport: _render_renderWithSupport_function_js__WEBPACK_IMPORTED_MODULE_14__.renderWithSupport, renderSupport: _render_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_13__.renderSupport,
    renderTagOnly: _render_renderTagOnly_function_js__WEBPACK_IMPORTED_MODULE_12__.renderTagOnly, paint: _render_paint_function_js__WEBPACK_IMPORTED_MODULE_16__.paint,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/attributes/addSupportEventListener.function.js":
/*!*************************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/attributes/addSupportEventListener.function.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSupportEventListener: () => (/* binding */ addSupportEventListener)
/* harmony export */ });
function addSupportEventListener(support, eventName, element, callback) {
    const elm = support.appElement;
    // cast events that do not bubble up into ones that do
    if (eventName === 'blur') {
        eventName = 'focusout';
    }
    const replaceEventName = '_' + eventName;
    // const replaceEventName = eventName
    const global = support.subject.global;
    const eventReg = global.events;
    if (!eventReg[eventName]) {
        const listener = function eventCallback(event) {
            event.originalStopPropagation = event.stopPropagation;
            bubbleEvent(event, replaceEventName, event.target);
        };
        eventReg[eventName] = listener;
        elm.addEventListener(eventName, listener);
    }
    // attach to element but not as "_click" and "_keyup"
    ;
    element[replaceEventName] = callback;
    element[eventName] = callback;
}
function bubbleEvent(event, replaceEventName, target) {
    const callback = target[replaceEventName];
    if (callback) {
        let stopped = false;
        event.stopPropagation = function () {
            stopped = true;
            event.originalStopPropagation.call(event);
        };
        callback(event);
        if (event.defaultPrevented || stopped) {
            return;
        }
    }
    const parentNode = target.parentNode;
    if (parentNode) {
        bubbleEvent(event, replaceEventName, parentNode);
    }
}
//# sourceMappingURL=addSupportEventListener.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/attributes/bindSubjectCallback.function.js":
/*!*********************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/attributes/bindSubjectCallback.function.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   afterTagCallback: () => (/* binding */ afterTagCallback),
/* harmony export */   bindSubjectCallback: () => (/* binding */ bindSubjectCallback),
/* harmony export */   checkAfterCallbackPromise: () => (/* binding */ checkAfterCallbackPromise),
/* harmony export */   runBlocked: () => (/* binding */ runBlocked),
/* harmony export */   runTagCallback: () => (/* binding */ runTagCallback)
/* harmony export */ });
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");
/* harmony import */ var _render_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/renderSupport.function.js */ "../../taggedjs/main/dist/js/render/renderSupport.function.js");
/* harmony import */ var _getUpTags_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getUpTags.function.js */ "../../taggedjs/main/dist/js/interpolations/attributes/getUpTags.function.js");
/* harmony import */ var _renderTagArray_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderTagArray.function.js */ "../../taggedjs/main/dist/js/interpolations/attributes/renderTagArray.function.js");
/* harmony import */ var _getSupportWithState_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getSupportWithState.function.js */ "../../taggedjs/main/dist/js/interpolations/attributes/getSupportWithState.function.js");
// taggedjs-no-compile
/** File largely responsible for reacting to element events, such as onclick */





const noData = 'no-data-ever';
const promiseNoData = 'promise-no-data-ever';
function bindSubjectCallback(value, support) {
    const global = support.subject.global;
    // MAIN EVENT CALLBACK PROCESSOR
    const subjectFunction = function (element, args) {
        if (global.deleted === true) {
            return;
        }
        // const newest = global.newest as AnySupport // || subjectFunction.support
        return runTagCallback(subjectFunction.tagFunction, subjectFunction.support, // newest
        subjectFunction.states, // newest
        element, args);
    };
    // link back to original. Mostly used for <div oninit ondestroy> animations
    subjectFunction.tagFunction = value;
    const component = (0,_getSupportWithState_function_js__WEBPACK_IMPORTED_MODULE_4__.getSupportWithState)(support);
    subjectFunction.support = support;
    // subjectFunction.otherSupport = component
    const states = component.states; // ?.[0]
    subjectFunction.states = states;
    // subjectFunction.states = [...states]
    return subjectFunction;
}
function runTagCallback(value, support, states, bindTo, args) {
    // get actual component owner not just the html`` support
    const component = (0,_getSupportWithState_function_js__WEBPACK_IMPORTED_MODULE_4__.getSupportWithState)(support);
    const subject = component.subject;
    const global = subject.global; // tag.subject.global as TagGlobal
    global.locked = true; // prevent another render from re-rendering this tag
    // sync the new states to the old before the old does any processing
    // syncStatesArray(component.subject.global.newest.states, states)
    // ACTUAL CALLBACK TO ORIGINAL FUNCTION
    const callbackResult = value.apply(bindTo, args);
    // sync the old states to the new
    // syncStatesArray(states, component.subject.global.newest.states)
    delete global.locked;
    const result = afterTagCallback(callbackResult, component);
    return result;
}
function afterTagCallback(callbackResult, eventHandlerSupport) {
    const global = eventHandlerSupport.subject.global; // tag.subject.global as SupportTagGlobal
    return renderCallbackSupport(eventHandlerSupport, callbackResult, global);
}
function renderCallbackSupport(last, callbackResult, global) {
    const tagsToUpdate = (0,_getUpTags_function_js__WEBPACK_IMPORTED_MODULE_2__.getUpTags)(last);
    (0,_renderTagArray_function_js__WEBPACK_IMPORTED_MODULE_3__.renderTagUpdateArray)(tagsToUpdate);
    return checkAfterCallbackPromise(callbackResult, last, global);
}
function checkAfterCallbackPromise(callbackResult, last, global) {
    if ((0,_isInstance_js__WEBPACK_IMPORTED_MODULE_0__.isPromise)(callbackResult)) {
        const global0 = last.subject.global;
        global0.locked = true;
        return callbackResult.then(() => {
            if (global.deleted === true) {
                return promiseNoData; // tag was deleted during event processing
            }
            const global1 = last.subject.global;
            delete global1.locked;
            const tagsToUpdate = (0,_getUpTags_function_js__WEBPACK_IMPORTED_MODULE_2__.getUpTags)(last);
            (0,_renderTagArray_function_js__WEBPACK_IMPORTED_MODULE_3__.renderTagUpdateArray)(tagsToUpdate);
            return promiseNoData;
        });
    }
    return noData;
}
function runBlocked(tag) {
    const global = tag.subject.global;
    const blocked = global.blocked;
    for (const block of blocked) {
        const lastResult = (0,_render_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_1__.renderSupport)(block);
        global.newest = lastResult;
    }
    global.blocked = [];
    return global.newest;
}
//# sourceMappingURL=bindSubjectCallback.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/attributes/getSupportWithState.function.js":
/*!*********************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/attributes/getSupportWithState.function.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSupportWithState: () => (/* binding */ getSupportWithState)
/* harmony export */ });
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");

function getSupportWithState(support) {
    // get actual component owner not just the html`` support
    let component = support;
    while (component.ownerSupport && !(0,_isInstance_js__WEBPACK_IMPORTED_MODULE_0__.isTagComponent)(component.templater)) {
        component = component.ownerSupport;
    }
    return component.subject.global.newest || component;
}
//# sourceMappingURL=getSupportWithState.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/attributes/getUpTags.function.js":
/*!***********************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/attributes/getUpTags.function.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUpTags: () => (/* binding */ getUpTags)
/* harmony export */ });
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");
/* harmony import */ var _state_providersChangeCheck_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/providersChangeCheck.function.js */ "../../taggedjs/main/dist/js/state/providersChangeCheck.function.js");
/* harmony import */ var _render_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/renderSupport.function.js */ "../../taggedjs/main/dist/js/render/renderSupport.function.js");
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");




function getUpTags(support, supports = []) {
    const global = support.subject.global;
    const templater = support.templater;
    const inlineHtml = (0,_render_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_2__.isInlineHtml)(templater);
    const ownerSupport = support.ownerSupport;
    if (global.locked) {
        supports.push(support);
        return supports;
    }
    // is it just a vanilla tag, not component?
    if (inlineHtml) {
        return getUpTags(ownerSupport, supports);
    }
    const newSupport = support; // global.newest as AnySupport
    const isComponent = (0,_isInstance_js__WEBPACK_IMPORTED_MODULE_0__.isTagComponent)(newSupport.templater);
    const tagJsType = support.templater.tagJsType;
    const canContinueUp = ownerSupport && tagJsType !== _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_3__.ValueTypes.stateRender;
    const continueUp = canContinueUp && (!isComponent || (0,_render_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_2__.checkRenderUp)(ownerSupport, newSupport.templater, newSupport));
    const proSupports = (0,_state_providersChangeCheck_function_js__WEBPACK_IMPORTED_MODULE_1__.providersChangeCheck)(newSupport);
    supports.push(...proSupports);
    if (continueUp) {
        getUpTags(ownerSupport, supports);
        if (isComponent) {
            supports.push(newSupport);
        }
        return supports; // more to keep going up, do not push this child for review
    }
    supports.push(newSupport);
    return supports;
}
//# sourceMappingURL=getUpTags.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/attributes/howToSetInputValue.function.js":
/*!********************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/attributes/howToSetInputValue.function.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   howToSetFirstInputValue: () => (/* binding */ howToSetFirstInputValue),
/* harmony export */   howToSetInputValue: () => (/* binding */ howToSetInputValue)
/* harmony export */ });
/* harmony import */ var _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");

// Maybe more performant for updates but seemingly slower for first renders
function howToSetInputValue(element, name, value) {
    _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintContent.push([howToSetFirstInputValue, [element, name, value]]);
}
function howToSetFirstInputValue(element, name, value) {
    if (value === undefined || value === false || value === null) {
        element.removeAttribute(name);
        return;
    }
    element.setAttribute(name, value);
}
//# sourceMappingURL=howToSetInputValue.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/attributes/isSpecialAttribute.function.js":
/*!********************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/attributes/isSpecialAttribute.function.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSpecialAction: () => (/* binding */ isSpecialAction),
/* harmony export */   isSpecialAttr: () => (/* binding */ isSpecialAttr)
/* harmony export */ });
/** Looking for (class | style) followed by a period */
function isSpecialAttr(attrName) {
    if (attrName.startsWith('class.')) {
        return 'class';
    }
    const specialAction = isSpecialAction(attrName);
    if (specialAction !== false) {
        return true;
    }
    if (attrName.startsWith('style.')) {
        return 'style';
    }
    return false;
}
function isSpecialAction(attrName) {
    switch (attrName) {
        case 'autoselect':
            return 'autoselect';
        case 'autofocus':
            return 'autofocus';
        case 'oninit': // when read in compile process
        case 'init': // when read in realtime
            return 'oninit';
        case 'ondestroy': // when read in compile process
        case 'destroy': // when read in realtime
            return 'destroy';
    }
    return false;
}
//# sourceMappingURL=isSpecialAttribute.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/attributes/processAttributeCallback.function.js":
/*!**************************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/attributes/processAttributeCallback.function.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processAttributeFunction: () => (/* binding */ processAttributeFunction)
/* harmony export */ });
/* harmony import */ var _addSupportEventListener_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addSupportEventListener.function.js */ "../../taggedjs/main/dist/js/interpolations/attributes/addSupportEventListener.function.js");

function processAttributeFunction(element, newAttrValue, support, attrName) {
    const fun = function (...args) {
        return fun.tagFunction(element, args);
    };
    // access to original function
    fun.tagFunction = newAttrValue;
    fun.support = support;
    (0,_addSupportEventListener_function_js__WEBPACK_IMPORTED_MODULE_0__.addSupportEventListener)(support.appSupport, attrName, element, // support.appSupport.appElement as Element,
    fun);
}
//# sourceMappingURL=processAttributeCallback.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/attributes/processNameValueAttribute.function.js":
/*!***************************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/attributes/processNameValueAttribute.function.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processDynamicNameValueAttribute: () => (/* binding */ processDynamicNameValueAttribute),
/* harmony export */   processNonDynamicAttr: () => (/* binding */ processNonDynamicAttr)
/* harmony export */ });
/* harmony import */ var _specialAttribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specialAttribute.js */ "../../taggedjs/main/dist/js/interpolations/attributes/specialAttribute.js");
/* harmony import */ var _render_attributes_processAttribute_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/attributes/processAttribute.function.js */ "../../taggedjs/main/dist/js/render/attributes/processAttribute.function.js");
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");



const actions = ['init', 'destroy']; // oninit ondestroy
function processDynamicNameValueAttribute(attrName, value, contextItem, element, howToSet, support, counts, isSpecial) {
    // contextItem.attrName = attrName
    contextItem.element = element;
    contextItem.howToSet = howToSet;
    if (typeof (value) === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__.BasicTypes.function) {
        if (isSpecial && actions.includes(attrName)) {
            (0,_specialAttribute_js__WEBPACK_IMPORTED_MODULE_0__.specialAttribute)(attrName, value, element, attrName, support, counts);
            return;
        }
        return (0,_render_attributes_processAttribute_function_js__WEBPACK_IMPORTED_MODULE_1__.processTagCallbackFun)(contextItem, value, support, attrName, element);
    }
    contextItem.attrName = attrName;
    contextItem.isSpecial = isSpecial;
    return processNonDynamicAttr(attrName, value, element, howToSet, counts, support, isSpecial);
}
function processNonDynamicAttr(attrName, value, element, howToSet, counts, support, isSpecial) {
    if (isSpecial) {
        return (0,_specialAttribute_js__WEBPACK_IMPORTED_MODULE_0__.specialAttribute)(attrName, value, element, isSpecial, support, counts);
    }
    howToSet(element, attrName, value);
}
//# sourceMappingURL=processNameValueAttribute.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/attributes/renderTagArray.function.js":
/*!****************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/attributes/renderTagArray.function.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTagUpdateArray: () => (/* binding */ renderTagUpdateArray)
/* harmony export */ });
/* harmony import */ var _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");
/* harmony import */ var _render_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/renderSupport.function.js */ "../../taggedjs/main/dist/js/render/renderSupport.function.js");


function renderTagUpdateArray(supports) {
    ++_render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.painting.locks;
    supports.forEach(mapTagUpdate);
    --_render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.painting.locks;
    (0,_render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paint)();
}
function mapTagUpdate(support) {
    const global = support.subject.global;
    if (!global) {
        return; // while rendering a parent, a child may have been deleted (pinbowl)
    }
    (0,_render_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_1__.renderSupport)(global.newest);
}
//# sourceMappingURL=renderTagArray.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/attributes/specialAttribute.js":
/*!*********************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/attributes/specialAttribute.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   specialAttribute: () => (/* binding */ specialAttribute)
/* harmony export */ });
/* harmony import */ var _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");

/** handles init, destroy, autofocus, autoselect, style., class. */
function specialAttribute(name, value, element, specialName, support, counts) {
    switch (specialName) {
        case 'init': { // aka oninit
            const stagger = counts.added++;
            // run delayed after elements placed down
            _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintAfters.push([paintSpecialAttribute, [element, stagger, value]]);
            return;
        }
        case 'destroy': { // aka ondestroy
            const stagger = counts.removed++;
            const global = support.subject.global;
            global.destroys = global.destroys || [];
            global.destroys.push(() => {
                const event = {
                    target: element,
                    stagger,
                };
                return value(event); // call destroy/ondestroy
            });
            return;
        }
        case 'autofocus':
            _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintAfters.push([autofocus, [element]]);
            return;
        case 'autoselect':
            _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintAfters.push([autoselect, [element]]);
            return;
        case 'style': {
            const names = name.split('.');
            _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintContent.push([paintStyle, [element, names, value]]); // attribute changes should come first
            return;
        }
        case 'class':
            processSpecialClass(name, value, element);
            return;
    }
    throw new Error(`Invalid special attribute of ${specialName}. ${name}`);
}
function paintStyle(element, names, value) {
    const smallName = names[1];
    element.style[smallName] = value;
    element.style.setProperty(smallName, value);
}
function processSpecialClass(name, value, element) {
    const names = name.split('.');
    names.shift(); // remove class
    // truthy
    if (value) {
        for (const name of names) {
            _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintContent.push([classListAdd, [element, name]]);
        }
        return;
    }
    // falsy
    for (const name of names) {
        _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintContent.push([classListRemove, [element, name]]);
    }
}
function classListAdd(element, name) {
    element.classList.add(name);
}
function classListRemove(element, name) {
    element.classList.remove(name);
}
function autoselect(element) {
    element.select();
}
function autofocus(element) {
    element.focus();
}
function paintSpecialAttribute(element, stagger, value) {
    const event = {
        target: element,
        stagger,
    };
    value(event); // call init/oninit
}
//# sourceMappingURL=specialAttribute.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/attributes/updateAttribute.function.js":
/*!*****************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/attributes/updateAttribute.function.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateNameOnlyAttrValue: () => (/* binding */ updateNameOnlyAttrValue)
/* harmony export */ });
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");
/* harmony import */ var _render_attributes_processAttribute_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/attributes/processAttribute.function.js */ "../../taggedjs/main/dist/js/render/attributes/processAttribute.function.js");
/* harmony import */ var _render_attributes_isNoDisplayValue_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../render/attributes/isNoDisplayValue.function.js */ "../../taggedjs/main/dist/js/render/attributes/isNoDisplayValue.function.js");
// taggedjs-no-compile




function updateNameOnlyAttrValue(values, attrValue, lastValue, element, ownerSupport, howToSet, context, counts) {
    // check to remove previous attribute(s)
    if (lastValue) {
        if ((0,_render_attributes_isNoDisplayValue_function_js__WEBPACK_IMPORTED_MODULE_3__.isNoDisplayValue)(attrValue)) {
            element.removeAttribute(lastValue);
            return;
        }
        if (typeof (lastValue) === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.BasicTypes.object) {
            const isObStill = typeof (attrValue) === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.BasicTypes.object;
            if (isObStill) {
                for (const name in lastValue) {
                    // if((attrValue as any)[name]) {
                    if (name in attrValue) {
                        continue;
                    }
                    _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintContent.push([removeAttribute, [element, name]]);
                }
            }
            else {
                for (const name in lastValue) {
                    _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintContent.push([removeAttribute, [element, name]]);
                }
            }
        }
    }
    (0,_render_attributes_processAttribute_function_js__WEBPACK_IMPORTED_MODULE_2__.processNameOnlyAttrValue)(values, attrValue, element, ownerSupport, howToSet, context, counts);
}
function removeAttribute(element, name) {
    element.removeAttribute(name);
}
//# sourceMappingURL=updateAttribute.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/index.js":
/*!***********************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _optimizers_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./optimizers/types.js */ "../../taggedjs/main/dist/js/interpolations/optimizers/types.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/optimizers/attachDynamicDom.function.js":
/*!******************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/optimizers/attachDynamicDom.function.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachDynamicDom: () => (/* binding */ attachDynamicDom)
/* harmony export */ });
/* harmony import */ var _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");
/* harmony import */ var _render_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/index.js */ "../../taggedjs/main/dist/js/render/index.js");
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _domProcessContextItem_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domProcessContextItem.function.js */ "../../taggedjs/main/dist/js/interpolations/optimizers/domProcessContextItem.function.js");
// taggedjs-no-compile




function attachDynamicDom(value, context, support, // owner
counts, // used for animation stagger computing
depth, // used to indicate if variable lives within an owner's element
appendTo, insertBefore) {
    const marker = document.createTextNode(_tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__.empty);
    const isWithinOwnerElement = depth > 0;
    const contextItem = (0,_render_index_js__WEBPACK_IMPORTED_MODULE_1__.addOneContext)(value, context, isWithinOwnerElement);
    contextItem.placeholder = marker;
    if (appendTo) {
        _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintAppends.push([_render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintAppend, [appendTo, marker]]);
    }
    else {
        _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintCommands.push([_render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintBefore, [insertBefore, marker]]);
    }
    (0,_domProcessContextItem_function_js__WEBPACK_IMPORTED_MODULE_3__.domProcessContextItem)(value, support, contextItem, counts, appendTo, insertBefore);
}
//# sourceMappingURL=attachDynamicDom.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/optimizers/domProcessContextItem.function.js":
/*!***********************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/optimizers/domProcessContextItem.function.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   domProcessContextItem: () => (/* binding */ domProcessContextItem)
/* harmony export */ });
/* harmony import */ var _tag_update_processFirstSubjectValue_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tag/update/processFirstSubjectValue.function.js */ "../../taggedjs/main/dist/js/tag/update/processFirstSubjectValue.function.js");
/* harmony import */ var _tag_update_tagValueUpdateHandler_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tag/update/tagValueUpdateHandler.function.js */ "../../taggedjs/main/dist/js/tag/update/tagValueUpdateHandler.function.js");
// taggedjs-no-compile


function domProcessContextItem(value, support, contextItem, counts, // used for animation stagger computing
appendTo, insertBefore) {
    // how to handle value updates
    contextItem.handler = _tag_update_tagValueUpdateHandler_function_js__WEBPACK_IMPORTED_MODULE_1__.tagValueUpdateHandler;
    const global = support.subject.global;
    global.locked = true;
    (0,_tag_update_processFirstSubjectValue_function_js__WEBPACK_IMPORTED_MODULE_0__.processFirstSubjectValue)(value, contextItem, support, counts, appendTo, insertBefore);
    const global2 = support.subject.global;
    delete global2.locked;
    contextItem.value = value;
}
//# sourceMappingURL=domProcessContextItem.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/optimizers/htmlInterpolationToDomMeta.function.js":
/*!****************************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/optimizers/htmlInterpolationToDomMeta.function.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   balanceArrayByArrays: () => (/* binding */ balanceArrayByArrays),
/* harmony export */   fakeTagsRegEx: () => (/* binding */ fakeTagsRegEx),
/* harmony export */   findRealTagsRegEx: () => (/* binding */ findRealTagsRegEx),
/* harmony export */   htmlInterpolationToDomMeta: () => (/* binding */ htmlInterpolationToDomMeta),
/* harmony export */   htmlInterpolationToPlaceholders: () => (/* binding */ htmlInterpolationToPlaceholders),
/* harmony export */   realTagsRegEx: () => (/* binding */ realTagsRegEx)
/* harmony export */ });
/* harmony import */ var _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tag/DomTag.type.js */ "../../taggedjs/main/dist/js/tag/DomTag.type.js");
/* harmony import */ var _parseHTML_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseHTML.function.js */ "../../taggedjs/main/dist/js/interpolations/optimizers/parseHTML.function.js");


const realTagsRegEx = new RegExp(_tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variablePrefix + '(\\d+)' + _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variableSuffix, 'gi');
const findRealTagsRegEx = new RegExp('(' + _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variablePrefix + '\\d+' + _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variableSuffix + ')', 'gi');
// without last letter
const shortFront = _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variablePrefix.slice(0, _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variablePrefix.length - 1);
const fakeTagsRegEx = new RegExp(shortFront + '&#x72;(\\d+)' + _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variableSuffix, 'gi');
// variable prefix minus one letter and then the letter "r" as hex
const replacement = shortFront + '&#x72;$1' + _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variableSuffix;
/** Run only during compile step OR when no compile step occurred at runtime */
function htmlInterpolationToDomMeta(strings, values) {
    // Parse the modified fragments
    const htmlString = htmlInterpolationToPlaceholders(strings, values).join('');
    const domMeta = (0,_parseHTML_function_js__WEBPACK_IMPORTED_MODULE_1__.parseHTML)(htmlString);
    return domMeta;
}
function htmlInterpolationToPlaceholders(strings, values) {
    // Sanitize placeholders in the fragments
    const sanitizedFragments = strings;
    // const sanitizedFragments = sanitizePlaceholders(strings)
    // Add placeholders to the fragments
    return addPlaceholders(sanitizedFragments, values);
}
/*
function sanitizePlaceholders(fragments: string[]) {
  return fragments.map(santizeFragment)
}

function santizeFragment(fragment: string) {
  return fragment.replace(
    fragReplacer,
    (match, index) => safeVar + index)
}
*/
function addPlaceholders(strings, values) {
    const results = [];
    for (let index = 0; index < strings.length; ++index) {
        const fragment = strings[index];
        const safeFragment = fragment.replace(realTagsRegEx, replacement);
        if (index < values.length) {
            results.push(safeFragment + _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variablePrefix + index + _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variableSuffix);
            continue;
        }
        results.push(safeFragment);
    }
    balanceArrayByArrays(results, strings, values);
    return results;
}
function balanceArrayByArrays(results, strings, values) {
    const diff = values.length - strings.length;
    if (diff > 0) {
        for (let x = diff; x > 0; --x) {
            results.push(_tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variablePrefix + (strings.length + x - 1) + _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variableSuffix);
        }
    }
}
//# sourceMappingURL=htmlInterpolationToDomMeta.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/optimizers/parseHTML.function.js":
/*!***********************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/optimizers/parseHTML.function.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseHTML: () => (/* binding */ parseHTML)
/* harmony export */ });
/* harmony import */ var _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tag/DomTag.type.js */ "../../taggedjs/main/dist/js/tag/DomTag.type.js");
/* harmony import */ var _attributes_isSpecialAttribute_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributes/isSpecialAttribute.function.js */ "../../taggedjs/main/dist/js/interpolations/attributes/isSpecialAttribute.function.js");
/* harmony import */ var _htmlInterpolationToDomMeta_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./htmlInterpolationToDomMeta.function.js */ "../../taggedjs/main/dist/js/interpolations/optimizers/htmlInterpolationToDomMeta.function.js");
/* harmony import */ var _render_attributes_getTagVarIndex_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../render/attributes/getTagVarIndex.function.js */ "../../taggedjs/main/dist/js/render/attributes/getTagVarIndex.function.js");




const fragFindAny = /(:tagvar\d+:)/;
const ondoubleclick = 'ondoubleclick';
const regexAttr = /([:_a-zA-Z0-9\-.]+)\s*(?:=\s*"([^"]*)"|=\s*(\S+))?/g;
const regexTagOrg = /<\/?([a-zA-Z0-9-]+)((?:\s+[a-zA-Z_:*][\w:.-]*(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)+\s*|\s*)\/?>/g;
/** Main start of string parsing */
function parseHTML(html) {
    const valuePositions = [];
    const elements = [];
    const stack = [];
    let currentElement = null;
    let valueIndex = -1;
    let position = 0;
    const regexTag = new RegExp(regexTagOrg, 'g');
    html = preprocessTagsInComments(html);
    while (position < html.length) {
        const tagMatch = regexTag.exec(html);
        if (!tagMatch) {
            break;
        }
        const [fullMatch, tagName, attrString] = tagMatch;
        const isClosingTag = fullMatch.startsWith('</');
        const isSelfClosing = fullMatch.endsWith('/>');
        if (position < tagMatch.index) {
            const textContent = html.slice(position, tagMatch.index);
            if (textContent.trim()) {
                const textVarMatches = splitByTagVar(textContent);
                for (let textContent of textVarMatches) {
                    if (textContent.startsWith(_tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variablePrefix) && textContent.search(fragFindAny) >= 0) {
                        // if its not fake then lets now consider this a real variable
                        if (textContent.search(_htmlInterpolationToDomMeta_function_js__WEBPACK_IMPORTED_MODULE_2__.fakeTagsRegEx) === -1) {
                            textContent = _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variablePrefix + (++valueIndex) + _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variableSuffix;
                        }
                    }
                    pushTextTo(currentElement, elements, textContent);
                }
            }
        }
        position = tagMatch.index + fullMatch.length;
        if (isClosingTag) {
            currentElement = stack.pop() || null;
            continue;
        }
        const attributes = [];
        let attrMatch;
        while ((attrMatch = regexAttr.exec(attrString)) !== null) {
            valueIndex = parseAttrString(attrMatch, valueIndex, valuePositions, attributes);
        }
        const element = {
            nn: tagName, // nodeName
        };
        if (attributes.length) {
            element.at = attributes;
        }
        if (currentElement) {
            if (!currentElement.ch) {
                currentElement.ch = [];
            }
            currentElement.ch.push(element);
        }
        else {
            elements.push(element);
        }
        if (!isSelfClosing) {
            stack.push(currentElement);
            currentElement = element;
        }
    }
    if (position < html.length) {
        const textContent = html.slice(position);
        if (textContent.trim()) {
            const textVarMatches = splitByTagVar(textContent);
            for (const textContent of textVarMatches) {
                if (textContent.startsWith(_tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variablePrefix)) {
                    ++valueIndex;
                }
                pushTextTo(currentElement, elements, textContent);
            }
        }
    }
    return elements;
}
const removeCommentRegX = new RegExp('(<!--[\\s\\S]*?-->)', 'g');
function preprocessTagsInComments(html) {
    // Use a regex to find all HTML comments
    return html.replace(removeCommentRegX, function (match) {
        // For each comment found, replace < and > inside it
        return match.replace(/\[l t\]/g, '[l&nbsp;t]').replace(/\[g t\]/g, '[g&nbsp;t]').replace(/</g, '[l t]').replace(/>/g, '[g t]');
    });
}
function cleanEventName(eventName) {
    if (eventName.startsWith('on')) {
        const couldByDblClick = eventName.length === ondoubleclick.length && eventName === ondoubleclick;
        if (couldByDblClick) {
            return 'dblclick';
        }
        return eventName.slice(2, eventName.length);
    }
    return eventName;
}
function pushTextTo(currentElement, elements, textContent) {
    const textNode = {
        nn: 'text', // nodeName
        tc: postProcessTagsInComments(textContent), // textContent
    };
    pushTo(currentElement, elements, textNode);
}
/** TODO: This has got to be too expensive */
function postProcessTagsInComments(html) {
    // Use a regex to find all segments that look like processed comments
    return html.replace(/(\[l t\]!--[\s\S]*?--\[g t\])/g, function (match) {
        // For each processed comment found, replace *lt* and *gt* back to < and >
        return match.replace(/\[l t\]/g, '<').replace(/\[g t\]/g, '>').replace(/\[l&nbsp;t\]/g, '[l t]').replace(/\[g&nbsp;t\]/g, '[g t]');
    });
}
function pushTo(currentElement, elements, textNode) {
    if (currentElement) {
        if (!currentElement.ch) {
            currentElement.ch = [];
        }
        currentElement.ch.push(textNode);
    }
    else {
        elements.push(textNode);
    }
}
function splitByTagVar(inputString) {
    // Split the string using the regular expression, keep delimiters in the output
    const parts = inputString.split(fragFindAny);
    // Filter out any empty strings from the results
    const filteredParts = parts.filter(notEmptyStringMapper);
    return filteredParts;
}
function notEmptyStringMapper(part) {
    return part !== '';
}
function parseAttrString(attrMatch, valueIndex, valuePositions, attributes) {
    const attrName = attrMatch[1] || attrMatch[3] || attrMatch[5];
    const attrChoice = attrMatch[2] || attrMatch[4] || attrMatch[6];
    let attrValue = attrChoice;
    if (attrName === undefined) {
        return valueIndex;
    }
    const notEmpty = attrMatch[2] !== '';
    const noValue = attrValue === undefined && notEmpty;
    const lowerName = attrName.toLowerCase();
    const fixedName = lowerName.startsWith('on') ? cleanEventName(lowerName) : lowerName;
    if (noValue) {
        const standAloneVar = attrName.slice(0, _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variablePrefix.length) === _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variablePrefix;
        if (standAloneVar) {
            const valueName = _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variablePrefix + (++valueIndex) + _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variableSuffix;
            valuePositions.push(['at', valueName]);
            attributes.push([valueName]); // the name itself is dynamic
            return valueIndex;
        }
        const startMatched = attrMatch[0].startsWith(attrName);
        const standAloneAttr = startMatched && attrMatch[0].slice(attrName.length, attrMatch[0].length).search(/\s+$/) >= 0;
        if (standAloneAttr) {
            attributes.push([fixedName]);
            return valueIndex;
        }
        const wholeValue = attrMatch[3];
        const isFakeTag = wholeValue.search(_htmlInterpolationToDomMeta_function_js__WEBPACK_IMPORTED_MODULE_2__.fakeTagsRegEx) >= 0;
        if (isFakeTag) {
            attrValue = wholeValue;
            // to restore: wholeValue.replace(fakeTagsRegEx,variablePrefix+'$1$3$4'+variableSuffix)
            const attrSet = [fixedName, attrValue];
            attributes.push(attrSet);
            return valueIndex;
        }
        else {
            const valueName = _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variablePrefix + (++valueIndex) + _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variableSuffix;
            attrValue = valueName;
        }
    }
    if (!notEmpty) {
        attrValue = attrMatch[2];
    }
    // concat attributes as array
    const attrValueSplit = attrValue.split(_htmlInterpolationToDomMeta_function_js__WEBPACK_IMPORTED_MODULE_2__.findRealTagsRegEx).filter((x) => x.length > 0);
    if (attrValueSplit.length > 1) {
        attrValue = attrValueSplit;
        attrValueSplit.forEach((value) => {
            if (value.search(_render_attributes_getTagVarIndex_function_js__WEBPACK_IMPORTED_MODULE_3__.placeholderRegex) >= 0) {
                ++valueIndex;
            }
        });
    }
    const attrSet = [fixedName, attrValue];
    const isSpecial = (0,_attributes_isSpecialAttribute_function_js__WEBPACK_IMPORTED_MODULE_1__.isSpecialAttr)(lowerName); // check original name for "oninit" or "autofocus"
    if (isSpecial) {
        attrSet.push(isSpecial);
    }
    attributes.push(attrSet);
    return valueIndex;
}
//# sourceMappingURL=parseHTML.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/optimizers/replacePlaceholders.function.js":
/*!*********************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/optimizers/replacePlaceholders.function.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   replacePlaceholders: () => (/* binding */ replacePlaceholders)
/* harmony export */ });
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tag/DomTag.type.js */ "../../taggedjs/main/dist/js/tag/DomTag.type.js");
/* harmony import */ var _render_attributes_getTagVarIndex_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/attributes/getTagVarIndex.function.js */ "../../taggedjs/main/dist/js/render/attributes/getTagVarIndex.function.js");
// taggedjs-no-compile



const ch = 'ch'; // short for children
function replacePlaceholders(dom, valueCount, valuePositions = [], currentTail = []) {
    const elements = dom;
    for (let i = 0; i < elements.length; i++) {
        const loopTail = [...currentTail, i];
        const element = elements[i];
        if (element.at) {
            const attrs = element.at;
            element.at = processAttributes(attrs, valueCount);
        }
        if (element.ch) {
            const children = element.ch;
            const innerLoopTail = [...loopTail, ch];
            element.ch = replacePlaceholders(children, valueCount, valuePositions, innerLoopTail);
        }
        i = examineChild(element, valueCount, elements, i);
    }
    return elements;
}
function examineChild(child, valueCount, children, index) {
    if (child.nn !== 'text') {
        return index;
    }
    const textChild = child;
    let textContent = textChild.tc;
    if (typeof textContent !== _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ImmutableTypes.string) {
        return index;
    }
    let match;
    while ((match = _render_attributes_getTagVarIndex_function_js__WEBPACK_IMPORTED_MODULE_2__.placeholderRegex.exec(textContent)) !== null) {
        const secondMatch = match[1];
        const wIndex = parseInt(secondMatch, 10);
        const examine = !isNaN(wIndex) && wIndex < valueCount;
        if (examine) {
            const varContent = _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_1__.variablePrefix + wIndex + _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_1__.variableSuffix;
            const after = textContent.slice(match.index + varContent.length);
            children.splice(index, 1, {
                nn: 'text',
                v: wIndex
            });
            textContent = after;
            _render_attributes_getTagVarIndex_function_js__WEBPACK_IMPORTED_MODULE_2__.placeholderRegex.lastIndex = 0; // Reset regex index due to split
        }
    }
    textChild.tc = textContent;
    return index;
}
function processAttributes(attributes, valueCount) {
    const mapped = [];
    for (const attrSet of attributes) {
        const [key, value, isSpecial] = attrSet;
        if (key.startsWith(_tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_1__.variablePrefix)) {
            const index = parseInt(key.replace(_tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_1__.variablePrefix, ''), 10);
            if (!isNaN(index) && index < valueCount) {
                mapped.push([{ tagJsVar: index }]);
                continue;
            }
        }
        if (typeof value === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ImmutableTypes.string && value.startsWith(_tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_1__.variablePrefix)) {
            const index = parseInt(value.replace(_tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_1__.variablePrefix, ''), 10);
            if (!isNaN(index) && index < valueCount) {
                mapped.push([key, { tagJsVar: index }, isSpecial]);
                continue;
            }
        }
        mapped.push(attrSet);
    }
    return mapped;
}
//# sourceMappingURL=replacePlaceholders.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/interpolations/optimizers/types.js":
/*!**********************************************************************!*\
  !*** ../../taggedjs/main/dist/js/interpolations/optimizers/types.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/isInstance.js":
/*!*************************************************!*\
  !*** ../../taggedjs/main/dist/js/isInstance.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isPromise: () => (/* binding */ isPromise),
/* harmony export */   isSimpleType: () => (/* binding */ isSimpleType),
/* harmony export */   isStaticTag: () => (/* binding */ isStaticTag),
/* harmony export */   isSubjectInstance: () => (/* binding */ isSubjectInstance),
/* harmony export */   isTagComponent: () => (/* binding */ isTagComponent)
/* harmony export */ });
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");

function isSimpleType(value) {
    switch (value) {
        case _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ImmutableTypes.string:
        case _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ImmutableTypes.number:
        case _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ImmutableTypes.boolean:
            return true;
    }
    return false;
}
/** Indicates if tag() was used */
function isStaticTag(value) {
    if (!value) {
        return false;
    }
    const tagJsType = value.tagJsType;
    switch (tagJsType) {
        case _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.dom:
        case _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.tag:
        case _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.templater:
            return true;
    }
    return false;
}
/** passed in is expected to be a TemplaterResult */
function isTagComponent(value) {
    const tagType = value?.tagJsType;
    return tagType === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.tagComponent || tagType === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.stateRender;
}
// isSubjectLike
function isSubjectInstance(subject) {
    return isObject(subject) && typeof subject.subscribe === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.BasicTypes.function;
}
function isPromise(value) {
    return value && isFunction(value.then);
}
function isFunction(value) {
    return typeof value === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.BasicTypes.function;
}
function isObject(value) {
    return typeof (value) === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.BasicTypes.object && value !== null;
}
function isArray(value) {
    return Array.isArray(value);
}
//# sourceMappingURL=isInstance.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/afterRender.function.js":
/*!******************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/afterRender.function.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runAfterRender: () => (/* binding */ runAfterRender)
/* harmony export */ });
/* harmony import */ var _state_setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/setUseMemory.object.js */ "../../taggedjs/main/dist/js/state/setUseMemory.object.js");
/* harmony import */ var _tag_checkStateMismatch_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag/checkStateMismatch.function.js */ "../../taggedjs/main/dist/js/tag/checkStateMismatch.function.js");


/** Compares states of previous renders
 * @property support - The workflow that supports a single tag
 * @property ownerSupport - undefined when "support" is the app element
 */
function runAfterRender(support, ownerSupport) {
    const subject = support.subject;
    ++subject.renderCount;
    const config = _state_setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_0__.setUseMemory.stateConfig;
    support.state = config.stateArray;
    support.states = config.states;
    subject.global.newest = support;
    (0,_tag_checkStateMismatch_function_js__WEBPACK_IMPORTED_MODULE_1__.checkStateMismatch)(config, support);
    delete config.prevSupport; // only this one really needed
    delete config.support;
    delete config.stateArray;
    delete config.states;
    _state_setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_0__.setUseMemory.tagClosed$.next(ownerSupport);
}
//# sourceMappingURL=afterRender.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/attributes/createDynamicAttribute.function.js":
/*!****************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/attributes/createDynamicAttribute.function.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDynamicArrayAttribute: () => (/* binding */ createDynamicArrayAttribute),
/* harmony export */   createDynamicAttribute: () => (/* binding */ createDynamicAttribute)
/* harmony export */ });
/* harmony import */ var _interpolations_attributes_processNameValueAttribute_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interpolations/attributes/processNameValueAttribute.function.js */ "../../taggedjs/main/dist/js/interpolations/attributes/processNameValueAttribute.function.js");
/* harmony import */ var _processUpdateAttrContext_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processUpdateAttrContext.function.js */ "../../taggedjs/main/dist/js/render/attributes/processUpdateAttrContext.function.js");
/* harmony import */ var _getTagVarIndex_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTagVarIndex.function.js */ "../../taggedjs/main/dist/js/render/attributes/getTagVarIndex.function.js");
// taggedjs-no-compile



/** Support string attributes with dynamics Ex: <div style="color:black;font-size::${fontSize};"></div> */
function createDynamicArrayAttribute(attrName, array, element, context, howToSet, //  = howToSetInputValue
support, counts, values) {
    const startIndex = context.length;
    // loop all to attach context and processors
    array.forEach((value) => {
        const valueVar = (0,_getTagVarIndex_function_js__WEBPACK_IMPORTED_MODULE_2__.getTagVarIndex)(value);
        if (valueVar >= 0) {
            const myIndex = context.length;
            const contextItem = {
                isAttr: true,
                element,
                attrName: attrName,
                withinOwnerElement: true,
            };
            contextItem.handler = function arrayItemHanlder(value, newSupport, contextItem, newValues) {
                setBy(newValues);
            };
            const pushValue = values[myIndex];
            contextItem.value = pushValue;
            context.push(contextItem);
        }
    });
    function setBy(values) {
        const concatValue = buildNewValueFromArray(array, values, startIndex).join('');
        howToSet(element, attrName, concatValue);
    }
    setBy(values);
}
function buildNewValueFromArray(array, values, startIndex) {
    return array.reduce((all, value) => {
        const valueVar = (0,_getTagVarIndex_function_js__WEBPACK_IMPORTED_MODULE_2__.getTagVarIndex)(value);
        if (valueVar >= 0) {
            const myIndex = startIndex++;
            const pushValue = values[myIndex];
            all.push(pushValue);
            return all;
        }
        all.push(value);
        return all;
    }, []);
}
function createDynamicAttribute(attrName, value, element, context, howToSet, //  = howToSetInputValue
support, counts, isSpecial) {
    const contextItem = {
        isAttr: true,
        element,
        attrName,
        withinOwnerElement: true,
    };
    context.push(contextItem);
    contextItem.handler = _processUpdateAttrContext_function_js__WEBPACK_IMPORTED_MODULE_1__.processUpdateAttrContext;
    (0,_interpolations_attributes_processNameValueAttribute_function_js__WEBPACK_IMPORTED_MODULE_0__.processDynamicNameValueAttribute)(attrName, value, contextItem, element, howToSet, support, counts, isSpecial);
    contextItem.value = value;
}
//# sourceMappingURL=createDynamicAttribute.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/attributes/getTagJsVar.function.js":
/*!*****************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/attributes/getTagJsVar.function.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTagJsVar: () => (/* binding */ getTagJsVar)
/* harmony export */ });
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");
// taggedjs-no-compile

function getTagJsVar(attrPart) {
    if ((0,_isInstance_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(attrPart) && 'tagJsVar' in attrPart)
        return attrPart.tagJsVar;
    return -1;
    // return (attrPart as TagVarIdNum)?.tagJsVar || -1
}
//# sourceMappingURL=getTagJsVar.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/attributes/getTagVarIndex.function.js":
/*!********************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/attributes/getTagVarIndex.function.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTagVarIndex: () => (/* binding */ getTagVarIndex),
/* harmony export */   placeholderRegex: () => (/* binding */ placeholderRegex)
/* harmony export */ });
/* harmony import */ var _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tag/DomTag.type.js */ "../../taggedjs/main/dist/js/tag/DomTag.type.js");

const placeholderRegex = new RegExp(_tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variablePrefix + '(\\d+)' + _tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variableSuffix, 'g');
function getTagVarIndex(value) {
    if (value.search && value.startsWith(_tag_DomTag_type_js__WEBPACK_IMPORTED_MODULE_0__.variablePrefix)) {
        return value.search(placeholderRegex);
    }
    return -1;
}
//# sourceMappingURL=getTagVarIndex.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/attributes/isNoDisplayValue.function.js":
/*!**********************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/attributes/isNoDisplayValue.function.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNoDisplayValue: () => (/* binding */ isNoDisplayValue)
/* harmony export */ });
function isNoDisplayValue(attrValue) {
    return undefined === attrValue || null === attrValue || false === attrValue;
}
//# sourceMappingURL=isNoDisplayValue.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/attributes/processAttribute.function.js":
/*!**********************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/attributes/processAttribute.function.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processAttribute: () => (/* binding */ processAttribute),
/* harmony export */   processAttributeEmit: () => (/* binding */ processAttributeEmit),
/* harmony export */   processAttributeSubjectValue: () => (/* binding */ processAttributeSubjectValue),
/* harmony export */   processNameOnlyAttrValue: () => (/* binding */ processNameOnlyAttrValue),
/* harmony export */   processTagCallbackFun: () => (/* binding */ processTagCallbackFun)
/* harmony export */ });
/* harmony import */ var _interpolations_attributes_specialAttribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interpolations/attributes/specialAttribute.js */ "../../taggedjs/main/dist/js/interpolations/attributes/specialAttribute.js");
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");
/* harmony import */ var _interpolations_attributes_bindSubjectCallback_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interpolations/attributes/bindSubjectCallback.function.js */ "../../taggedjs/main/dist/js/interpolations/attributes/bindSubjectCallback.function.js");
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _paint_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");
/* harmony import */ var _interpolations_attributes_processNameValueAttribute_function_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../interpolations/attributes/processNameValueAttribute.function.js */ "../../taggedjs/main/dist/js/interpolations/attributes/processNameValueAttribute.function.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index.js */ "../../taggedjs/main/dist/js/render/index.js");
/* harmony import */ var _interpolations_attributes_processAttributeCallback_function_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../interpolations/attributes/processAttributeCallback.function.js */ "../../taggedjs/main/dist/js/interpolations/attributes/processAttributeCallback.function.js");
/* harmony import */ var _interpolations_attributes_isSpecialAttribute_function_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../interpolations/attributes/isSpecialAttribute.function.js */ "../../taggedjs/main/dist/js/interpolations/attributes/isSpecialAttribute.function.js");
/* harmony import */ var _processUpdateAttrContext_function_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./processUpdateAttrContext.function.js */ "../../taggedjs/main/dist/js/render/attributes/processUpdateAttrContext.function.js");
/* harmony import */ var _createDynamicAttribute_function_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createDynamicAttribute.function.js */ "../../taggedjs/main/dist/js/render/attributes/createDynamicAttribute.function.js");
/* harmony import */ var _getTagJsVar_function_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getTagJsVar.function.js */ "../../taggedjs/main/dist/js/render/attributes/getTagJsVar.function.js");
/* harmony import */ var _isNoDisplayValue_function_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./isNoDisplayValue.function.js */ "../../taggedjs/main/dist/js/render/attributes/isNoDisplayValue.function.js");
// taggedjs-no-compile













/** MAIN FUNCTION. Sets attribute value, subscribes to value updates  */
function processAttribute(values, // all the variables inside html``
attrName, element, support, howToSet, //  = howToSetInputValue
context, isSpecial, counts, value) {
    const nameVar = (0,_getTagJsVar_function_js__WEBPACK_IMPORTED_MODULE_11__.getTagJsVar)(attrName);
    const isNameVar = nameVar >= 0;
    if (isNameVar) {
        const value = values[nameVar];
        const contextItem = (0,_index_js__WEBPACK_IMPORTED_MODULE_6__.addOneContext)(value, context, true);
        contextItem.isAttr = true;
        contextItem.element = element;
        contextItem.howToSet = howToSet;
        contextItem.isNameOnly = true;
        // how to process value updates
        contextItem.handler = _processUpdateAttrContext_function_js__WEBPACK_IMPORTED_MODULE_9__.processUpdateAttrContext;
        processNameOnlyAttrValue(values, value, element, support, howToSet, context, counts);
        return;
    }
    if (Array.isArray(value)) {
        return (0,_createDynamicAttribute_function_js__WEBPACK_IMPORTED_MODULE_10__.createDynamicArrayAttribute)(attrName, value, element, context, howToSet, support, counts, values);
    }
    const valueVar = (0,_getTagJsVar_function_js__WEBPACK_IMPORTED_MODULE_11__.getTagJsVar)(value);
    if (valueVar >= 0) {
        const value = values[valueVar];
        return (0,_createDynamicAttribute_function_js__WEBPACK_IMPORTED_MODULE_10__.createDynamicAttribute)(attrName, value, element, context, howToSet, support, counts, isSpecial);
    }
    return (0,_interpolations_attributes_processNameValueAttribute_function_js__WEBPACK_IMPORTED_MODULE_5__.processNonDynamicAttr)(attrName, value, element, howToSet, counts, support, isSpecial);
}
function processNameOnlyAttrValue(values, attrValue, element, ownerSupport, howToSet, context, counts) {
    if ((0,_isNoDisplayValue_function_js__WEBPACK_IMPORTED_MODULE_12__.isNoDisplayValue)(attrValue)) {
        return;
    }
    // process an object of attributes ${{class:'something, checked:true}}
    if (typeof attrValue === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_3__.BasicTypes.object) {
        for (const name in attrValue) {
            const value = attrValue[name];
            processAttribute(values, name, element, ownerSupport, howToSet, context, (0,_interpolations_attributes_isSpecialAttribute_function_js__WEBPACK_IMPORTED_MODULE_8__.isSpecialAttr)(name), // only object variables are evaluated for is special attr
            counts, value);
        }
        return;
    }
    // regular attributes
    if (attrValue.length === 0) {
        return; // ignore, do not set at this time
    }
    howToSet(element, attrValue, _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_3__.empty);
}
function processAttributeEmit(newAttrValue, attrName, subject, element, support, howToSet, isSpecial, counts) {
    // should the function be wrapped so every time its called we re-render?
    if ((0,_isInstance_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(newAttrValue)) {
        return callbackFun(support, newAttrValue, element, attrName, isSpecial, howToSet, subject, counts);
    }
    return processAttributeSubjectValue(newAttrValue, element, attrName, isSpecial, howToSet, support, counts);
}
function processAttributeSubjectValue(newAttrValue, element, attrName, special, howToSet, support, counts) {
    // process adding/removing style. class. (false means remove)
    if (special !== false) {
        (0,_interpolations_attributes_specialAttribute_js__WEBPACK_IMPORTED_MODULE_0__.specialAttribute)(attrName, newAttrValue, element, special, // string name of special
        support, counts);
        return;
    }
    switch (newAttrValue) {
        case undefined:
        case false:
        case null:
            _paint_function_js__WEBPACK_IMPORTED_MODULE_4__.paintContent.push([paintContentPush, [element, attrName]]);
            return;
    }
    if ((0,_isInstance_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(newAttrValue)) {
        return (0,_interpolations_attributes_processAttributeCallback_function_js__WEBPACK_IMPORTED_MODULE_7__.processAttributeFunction)(element, newAttrValue, support, attrName);
    }
    // value is 0
    howToSet(element, attrName, newAttrValue);
}
function callbackFun(support, newAttrValue, element, attrName, isSpecial, howToSet, subject, counts) {
    const wrapper = support.templater.wrapper;
    const tagJsType = wrapper?.tagJsType || wrapper?.original?.tagJsType;
    const oneRender = tagJsType === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_3__.ValueTypes.renderOnce;
    if (!oneRender) {
        return processTagCallbackFun(subject, newAttrValue, support, attrName, element);
    }
    return processAttributeSubjectValue(newAttrValue, element, attrName, isSpecial, howToSet, support, counts);
}
function processTagCallbackFun(subject, newAttrValue, support, attrName, element) {
    // tag has state and will need all functions wrapped to cause re-renders
    newAttrValue = (0,_interpolations_attributes_bindSubjectCallback_function_js__WEBPACK_IMPORTED_MODULE_2__.bindSubjectCallback)(newAttrValue, support);
    return (0,_interpolations_attributes_processAttributeCallback_function_js__WEBPACK_IMPORTED_MODULE_7__.processAttributeFunction)(element, newAttrValue, support, attrName);
}
function paintContentPush(element, attrName) {
    element.removeAttribute(attrName);
}
//# sourceMappingURL=processAttribute.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/attributes/processUpdateAttrContext.function.js":
/*!******************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/attributes/processUpdateAttrContext.function.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processUpdateAttrContext: () => (/* binding */ processUpdateAttrContext)
/* harmony export */ });
/* harmony import */ var _processAttribute_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processAttribute.function.js */ "../../taggedjs/main/dist/js/render/attributes/processAttribute.function.js");
/* harmony import */ var _interpolations_attributes_updateAttribute_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interpolations/attributes/updateAttribute.function.js */ "../../taggedjs/main/dist/js/interpolations/attributes/updateAttribute.function.js");


function processUpdateAttrContext(value, ownerSupport, contextItem, values) {
    if (contextItem.isNameOnly) {
        (0,_interpolations_attributes_updateAttribute_function_js__WEBPACK_IMPORTED_MODULE_1__.updateNameOnlyAttrValue)(values, value, contextItem.value, contextItem.element, // global.element as Element,
        ownerSupport, contextItem.howToSet, [], // Context, but we dont want to alter current
        { added: 0, removed: 0 });
        contextItem.value = value;
        return;
    }
    const element = contextItem.element;
    (0,_processAttribute_function_js__WEBPACK_IMPORTED_MODULE_0__.processAttributeEmit)(value, contextItem.attrName, contextItem, element, ownerSupport, contextItem.howToSet, contextItem.isSpecial, { added: 0, removed: 0 });
    contextItem.value = value;
    return;
}
//# sourceMappingURL=processUpdateAttrContext.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/buildBeforeElement.function.js":
/*!*************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/buildBeforeElement.function.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addOneContext: () => (/* binding */ addOneContext),
/* harmony export */   buildBeforeElement: () => (/* binding */ buildBeforeElement)
/* harmony export */ });
/* harmony import */ var _dom_attachDomElements_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/attachDomElements.function.js */ "../../taggedjs/main/dist/js/render/dom/attachDomElements.function.js");
/* harmony import */ var _tag_domMetaCollector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag/domMetaCollector.js */ "../../taggedjs/main/dist/js/tag/domMetaCollector.js");
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _paint_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");




/** Function that kicks off actually putting tags down as HTML elements */
function buildBeforeElement(support, counts, appendTo, insertBefore) {
    const subject = support.subject;
    const global = subject.global;
    global.oldest = support;
    global.newest = support;
    ++_paint_function_js__WEBPACK_IMPORTED_MODULE_3__.painting.locks;
    const result = attachHtmlDomMeta(support, counts, appendTo, insertBefore);
    global.htmlDomMeta = result.dom;
    --_paint_function_js__WEBPACK_IMPORTED_MODULE_3__.painting.locks;
    // return fragment
    return result;
}
function attachHtmlDomMeta(support, counts, appendTo, insertBefore) {
    const domMeta = loadDomMeta(support);
    const thisTag = support.templater.tag;
    const values = thisTag.values;
    const context = [];
    const global = support.subject.global;
    global.context = context;
    const result = (0,_dom_attachDomElements_function_js__WEBPACK_IMPORTED_MODULE_0__.attachDomElements)(domMeta, values, support, counts, context, 0, appendTo, insertBefore);
    return result;
}
function loadDomMeta(support) {
    const templater = support.templater;
    const thisTag = templater.tag;
    if (thisTag.tagJsType === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__.ValueTypes.dom) {
        return thisTag.dom;
    }
    const strings = thisTag.strings;
    return (0,_tag_domMetaCollector_js__WEBPACK_IMPORTED_MODULE_1__.getDomMeta)(strings, thisTag.values);
}
function addOneContext(value, context, withinOwnerElement) {
    const contextItem = {
        value,
        withinOwnerElement,
    };
    context.push(contextItem);
    return contextItem;
}
//# sourceMappingURL=buildBeforeElement.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/destroySupport.function.js":
/*!*********************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/destroySupport.function.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   destroySupport: () => (/* binding */ destroySupport)
/* harmony export */ });
/* harmony import */ var _tag_destroyContext_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tag/destroyContext.function.js */ "../../taggedjs/main/dist/js/tag/destroyContext.function.js");
/* harmony import */ var _tag_smartRemoveKids_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag/smartRemoveKids.function.js */ "../../taggedjs/main/dist/js/tag/smartRemoveKids.function.js");
/* harmony import */ var _tag_tagRunner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag/tagRunner.js */ "../../taggedjs/main/dist/js/tag/tagRunner.js");



function destroySupport(support, global) {
    const subject = support.subject;
    global.deleted = true;
    subject.renderCount = 0; // if it comes back, wont be considered an update
    const promises = [];
    const context = global.context;
    (0,_tag_destroyContext_function_js__WEBPACK_IMPORTED_MODULE_0__.destroyContext)(context, support);
    if (global.destroy$) {
        (0,_tag_tagRunner_js__WEBPACK_IMPORTED_MODULE_2__.runBeforeDestroy)(support, global);
    }
    (0,_tag_smartRemoveKids_function_js__WEBPACK_IMPORTED_MODULE_1__.smartRemoveKids)(global, promises);
    return promises;
}
//# sourceMappingURL=destroySupport.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/dom/attachDomElements.function.js":
/*!****************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/dom/attachDomElements.function.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachDomElements: () => (/* binding */ attachDomElements),
/* harmony export */   blankHandler: () => (/* binding */ blankHandler)
/* harmony export */ });
/* harmony import */ var _interpolations_attributes_howToSetInputValue_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interpolations/attributes/howToSetInputValue.function.js */ "../../taggedjs/main/dist/js/interpolations/attributes/howToSetInputValue.function.js");
/* harmony import */ var _paint_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");
/* harmony import */ var _attributes_processAttribute_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../attributes/processAttribute.function.js */ "../../taggedjs/main/dist/js/render/attributes/processAttribute.function.js");
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _interpolations_optimizers_attachDynamicDom_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interpolations/optimizers/attachDynamicDom.function.js */ "../../taggedjs/main/dist/js/interpolations/optimizers/attachDynamicDom.function.js");
// taggedjs-no-compile





const blankHandler = function blankHandler() {
    return undefined;
};
function attachDomElements(nodes, values, support, counts, // used for animation stagger computing
context, depth, // used to know if dynamic variables live within parent owner tag/support
appendTo, insertBefore) {
    const dom = [];
    if (appendTo && insertBefore === undefined) {
        insertBefore = document.createTextNode(_tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_3__.empty);
        _paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintAppends.push([_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintAppend, [appendTo, insertBefore]]);
        appendTo = undefined;
    }
    for (let index = 0; index < nodes.length; ++index) {
        const node = nodes[index];
        const value = node.v;
        const isNum = !isNaN(value);
        if (isNum) {
            const index = context.length;
            const value = values[index];
            (0,_interpolations_optimizers_attachDynamicDom_function_js__WEBPACK_IMPORTED_MODULE_4__.attachDynamicDom)(value, context, support, counts, depth, appendTo, insertBefore);
            continue;
        }
        const newNode = {}; // DomObjectText
        dom.push(newNode);
        if (node.nn === 'text') {
            attachDomText(newNode, node, appendTo, insertBefore);
            continue;
        }
        // one single html element
        const domElement = attachDomElement(newNode, node, values, support, context, counts, appendTo, insertBefore);
        if (node.ch) {
            newNode.ch = attachDomElements(node.ch, values, support, counts, context, depth + 1, domElement, insertBefore).dom;
        }
    }
    return { dom, context };
}
function attachDomElement(newNode, node, values, support, context, counts, appendTo, insertBefore) {
    const domElement = newNode.domElement = document.createElement(node.nn);
    // attributes that may effect style, come first for performance
    if (node.at) {
        for (const attr of node.at) {
            const name = attr[0];
            const value = attr[1];
            const isSpecial = attr[2] || false;
            (0,_attributes_processAttribute_function_js__WEBPACK_IMPORTED_MODULE_2__.processAttribute)(values, name, domElement, support, _interpolations_attributes_howToSetInputValue_function_js__WEBPACK_IMPORTED_MODULE_0__.howToSetFirstInputValue, context, isSpecial, counts, value);
        }
    }
    if (appendTo) {
        _paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintAppends.push([_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintAppend, [appendTo, domElement]]);
    }
    else {
        _paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintCommands.push([_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintBefore, [insertBefore, domElement]]);
    }
    return domElement;
}
function attachDomText(newNode, node, owner, insertBefore) {
    const textNode = newNode;
    const string = textNode.tc = node.tc;
    if (owner) {
        _paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintAppends.push([_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintAppendElementString, [owner, string, function afterAppenDomText(elm) {
                    textNode.domElement = elm;
                }]]);
        return;
    }
    if (!insertBefore?.parentNode) {
        console.log('insertBefore, string', { insertBefore, string });
    }
    _paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintCommands.push([_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintBeforeElementString, [insertBefore, string, function afterInsertDomText(elm) {
                textNode.domElement = elm;
            }]]);
}
//# sourceMappingURL=attachDomElements.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/executeWrap.function.js":
/*!******************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/executeWrap.function.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeWrap: () => (/* binding */ executeWrap)
/* harmony export */ });
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _state_setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/setUseMemory.object.js */ "../../taggedjs/main/dist/js/state/setUseMemory.object.js");


function executeWrap(templater, result, useSupport, castedProps) {
    const originalFunction = result.original; // (innerTagWrap as any).original as unknown as TagComponent
    const stateless = templater.tagJsType === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.stateRender;
    const config = _state_setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_1__.setUseMemory.stateConfig;
    config.support = useSupport;
    let tag;
    if (stateless) {
        tag = templater();
    }
    else {
        tag = originalFunction(...castedProps);
        // CALL ORIGINAL COMPONENT FUNCTION
        if (typeof (tag) === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.BasicTypes.function) {
            tag = tag();
        }
    }
    tag.templater = templater;
    templater.tag = tag;
    useSupport.state = config.stateArray;
    useSupport.states = config.states;
    // useSupport.states = [...config.states]
    return useSupport;
}
//# sourceMappingURL=executeWrap.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/index.js":
/*!***************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addOneContext: () => (/* reexport safe */ _buildBeforeElement_function_js__WEBPACK_IMPORTED_MODULE_3__.addOneContext),
/* harmony export */   buildBeforeElement: () => (/* reexport safe */ _buildBeforeElement_function_js__WEBPACK_IMPORTED_MODULE_3__.buildBeforeElement),
/* harmony export */   destroySupport: () => (/* reexport safe */ _destroySupport_function_js__WEBPACK_IMPORTED_MODULE_4__.destroySupport),
/* harmony export */   renderSupport: () => (/* reexport safe */ _renderSupport_function_js__WEBPACK_IMPORTED_MODULE_1__.renderSupport),
/* harmony export */   renderTagOnly: () => (/* reexport safe */ _renderTagOnly_function_js__WEBPACK_IMPORTED_MODULE_0__.renderTagOnly),
/* harmony export */   renderWithSupport: () => (/* reexport safe */ _renderWithSupport_function_js__WEBPACK_IMPORTED_MODULE_2__.renderWithSupport)
/* harmony export */ });
/* harmony import */ var _renderTagOnly_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTagOnly.function.js */ "../../taggedjs/main/dist/js/render/renderTagOnly.function.js");
/* harmony import */ var _renderSupport_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderSupport.function.js */ "../../taggedjs/main/dist/js/render/renderSupport.function.js");
/* harmony import */ var _renderWithSupport_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderWithSupport.function.js */ "../../taggedjs/main/dist/js/render/renderWithSupport.function.js");
/* harmony import */ var _buildBeforeElement_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buildBeforeElement.function.js */ "../../taggedjs/main/dist/js/render/buildBeforeElement.function.js");
/* harmony import */ var _destroySupport_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./destroySupport.function.js */ "../../taggedjs/main/dist/js/render/destroySupport.function.js");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/paint.function.js":
/*!************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/paint.function.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   paint: () => (/* binding */ paint),
/* harmony export */   paintAfters: () => (/* binding */ paintAfters),
/* harmony export */   paintAppend: () => (/* binding */ paintAppend),
/* harmony export */   paintAppendElementString: () => (/* binding */ paintAppendElementString),
/* harmony export */   paintAppendText: () => (/* binding */ paintAppendText),
/* harmony export */   paintAppends: () => (/* binding */ paintAppends),
/* harmony export */   paintBefore: () => (/* binding */ paintBefore),
/* harmony export */   paintBeforeElementString: () => (/* binding */ paintBeforeElementString),
/* harmony export */   paintBeforeText: () => (/* binding */ paintBeforeText),
/* harmony export */   paintCommands: () => (/* binding */ paintCommands),
/* harmony export */   paintContent: () => (/* binding */ paintContent),
/* harmony export */   paintRemover: () => (/* binding */ paintRemover),
/* harmony export */   painting: () => (/* binding */ painting),
/* harmony export */   setContent: () => (/* binding */ setContent)
/* harmony export */ });
/* harmony import */ var _dom_attachDomElements_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/attachDomElements.function.js */ "../../taggedjs/main/dist/js/render/dom/attachDomElements.function.js");

let paintCommands = [];
let paintContent = [];
let setContent = [];
let paintAppends = [];
let paintAfters = []; // callbacks after all painted
const painting = {
    locks: 0
};
function paint() {
    if (painting.locks > 0) {
        return;
    }
    for (const content of paintContent) {
        content[0](...content[1]);
    }
    for (const [text, textNode] of setContent) {
        textNode.textContent = text;
    }
    for (const content of paintAppends) {
        content[0](...content[1]);
    }
    for (const content of paintCommands) {
        content[0](...content[1]);
    }
    paintReset();
    for (const content of paintAfters) {
        content[0](...content[1]);
    }
    paintAfters = [];
    console.log('------ painting cycle completed ----');
}
function paintReset() {
    paintCommands = [];
    paintContent = [];
    paintAppends = [];
    setContent = [];
}
function paintRemover(element) {
    const parentNode = element.parentNode;
    parentNode.removeChild(element);
}
function paintBefore(relative, element) {
    relative.parentNode.insertBefore(element, relative);
}
function paintAppend(relative, element) {
    relative.appendChild(element);
}
const contentCleaner = (typeof document === 'object' && document.createElement('div')); // used for content cleaning
function toPlainTextElm(text) {
    // swap &gt; for >
    contentCleaner.innerHTML = text; // script tags should have already been sanitized before this step
    // delete <!-- -->
    return document.createTextNode(contentCleaner.innerHTML);
}
function paintBeforeText(relative, text, callback = _dom_attachDomElements_function_js__WEBPACK_IMPORTED_MODULE_0__.blankHandler) {
    const textElm = toPlainTextElm(text);
    paintBefore(relative, textElm);
    callback(textElm);
}
function paintAppendText(relative, text, callback) {
    const textElm = toPlainTextElm(text);
    paintAppend(relative, textElm);
    callback(textElm);
}
/** Used when HTML content is safe and expected */
function paintBeforeElementString(relative, text, callback = _dom_attachDomElements_function_js__WEBPACK_IMPORTED_MODULE_0__.blankHandler) {
    contentCleaner.innerHTML = text;
    const textElm = document.createTextNode(contentCleaner.textContent); // toPlainTextElm(text)
    if (!relative.parentNode) {
        console.log('relative', { relative, textElm, callback });
    }
    paintBefore(relative, textElm);
    callback(textElm);
}
/** Used when HTML content is safe and expected */
function paintAppendElementString(relative, text, callback) {
    contentCleaner.innerHTML = text;
    const textElm = document.createTextNode(contentCleaner.textContent); // toPlainTextElm(text)
    paintAppend(relative, textElm);
    callback(textElm);
}
//# sourceMappingURL=paint.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/registerNewTagElement.function.js":
/*!****************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/registerNewTagElement.function.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerTagElement: () => (/* binding */ registerTagElement)
/* harmony export */ });
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "../../taggedjs/main/dist/js/index.js");


function registerTagElement(support, element, global, templater, app, placeholder) {
    console.debug('🏷️ Building element into tag...', { element, app });
    const result = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.buildBeforeElement)(support, { added: 0, removed: 0 }, element, undefined);
    global.oldest = support;
    global.newest = support;
    let setUse = templater.setUse;
    if (templater.tagJsType !== _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.stateRender) {
        const wrap = app;
        const original = wrap.original;
        setUse = original.setUse;
        original.isApp = true;
    }
    ;
    element.setUse = setUse;
    element.ValueTypes = _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes;
    _index_js__WEBPACK_IMPORTED_MODULE_1__.appElements.push({ element, support });
    const newFragment = document.createDocumentFragment();
    newFragment.appendChild(placeholder);
    for (const domItem of result.dom) {
        putOneDomDown(domItem, newFragment);
    }
    console.debug('🏷️ Element Tag DOM built ✅');
    return newFragment;
}
function putOneDomDown(dom, newFragment) {
    if (dom.domElement) {
        newFragment.appendChild(dom.domElement);
    }
    if (dom.marker) {
        newFragment.appendChild(dom.marker);
    }
}
//# sourceMappingURL=registerNewTagElement.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/renderExistingTag.function.js":
/*!************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/renderExistingTag.function.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderExistingReadyTag: () => (/* binding */ renderExistingReadyTag)
/* harmony export */ });
/* harmony import */ var _renderWithSupport_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderWithSupport.function.js */ "../../taggedjs/main/dist/js/render/renderWithSupport.function.js");
/* harmony import */ var _update_processTag_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update/processTag.function.js */ "../../taggedjs/main/dist/js/render/update/processTag.function.js");
/* harmony import */ var _update_updateSupportBy_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update/updateSupportBy.function.js */ "../../taggedjs/main/dist/js/render/update/updateSupportBy.function.js");



// TODO: This function is being called for 1st time renders WHEN renderCount === 1
function renderExistingReadyTag(lastSupport, // should be global.newest
newSupport, // new to be rendered
ownerSupport, // ownerSupport
subject) {
    const global = subject.global;
    const { support, wasLikeTags } = (0,_renderWithSupport_function_js__WEBPACK_IMPORTED_MODULE_0__.renderWithSupport)(newSupport, lastSupport, // renderCount <= 0 ? undefined : lastSupport
    subject, ownerSupport);
    if (wasLikeTags) {
        (0,_update_updateSupportBy_function_js__WEBPACK_IMPORTED_MODULE_2__.updateSupportBy)(global.oldest, support);
        return support;
    }
    (0,_update_processTag_function_js__WEBPACK_IMPORTED_MODULE_1__.processTag)(ownerSupport, subject, { added: 0, removed: 0 });
    return support;
}
//# sourceMappingURL=renderExistingTag.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/renderSupport.function.js":
/*!********************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/renderSupport.function.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkRenderUp: () => (/* binding */ checkRenderUp),
/* harmony export */   hasPropLengthsChanged: () => (/* binding */ hasPropLengthsChanged),
/* harmony export */   isInlineHtml: () => (/* binding */ isInlineHtml),
/* harmony export */   renderInlineHtml: () => (/* binding */ renderInlineHtml),
/* harmony export */   renderSupport: () => (/* binding */ renderSupport)
/* harmony export */ });
/* harmony import */ var _deepFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deepFunctions.js */ "../../taggedjs/main/dist/js/deepFunctions.js");
/* harmony import */ var _renderExistingTag_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderExistingTag.function.js */ "../../taggedjs/main/dist/js/render/renderExistingTag.function.js");
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.js */ "../../taggedjs/main/dist/js/index.js");
/* harmony import */ var _tag_hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tag/hasSupportChanged.function.js */ "../../taggedjs/main/dist/js/tag/hasSupportChanged.function.js");





function isInlineHtml(templater) {
    return _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__.ValueTypes.templater === templater.tagJsType;
}
/** Main function used by all other callers to render/update display of a tag component */
function renderSupport(support) {
    const global = support.subject.global;
    const templater = support.templater;
    const inlineHtml = isInlineHtml(templater);
    const ownerSupport = support.ownerSupport;
    if (global.locked) {
        global.blocked.push(support);
        return support;
    }
    // is it just a vanilla tag, not component?
    if (inlineHtml) {
        const result = renderInlineHtml(ownerSupport, support);
        return result;
    }
    global.locked = true;
    const subject = support.subject;
    if (global.blocked.length) {
        support = global.blocked.pop();
        global.blocked = [];
    }
    const tag = (0,_renderExistingTag_function_js__WEBPACK_IMPORTED_MODULE_1__.renderExistingReadyTag)(global.newest, support, ownerSupport, subject);
    delete global.locked;
    return tag;
}
function renderInlineHtml(ownerSupport, support) {
    const ownGlobal = ownerSupport.subject.global;
    if (!ownGlobal || ownGlobal.deleted === true) {
        return support;
    }
    // ??? new change
    const newest = ownGlobal.newest || ownerSupport;
    const result = renderSupport(newest);
    return result;
}
function checkRenderUp(ownerSupport, templater, support) {
    const selfPropChange = hasPropsToOwnerChanged(templater, support);
    // render owner up first and that will cause me to re-render
    if (ownerSupport && selfPropChange) {
        return true;
    }
    return false;
}
/** Used when crawling up the chain of child-to-parent tags. See hasSupportChanged for the downward direction */
function hasPropsToOwnerChanged(templater, support) {
    const nowProps = templater.props;
    const propsConfig = support.propsConfig;
    const latestProps = propsConfig.latest;
    const compareLen = hasPropLengthsChanged(nowProps, latestProps);
    if (compareLen) {
        return true;
    }
    switch (templater.propWatch) {
        case _index_js__WEBPACK_IMPORTED_MODULE_3__.PropWatches.IMMUTABLE:
            return (0,_tag_hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_4__.immutablePropMatch)(nowProps, latestProps);
        case _index_js__WEBPACK_IMPORTED_MODULE_3__.PropWatches.SHALLOW:
            return (0,_tag_hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_4__.shallowPropMatch)(nowProps, latestProps);
    }
    return !(0,_deepFunctions_js__WEBPACK_IMPORTED_MODULE_0__.deepEqual)(nowProps, latestProps, _tag_hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_4__.deepCompareDepth);
}
function hasPropLengthsChanged(nowProps, latestProps) {
    const nowLen = nowProps.length;
    const latestLen = latestProps.length;
    /*
    const noLength = nowProps && nowLen === 0 && latestLen === 0
  
    if(noLength) {
      return false
    }
    */
    return nowLen !== latestLen;
}
//# sourceMappingURL=renderSupport.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/renderTagElement.function.js":
/*!***********************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/renderTagElement.function.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTagElement: () => (/* binding */ renderTagElement),
/* harmony export */   runWrapper: () => (/* binding */ runWrapper)
/* harmony export */ });
/* harmony import */ var _tag_tag_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tag/tag.utils.js */ "../../taggedjs/main/dist/js/tag/tag.utils.js");
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _destroySupport_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./destroySupport.function.js */ "../../taggedjs/main/dist/js/render/destroySupport.function.js");
/* harmony import */ var _paint_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index.js */ "../../taggedjs/main/dist/js/index.js");
/* harmony import */ var _tag_createSupport_function_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tag/createSupport.function.js */ "../../taggedjs/main/dist/js/tag/createSupport.function.js");
/* harmony import */ var _render_afterRender_function_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../render/afterRender.function.js */ "../../taggedjs/main/dist/js/render/afterRender.function.js");
/* harmony import */ var _executeWrap_function_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./executeWrap.function.js */ "../../taggedjs/main/dist/js/render/executeWrap.function.js");
/* harmony import */ var _registerNewTagElement_function_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registerNewTagElement.function.js */ "../../taggedjs/main/dist/js/render/registerNewTagElement.function.js");
/* harmony import */ var _tag_loadNewBaseSupport_function_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tag/loadNewBaseSupport.function.js */ "../../taggedjs/main/dist/js/tag/loadNewBaseSupport.function.js");
/* harmony import */ var _state_state_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../state/state.utils.js */ "../../taggedjs/main/dist/js/state/state.utils.js");











function renderTagElement(app, global, templater, templater2, element, subject, isAppFunction) {
    const placeholder = document.createTextNode(_tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__.empty);
    _tag_tag_utils_js__WEBPACK_IMPORTED_MODULE_0__.tags.push((templater.wrapper || { original: templater }));
    const support = runWrapper(templater, placeholder, element, subject, isAppFunction);
    global.isApp = true;
    if (isAppFunction) {
        templater2.tag = support.templater.tag;
    }
    if (!element) {
        throw new Error(`Cannot tagElement, element received is type ${typeof element} and not type Element`);
    }
    // enables hmr destroy so it can control entire app
    ;
    element.destroy = function () {
        const events = global.events;
        for (const eventName in events) {
            const callback = events[eventName];
            element.removeEventListener(eventName, callback);
        }
        global.events = {};
        ++_paint_function_js__WEBPACK_IMPORTED_MODULE_3__.painting.locks;
        const toAwait = (0,_destroySupport_function_js__WEBPACK_IMPORTED_MODULE_2__.destroySupport)(support, global); // never return anything here
        --_paint_function_js__WEBPACK_IMPORTED_MODULE_3__.painting.locks;
        (0,_paint_function_js__WEBPACK_IMPORTED_MODULE_3__.paint)();
        return toAwait;
    };
    ++_paint_function_js__WEBPACK_IMPORTED_MODULE_3__.painting.locks;
    const newFragment = (0,_registerNewTagElement_function_js__WEBPACK_IMPORTED_MODULE_8__.registerTagElement)(support, element, global, templater, app, placeholder);
    --_paint_function_js__WEBPACK_IMPORTED_MODULE_3__.painting.locks;
    (0,_paint_function_js__WEBPACK_IMPORTED_MODULE_3__.paint)();
    element.appendChild(newFragment);
    return {
        support,
        tags: _tag_tag_utils_js__WEBPACK_IMPORTED_MODULE_0__.tags,
        ValueTypes: _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__.ValueTypes,
    };
}
function runWrapper(templater, placeholder, appElement, subject, isAppFunction) {
    subject.placeholder = placeholder;
    const global = subject.global;
    const oldest = global.oldest;
    const isFirstRender = global.newest === oldest;
    const newSupport = (0,_tag_createSupport_function_js__WEBPACK_IMPORTED_MODULE_5__.createSupport)(templater, global.newest, global.newest.appSupport, // ownerSupport.appSupport as AnySupport,
    subject);
    if (!isFirstRender) {
        (0,_state_state_utils_js__WEBPACK_IMPORTED_MODULE_10__.reState)(newSupport, global.newest, // global.oldest, // global.newest,
        _index_js__WEBPACK_IMPORTED_MODULE_4__.setUseMemory.stateConfig, oldest.state);
    }
    if (templater.tagJsType === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.stateRender) {
        return executeStateWrap(templater, isAppFunction, newSupport, subject, appElement);
    }
    // Call the apps function for our tag templater
    const wrapper = templater.wrapper;
    const nowSupport = wrapper(newSupport, subject);
    (0,_render_afterRender_function_js__WEBPACK_IMPORTED_MODULE_6__.runAfterRender)(newSupport);
    return nowSupport;
}
function executeStateWrap(templater, isAppFunction, newSupport, subject, appElement) {
    const result = (templater.wrapper || { original: templater });
    if (!isAppFunction) {
        const newSupport = (0,_tag_loadNewBaseSupport_function_js__WEBPACK_IMPORTED_MODULE_9__.loadNewBaseSupport)(templater, subject, appElement);
        (0,_render_afterRender_function_js__WEBPACK_IMPORTED_MODULE_6__.runAfterRender)(newSupport);
        return newSupport;
    }
    (0,_executeWrap_function_js__WEBPACK_IMPORTED_MODULE_7__.executeWrap)(templater, result, newSupport);
    (0,_render_afterRender_function_js__WEBPACK_IMPORTED_MODULE_6__.runAfterRender)(newSupport);
    return newSupport;
}
//# sourceMappingURL=renderTagElement.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/renderTagOnly.function.js":
/*!********************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/renderTagOnly.function.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTagOnly: () => (/* binding */ renderTagOnly)
/* harmony export */ });
/* harmony import */ var _executeWrap_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./executeWrap.function.js */ "../../taggedjs/main/dist/js/render/executeWrap.function.js");
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _afterRender_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./afterRender.function.js */ "../../taggedjs/main/dist/js/render/afterRender.function.js");
/* harmony import */ var _state_state_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/state.utils.js */ "../../taggedjs/main/dist/js/state/state.utils.js");
/* harmony import */ var _state_setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/setUseMemory.object.js */ "../../taggedjs/main/dist/js/state/setUseMemory.object.js");
/* harmony import */ var _tag_createSupport_function_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tag/createSupport.function.js */ "../../taggedjs/main/dist/js/tag/createSupport.function.js");






function renderTagOnly(newSupport, prevSupport, // causes restate
subject, ownerSupport) {
    runBeforeRender(newSupport, prevSupport);
    const templater = newSupport.templater;
    let reSupport;
    // NEW TAG CREATED HERE
    if (templater.tagJsType === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.stateRender) {
        const result = templater; // .wrapper as any// || {original: templater} as any
        reSupport = (0,_tag_createSupport_function_js__WEBPACK_IMPORTED_MODULE_5__.createSupport)(templater, ownerSupport, newSupport.appSupport, // ownerSupport.appSupport as AnySupport,
        subject);
        (0,_executeWrap_function_js__WEBPACK_IMPORTED_MODULE_0__.executeWrap)(templater, result, reSupport);
    }
    else {
        // functions wrapped in tag()
        const wrapper = templater.wrapper;
        // calls the function returned from getTagWrap()
        reSupport = wrapper(newSupport, subject, prevSupport);
    }
    (0,_afterRender_function_js__WEBPACK_IMPORTED_MODULE_2__.runAfterRender)(reSupport, ownerSupport);
    return reSupport;
}
function runBeforeRender(newSupport, prevSupport) {
    const prevState = prevSupport?.state;
    const config = _state_setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_4__.setUseMemory.stateConfig;
    if (prevState) {
        (0,_state_state_utils_js__WEBPACK_IMPORTED_MODULE_3__.reState)(newSupport, prevSupport, _state_setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_4__.setUseMemory.stateConfig, prevState);
        return;
    }
    (0,_state_state_utils_js__WEBPACK_IMPORTED_MODULE_3__.initState)(newSupport, config);
}
//# sourceMappingURL=renderTagOnly.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/renderWithSupport.function.js":
/*!************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/renderWithSupport.function.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderWithSupport: () => (/* binding */ renderWithSupport)
/* harmony export */ });
/* harmony import */ var _update_updateExistingTagComponent_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update/updateExistingTagComponent.function.js */ "../../taggedjs/main/dist/js/render/update/updateExistingTagComponent.function.js");
/* harmony import */ var _softDestroySupport_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./softDestroySupport.function.js */ "../../taggedjs/main/dist/js/render/softDestroySupport.function.js");
/* harmony import */ var _renderTagOnly_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTagOnly.function.js */ "../../taggedjs/main/dist/js/render/renderTagOnly.function.js");
/* harmony import */ var _tag_isLikeTags_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag/isLikeTags.function.js */ "../../taggedjs/main/dist/js/tag/isLikeTags.function.js");
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");





/** TODO: This seems to support both new and updates and should be separated? */
function renderWithSupport(newSupport, lastSupport, // previous (global.newest)
subject, // events & memory
ownerSupport) {
    const lastTemplater = lastSupport?.templater;
    const lastTag = lastTemplater?.tag;
    const reSupport = (0,_renderTagOnly_function_js__WEBPACK_IMPORTED_MODULE_2__.renderTagOnly)(newSupport, lastSupport, subject, ownerSupport);
    const isLikeTag = !lastSupport || (0,_tag_isLikeTags_function_js__WEBPACK_IMPORTED_MODULE_3__.isLikeTags)(lastSupport, reSupport);
    if (!isLikeTag) {
        (0,_update_updateExistingTagComponent_function_js__WEBPACK_IMPORTED_MODULE_0__.moveProviders)(lastSupport, reSupport);
        (0,_softDestroySupport_function_js__WEBPACK_IMPORTED_MODULE_1__.softDestroySupport)(lastSupport);
        const global = reSupport.subject.global;
        global.oldest = reSupport;
        global.newest = reSupport;
    }
    else if (lastSupport) {
        const tag = lastSupport.templater.tag;
        if (tag && subject.renderCount > 0) {
            checkTagSoftDestroy(tag, lastSupport, lastTag);
        }
    }
    const lastOwnerSupport = lastSupport?.ownerSupport;
    reSupport.ownerSupport = (ownerSupport || lastOwnerSupport);
    return { support: reSupport, wasLikeTags: isLikeTag };
}
function checkTagSoftDestroy(tag, lastSupport, lastTag) {
    if (tag.tagJsType === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_4__.ValueTypes.dom) {
        const lastDom = lastTag?.dom;
        const newDom = tag.dom;
        if (lastDom !== newDom) {
            (0,_softDestroySupport_function_js__WEBPACK_IMPORTED_MODULE_1__.softDestroySupport)(lastSupport);
        }
        return;
    }
    if (lastTag) {
        const lastStrings = lastTag.strings;
        if (lastStrings) {
            const oldLength = lastStrings?.length;
            const newLength = tag.strings.length;
            if (oldLength !== newLength) {
                (0,_softDestroySupport_function_js__WEBPACK_IMPORTED_MODULE_1__.softDestroySupport)(lastSupport);
            }
        }
    }
}
//# sourceMappingURL=renderWithSupport.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/softDestroySupport.function.js":
/*!*************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/softDestroySupport.function.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   softDestroySupport: () => (/* binding */ softDestroySupport)
/* harmony export */ });
/* harmony import */ var _tag_destroyContext_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tag/destroyContext.function.js */ "../../taggedjs/main/dist/js/tag/destroyContext.function.js");
/* harmony import */ var _tag_update_getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag/update/getNewGlobal.function.js */ "../../taggedjs/main/dist/js/tag/update/getNewGlobal.function.js");
/* harmony import */ var _tag_smartRemoveKids_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag/smartRemoveKids.function.js */ "../../taggedjs/main/dist/js/tag/smartRemoveKids.function.js");



/** used when a tag swaps content returned */
function softDestroySupport(lastSupport) {
    const subject = lastSupport.subject;
    const global = subject.global;
    const { subs, tags } = (0,_tag_destroyContext_function_js__WEBPACK_IMPORTED_MODULE_0__.getChildTagsToSoftDestroy)(global.context);
    softDestroyOne(global);
    for (const child of tags) {
        const cGlobal = child.subject.global;
        if (cGlobal.deleted === true) {
            return;
        }
        softDestroyOne(cGlobal);
    }
    const mySubs = global.subscriptions;
    if (mySubs) {
        subs.forEach(_tag_destroyContext_function_js__WEBPACK_IMPORTED_MODULE_0__.unsubscribeFrom);
    }
    (0,_tag_update_getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_1__.getNewGlobal)(subject);
}
function softDestroyOne(global) {
    global.deleted = true; // the children are truly destroyed but the main support will be swapped
    (0,_tag_smartRemoveKids_function_js__WEBPACK_IMPORTED_MODULE_2__.smartRemoveKids)(global, []);
}
//# sourceMappingURL=softDestroySupport.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/update/processRenderOnceInit.function.js":
/*!***********************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/update/processRenderOnceInit.function.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processRenderOnceInit: () => (/* binding */ processRenderOnceInit)
/* harmony export */ });
/* harmony import */ var _tag_update_oneRenderToSupport_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tag/update/oneRenderToSupport.function.js */ "../../taggedjs/main/dist/js/tag/update/oneRenderToSupport.function.js");
/* harmony import */ var _renderTagOnly_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderTagOnly.function.js */ "../../taggedjs/main/dist/js/render/renderTagOnly.function.js");
/* harmony import */ var _tag_update_getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tag/update/getNewGlobal.function.js */ "../../taggedjs/main/dist/js/tag/update/getNewGlobal.function.js");
/* harmony import */ var _tag_update_processNewSubjectTag_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tag/update/processNewSubjectTag.function.js */ "../../taggedjs/main/dist/js/tag/update/processNewSubjectTag.function.js");




function processRenderOnceInit(value, contextItem, // could be tag via result.tag
ownerSupport, // owningSupport
counts, appendTo, insertBefore) {
    (0,_tag_update_getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_2__.getNewGlobal)(contextItem);
    const support = (0,_tag_update_oneRenderToSupport_function_js__WEBPACK_IMPORTED_MODULE_0__.oneRenderToSupport)(value, contextItem, ownerSupport);
    (0,_renderTagOnly_function_js__WEBPACK_IMPORTED_MODULE_1__.renderTagOnly)(support, undefined, contextItem, ownerSupport);
    const result = (0,_tag_update_processNewSubjectTag_function_js__WEBPACK_IMPORTED_MODULE_3__.processNewSubjectTag)(support.templater, contextItem, ownerSupport, counts, appendTo, insertBefore);
    return result;
}
//# sourceMappingURL=processRenderOnceInit.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/update/processTag.function.js":
/*!************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/update/processTag.function.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFakeTemplater: () => (/* binding */ getFakeTemplater),
/* harmony export */   newSupportByTemplater: () => (/* binding */ newSupportByTemplater),
/* harmony export */   processTag: () => (/* binding */ processTag),
/* harmony export */   tagFakeTemplater: () => (/* binding */ tagFakeTemplater)
/* harmony export */ });
/* harmony import */ var _tag_createHtmlSupport_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tag/createHtmlSupport.function.js */ "../../taggedjs/main/dist/js/tag/createHtmlSupport.function.js");
/* harmony import */ var _tag_checkTagValueChange_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tag/checkTagValueChange.function.js */ "../../taggedjs/main/dist/js/tag/checkTagValueChange.function.js");
/* harmony import */ var _buildBeforeElement_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildBeforeElement.function.js */ "../../taggedjs/main/dist/js/render/buildBeforeElement.function.js");
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _tag_update_processTagInit_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tag/update/processTagInit.function.js */ "../../taggedjs/main/dist/js/tag/update/processTagInit.function.js");





/** When first time render, adds to owner childTags
 * Used for BOTH inserts & updates to values that were something else
 * Intended use only for updates
*/
function processTag(ownerSupport, // owner
contextItem, // could be tag via result.tag
counts) {
    const global = contextItem.global;
    const support = global.newest;
    support.ownerSupport = ownerSupport;
    const ph = contextItem.placeholder;
    if (!ph?.parentNode) {
        console.log('no parent before processTag', { ph, contextItem });
    }
    (0,_buildBeforeElement_function_js__WEBPACK_IMPORTED_MODULE_2__.buildBeforeElement)(support, counts, undefined, ph);
    return support;
}
function tagFakeTemplater(tag) {
    const templater = getFakeTemplater();
    templater.tag = tag;
    tag.templater = templater;
    return templater;
}
function getFakeTemplater() {
    const fake = {
        tagJsType: _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_3__.ValueTypes.templater,
        processInit: _tag_update_processTagInit_function_js__WEBPACK_IMPORTED_MODULE_4__.processTagInit,
        checkValueChange: _tag_checkTagValueChange_function_js__WEBPACK_IMPORTED_MODULE_1__.checkTagValueChange,
    };
    return fake;
}
/** Create support for a tag component */
function newSupportByTemplater(templater, ownerSupport, subject) {
    const support = (0,_tag_createHtmlSupport_function_js__WEBPACK_IMPORTED_MODULE_0__.createHtmlSupport)(templater, ownerSupport, ownerSupport.appSupport, subject);
    const global = subject.global;
    global.context = [];
    return support;
}
//# sourceMappingURL=processTag.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/update/updateExistingTagComponent.function.js":
/*!****************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/update/updateExistingTagComponent.function.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moveProviders: () => (/* binding */ moveProviders),
/* harmony export */   syncFunctionProps: () => (/* binding */ syncFunctionProps),
/* harmony export */   updateExistingTagComponent: () => (/* binding */ updateExistingTagComponent)
/* harmony export */ });
/* harmony import */ var _tag_hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tag/hasSupportChanged.function.js */ "../../taggedjs/main/dist/js/tag/hasSupportChanged.function.js");
/* harmony import */ var _tag_props_alterProp_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tag/props/alterProp.function.js */ "../../taggedjs/main/dist/js/tag/props/alterProp.function.js");
/* harmony import */ var _renderSupport_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../renderSupport.function.js */ "../../taggedjs/main/dist/js/render/renderSupport.function.js");
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _destroySupport_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../destroySupport.function.js */ "../../taggedjs/main/dist/js/render/destroySupport.function.js");
/* harmony import */ var _tag_update_getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tag/update/getNewGlobal.function.js */ "../../taggedjs/main/dist/js/tag/update/getNewGlobal.function.js");
/* harmony import */ var _tag_isLikeTags_function_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tag/isLikeTags.function.js */ "../../taggedjs/main/dist/js/tag/isLikeTags.function.js");
/* harmony import */ var _tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tagJsVars/tag.function.js */ "../../taggedjs/main/dist/js/tagJsVars/tag.function.js");
/* harmony import */ var _tag_update_syncPriorPropFunction_function_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tag/update/syncPriorPropFunction.function.js */ "../../taggedjs/main/dist/js/tag/update/syncPriorPropFunction.function.js");









function updateExistingTagComponent(ownerSupport, newSupport, // lastest
subject) {
    const global = subject.global;
    const oldSupport = global.newest;
    const oldWrapper = oldSupport.templater.wrapper;
    let newWrapper = newSupport.templater.wrapper;
    let isSameTag = false;
    const tagJsType = newSupport.templater.tagJsType;
    const skipComparing = _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_3__.ValueTypes.stateRender === tagJsType || _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_3__.ValueTypes.renderOnce === tagJsType;
    if (skipComparing) {
        isSameTag = newSupport.templater.tagJsType === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_3__.ValueTypes.renderOnce || (0,_tag_isLikeTags_function_js__WEBPACK_IMPORTED_MODULE_6__.isLikeTags)(oldSupport, newSupport);
    }
    else if (oldWrapper && newWrapper) {
        // is this perhaps an outerHTML compare?
        const innerHTML = oldSupport.templater.tag?._innerHTML;
        if (innerHTML) {
            // newWrapper = innerHTML.outerHTML as any as Wrapper
            newWrapper = newSupport.outerHTML;
        }
        const oldFunction = oldWrapper.original;
        const newFunction = newWrapper.original;
        // string compare both functions
        isSameTag = oldFunction === newFunction;
    }
    const templater = newSupport.templater;
    if (!isSameTag) {
        swapTags(subject, templater, ownerSupport);
        return;
    }
    const hasChanged = skipComparing || (0,_tag_hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_0__.hasSupportChanged)(oldSupport, templater);
    // everyhing has matched, no display needs updating.
    if (!hasChanged) {
        const maxDepth = templater.propWatch === _tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_7__.PropWatches.DEEP ? _tag_hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_0__.deepCompareDepth : _tag_hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_0__.shallowCompareDepth;
        syncSupports(templater, newSupport, oldSupport, ownerSupport, maxDepth);
        return;
    }
    if (global.locked) {
        global.blocked.push(newSupport);
        return;
    }
    (0,_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_2__.renderSupport)(newSupport);
    ++subject.renderCount;
    return;
}
function syncFunctionProps(newSupport, oldSupport, ownerSupport, newPropsArray, // templater.props
maxDepth, depth = -1) {
    const subject = oldSupport.subject;
    const global = subject.global;
    const newest = global.newest;
    if (!newest) {
        const castedProps = (0,_tag_props_alterProp_function_js__WEBPACK_IMPORTED_MODULE_1__.castProps)(newPropsArray, newSupport, depth);
        newPropsArray.push(...castedProps);
        const propsConfig = newSupport.propsConfig;
        propsConfig.castProps = castedProps;
        return newPropsArray;
    }
    oldSupport = newest || oldSupport;
    const priorPropConfig = oldSupport.propsConfig;
    const priorPropsArray = priorPropConfig.castProps;
    const newArray = [];
    for (let index = 0; index < newPropsArray.length; ++index) {
        const prop = newPropsArray[index];
        const priorProp = priorPropsArray[index];
        const newValue = (0,_tag_update_syncPriorPropFunction_function_js__WEBPACK_IMPORTED_MODULE_8__.syncPriorPropFunction)(priorProp, prop, newSupport, ownerSupport, maxDepth, depth + 1);
        newArray.push(newValue);
    }
    const newPropsConfig = newSupport.propsConfig;
    newPropsConfig.castProps = newArray;
    return newArray;
}
function moveProviders(oldSupport, newSupport) {
    const global = oldSupport.subject.global;
    let pIndex = -1;
    const providers = global.providers = global.providers || [];
    const pLen = providers.length - 1;
    while (pIndex++ < pLen) {
        const provider = providers[pIndex];
        let index = -1;
        const pcLen = provider.children.length - 1;
        while (index++ < pcLen) {
            const child = provider.children[index];
            const wasSameGlobals = global === child.subject.global;
            if (wasSameGlobals) {
                provider.children.splice(index, 1);
                provider.children.push(newSupport);
                return;
            }
        }
    }
}
/** Exchanges entire propsConfigs */
function syncSupports(templater, support, oldSupport, ownerSupport, maxDepth) {
    // update function refs to use latest references
    const newProps = templater.props;
    const castedProps = syncFunctionProps(support, oldSupport, ownerSupport, newProps, maxDepth);
    const propsConfig = support.propsConfig;
    // When new support actually makes call to real function, use these pre casted props
    propsConfig.castProps = castedProps;
    const lastPropsConfig = oldSupport.propsConfig;
    // update support to think it has different cloned props
    lastPropsConfig.latest = propsConfig.latest;
    return oldSupport; // its the same tag component  
}
/** Was tag, will be tag */
function swapTags(contextItem, templater, // new tag
ownerSupport) {
    const global = contextItem.global;
    const oldestSupport = global.oldest;
    (0,_destroySupport_function_js__WEBPACK_IMPORTED_MODULE_4__.destroySupport)(oldestSupport, global);
    (0,_tag_update_getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_5__.getNewGlobal)(contextItem);
    templater.processInit(templater, contextItem, ownerSupport, { added: 0, removed: 0 }, undefined, // appendTo,
    contextItem.placeholder);
}
//# sourceMappingURL=updateExistingTagComponent.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/render/update/updateSupportBy.function.js":
/*!*****************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/render/update/updateSupportBy.function.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateSupportBy: () => (/* binding */ updateSupportBy),
/* harmony export */   updateSupportValuesBy: () => (/* binding */ updateSupportValuesBy)
/* harmony export */ });
/* harmony import */ var _paint_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");
/* harmony import */ var _tag_processUpdateContext_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tag/processUpdateContext.function.js */ "../../taggedjs/main/dist/js/tag/processUpdateContext.function.js");


function updateSupportBy(olderSupport, newerSupport) {
    const global = olderSupport.subject.global;
    const context = global.context;
    updateSupportValuesBy(olderSupport, newerSupport);
    ++_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.painting.locks;
    (0,_tag_processUpdateContext_function_js__WEBPACK_IMPORTED_MODULE_1__.processUpdateContext)(olderSupport, context);
    --_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.painting.locks;
    (0,_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paint)();
}
function updateSupportValuesBy(olderSupport, newerSupport) {
    const newTemplate = newerSupport.templater;
    const tempTag = newerSupport.templater.tag;
    const values = newTemplate.values || tempTag.values;
    const tag = olderSupport.templater.tag;
    tag.values = values;
}
//# sourceMappingURL=updateSupportBy.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/callback.function.js":
/*!**************************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/callback.function.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callback: () => (/* binding */ callback),
/* harmony export */   createTrigger: () => (/* binding */ createTrigger)
/* harmony export */ });
/* harmony import */ var _callbackStateUpdate_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./callbackStateUpdate.function.js */ "../../taggedjs/main/dist/js/state/callbackStateUpdate.function.js");
/* harmony import */ var _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUseMemory.object.js */ "../../taggedjs/main/dist/js/state/setUseMemory.object.js");
/* harmony import */ var _callbackMaker_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callbackMaker.function.js */ "../../taggedjs/main/dist/js/state/callbackMaker.function.js");
/* harmony import */ var _tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag/getSupportInCycle.function.js */ "../../taggedjs/main/dist/js/tag/getSupportInCycle.function.js");




/** Wrap a function that will be called back. After the wrapper and function are called, a rendering cycle will update display */
function callback(callback) {
    const support = (0,_tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_3__.getSupportInCycle)();
    if (!support) {
        throw _callbackMaker_function_js__WEBPACK_IMPORTED_MODULE_2__.syncError;
    }
    return createTrigger(support, _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_1__.setUseMemory.stateConfig, // setUseMemory.stateConfig.stateArray
    callback);
}
function createTrigger(support, oldState, toCallback) {
    // const oldStates = [...oldState.states]
    const oldStates = oldState.states;
    return function trigger(...args) {
        const callbackMaker = support.subject.renderCount > 0;
        if (callbackMaker) {
            return (0,_callbackStateUpdate_function_js__WEBPACK_IMPORTED_MODULE_0__["default"])(support, oldStates, toCallback, ...args);
        }
        // we are in sync with rendering, just run callback naturally
        return toCallback(...args);
    };
}
//# sourceMappingURL=callback.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/callbackMaker.function.js":
/*!*******************************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/callbackMaker.function.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callbackMaker: () => (/* binding */ callbackMaker),
/* harmony export */   syncError: () => (/* binding */ syncError)
/* harmony export */ });
/* harmony import */ var _tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tag/getSupportInCycle.function.js */ "../../taggedjs/main/dist/js/tag/getSupportInCycle.function.js");
/* harmony import */ var _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUseMemory.object.js */ "../../taggedjs/main/dist/js/state/setUseMemory.object.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors.js */ "../../taggedjs/main/dist/js/errors.js");
/* harmony import */ var _callback_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./callback.function.js */ "../../taggedjs/main/dist/js/state/callback.function.js");




const callbackMaker = () => {
    const support = (0,_tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_0__.getSupportInCycle)();
    // callback as typeof innerCallback
    if (!support) {
        throw syncError;
    }
    const oldState = _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_1__.setUseMemory.stateConfig; // .stateArray
    return function triggerMaker(callback) {
        return (0,_callback_function_js__WEBPACK_IMPORTED_MODULE_3__.createTrigger)(support, oldState, callback);
    };
};
const syncError = new _errors_js__WEBPACK_IMPORTED_MODULE_2__.SyncCallbackError('callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering');
//# sourceMappingURL=callbackMaker.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/callbackStateUpdate.function.js":
/*!*************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/callbackStateUpdate.function.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ callbackStateUpdate)
/* harmony export */ });
/* harmony import */ var _render_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/renderSupport.function.js */ "../../taggedjs/main/dist/js/render/renderSupport.function.js");
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");


function callbackStateUpdate(support, oldStates, callback, ...args) {
    const global = support.subject.global;
    const newestSupport = global.newest;
    // NEWEST UPDATE OLDEST: ensure that the oldest has the latest values first
    //syncStatesArray(newestSupport.states, oldStates)
    // run the callback
    const maybePromise = callback(...args);
    // OLDEST UPDATE NEWEST: send the oldest state changes into the newest
    //syncStatesArray(oldStates, newestSupport.states)
    (0,_render_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_0__.renderSupport)(newestSupport);
    if ((0,_isInstance_js__WEBPACK_IMPORTED_MODULE_1__.isPromise)(maybePromise)) {
        maybePromise.finally(() => {
            // send the oldest state changes into the newest
            // syncStatesArray(oldStates, newestSupport.states)
            (0,_render_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_0__.renderSupport)(newestSupport);
        });
    }
    // return undefined as T
    return maybePromise;
}
//# sourceMappingURL=callbackStateUpdate.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/getStateValue.function.js":
/*!*******************************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/getStateValue.function.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStateValue: () => (/* binding */ getStateValue)
/* harmony export */ });
/* harmony import */ var _state_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.utils.js */ "../../taggedjs/main/dist/js/state/state.utils.js");

function getStateValue(state) {
    const callback = state.callback;
    if (!callback) {
        return state.defaultValue;
    }
    const [value] = (0,_state_utils_js__WEBPACK_IMPORTED_MODULE_0__.getCallbackValue)(callback);
    return value;
}
//# sourceMappingURL=getStateValue.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/handleProviderChanges.function.js":
/*!***************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/handleProviderChanges.function.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleProviderChanges: () => (/* binding */ handleProviderChanges)
/* harmony export */ });
function handleProviderChanges(appSupport, provider) {
    const tagsWithProvider = getTagsWithProvider(appSupport, provider);
    return tagsWithProvider;
}
/** Updates and returns memory of tag providers */
function getTagsWithProvider(support, provider, memory = []) {
    const subject = support.subject;
    memory.push({
        support,
        renderCount: subject.renderCount,
        provider,
    });
    const childTags = provider.children;
    for (let index = childTags.length - 1; index >= 0; --index) {
        const child = childTags[index];
        const cSubject = child.subject;
        memory.push({
            support: child,
            renderCount: cSubject.renderCount,
            provider,
        });
    }
    return memory;
}
//# sourceMappingURL=handleProviderChanges.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/index.js":
/*!**************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callback: () => (/* reexport safe */ _callback_function_js__WEBPACK_IMPORTED_MODULE_8__.callback),
/* harmony export */   callbackMaker: () => (/* reexport safe */ _callbackMaker_function_js__WEBPACK_IMPORTED_MODULE_7__.callbackMaker),
/* harmony export */   createTrigger: () => (/* reexport safe */ _callback_function_js__WEBPACK_IMPORTED_MODULE_8__.createTrigger),
/* harmony export */   letProp: () => (/* reexport safe */ _letProp_function_js__WEBPACK_IMPORTED_MODULE_4__.letProp),
/* harmony export */   onDestroy: () => (/* reexport safe */ _onDestroy_js__WEBPACK_IMPORTED_MODULE_10__.onDestroy),
/* harmony export */   onInit: () => (/* reexport safe */ _onInit_js__WEBPACK_IMPORTED_MODULE_9__.onInit),
/* harmony export */   providers: () => (/* reexport safe */ _providers_js__WEBPACK_IMPORTED_MODULE_6__.providers),
/* harmony export */   setUseMemory: () => (/* reexport safe */ _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_2__.setUseMemory),
/* harmony export */   state: () => (/* reexport safe */ _state_function_js__WEBPACK_IMPORTED_MODULE_11__.state),
/* harmony export */   states: () => (/* reexport safe */ _states_function_js__WEBPACK_IMPORTED_MODULE_12__.states),
/* harmony export */   subject: () => (/* reexport safe */ _subject_function_js__WEBPACK_IMPORTED_MODULE_3__.subject),
/* harmony export */   subscribe: () => (/* reexport safe */ _tagJsVars_subscribe_function_js__WEBPACK_IMPORTED_MODULE_13__.subscribe),
/* harmony export */   subscribeWith: () => (/* reexport safe */ _subscribeWith_function_js__WEBPACK_IMPORTED_MODULE_14__.subscribeWith),
/* harmony export */   syncError: () => (/* reexport safe */ _callbackMaker_function_js__WEBPACK_IMPORTED_MODULE_7__.syncError),
/* harmony export */   watch: () => (/* reexport safe */ _watch_function_js__WEBPACK_IMPORTED_MODULE_0__.watch)
/* harmony export */ });
/* harmony import */ var _watch_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watch.function.js */ "../../taggedjs/main/dist/js/state/watch.function.js");
/* harmony import */ var _setUse_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUse.function.js */ "../../taggedjs/main/dist/js/state/setUse.function.js");
/* harmony import */ var _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setUseMemory.object.js */ "../../taggedjs/main/dist/js/state/setUseMemory.object.js");
/* harmony import */ var _subject_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subject.function.js */ "../../taggedjs/main/dist/js/state/subject.function.js");
/* harmony import */ var _letProp_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./letProp.function.js */ "../../taggedjs/main/dist/js/state/letProp.function.js");
/* harmony import */ var _state_types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state.types.js */ "../../taggedjs/main/dist/js/state/state.types.js");
/* harmony import */ var _providers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers.js */ "../../taggedjs/main/dist/js/state/providers.js");
/* harmony import */ var _callbackMaker_function_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./callbackMaker.function.js */ "../../taggedjs/main/dist/js/state/callbackMaker.function.js");
/* harmony import */ var _callback_function_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./callback.function.js */ "../../taggedjs/main/dist/js/state/callback.function.js");
/* harmony import */ var _onInit_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./onInit.js */ "../../taggedjs/main/dist/js/state/onInit.js");
/* harmony import */ var _onDestroy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./onDestroy.js */ "../../taggedjs/main/dist/js/state/onDestroy.js");
/* harmony import */ var _state_function_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state.function.js */ "../../taggedjs/main/dist/js/state/state.function.js");
/* harmony import */ var _states_function_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./states.function.js */ "../../taggedjs/main/dist/js/state/states.function.js");
/* harmony import */ var _tagJsVars_subscribe_function_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tagJsVars/subscribe.function.js */ "../../taggedjs/main/dist/js/tagJsVars/subscribe.function.js");
/* harmony import */ var _subscribeWith_function_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./subscribeWith.function.js */ "../../taggedjs/main/dist/js/state/subscribeWith.function.js");















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/letProp.function.js":
/*!*************************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/letProp.function.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   letProp: () => (/* binding */ letProp)
/* harmony export */ });
/* harmony import */ var _subject_signal_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../subject/signal.function.js */ "../../taggedjs/main/dist/js/subject/signal.function.js");
/* harmony import */ var _states_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states.function.js */ "../../taggedjs/main/dist/js/state/states.function.js");
/* harmony import */ var _watch_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watch.function.js */ "../../taggedjs/main/dist/js/state/watch.function.js");



/**
 * Enables the ability to maintain a change to a props value until the prop itself changes
 * @param prop typically the name of an existing prop
 * @returns immediately call the returned function: letProp(y)(x => [y, y=x])
 */
function letProp(setter) {
    const propStates2 = (0,_subject_signal_function_js__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    const passes = (0,_subject_signal_function_js__WEBPACK_IMPORTED_MODULE_0__.signal)(0);
    const passedOn = (0,_subject_signal_function_js__WEBPACK_IMPORTED_MODULE_0__.signal)(0);
    let nowValues = [];
    let passed = 0;
    passedOn.value = passes.value;
    setter((...values) => {
        nowValues = values;
        return propStates2.value;
    });
    // When the watched variable changes, then the local prop variable has to update
    (0,_watch_function_js__WEBPACK_IMPORTED_MODULE_2__.watch)(nowValues, () => {
        ++passed; // first time values and changed values cause new state
        propStates2.value = nowValues;
        setter(() => nowValues);
    });
    // called and only used during sync'ing processes
    (0,_states_function_js__WEBPACK_IMPORTED_MODULE_1__.states)((_x, direction) => {
        // now its collection of variables time
        if (passed) {
            setter((...values) => {
                if (!direction || direction === 1) {
                    propStates2.value = values;
                }
                return propStates2.value;
            });
            passedOn.value = passes.value;
            ++passes.value;
            return;
        }
        // this in an insync call, we do not care about the values here
        setter(() => {
            return propStates2.value;
        });
    });
    ++passed;
    return propStates2.value;
}
//# sourceMappingURL=letProp.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/onDestroy.js":
/*!******************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/onDestroy.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onDestroy: () => (/* binding */ onDestroy)
/* harmony export */ });
/* harmony import */ var _tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tag/getSupportInCycle.function.js */ "../../taggedjs/main/dist/js/tag/getSupportInCycle.function.js");
/* harmony import */ var _state_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.function.js */ "../../taggedjs/main/dist/js/state/state.function.js");


function onDestroy(callback) {
    (0,_state_function_js__WEBPACK_IMPORTED_MODULE_1__.state)(function stateDestroy() {
        const support = (0,_tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_0__.getSupportInCycle)();
        const global = support.subject.global;
        global.destroy$.toCallback(callback);
    });
}
//# sourceMappingURL=onDestroy.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/onInit.js":
/*!***************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/onInit.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onInit: () => (/* binding */ onInit)
/* harmony export */ });
/* harmony import */ var _state_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.function.js */ "../../taggedjs/main/dist/js/state/state.function.js");

/** runs a callback function one time and never again. Same as calling state(() => ...) */
function onInit(callback) {
    (0,_state_function_js__WEBPACK_IMPORTED_MODULE_0__.state)(callback);
}
//# sourceMappingURL=onInit.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/providers.js":
/*!******************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/providers.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   providers: () => (/* binding */ providers)
/* harmony export */ });
/* harmony import */ var _tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tag/getSupportInCycle.function.js */ "../../taggedjs/main/dist/js/tag/getSupportInCycle.function.js");
/* harmony import */ var _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUseMemory.object.js */ "../../taggedjs/main/dist/js/state/setUseMemory.object.js");
/* harmony import */ var _state_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.function.js */ "../../taggedjs/main/dist/js/state/state.function.js");



function getBlankDiffMemory() {
    return { stateDiff: 0, provider: undefined };
}
const providers = {
    create: (constructMethod) => {
        const stateDiffMemory = (0,_state_function_js__WEBPACK_IMPORTED_MODULE_2__.state)(getBlankDiffMemory);
        // mimic how many states were called the first time
        if (stateDiffMemory.stateDiff) {
            let x = stateDiffMemory.stateDiff;
            while (x--) {
                (0,_state_function_js__WEBPACK_IMPORTED_MODULE_2__.state)(undefined);
            }
            const result = (0,_state_function_js__WEBPACK_IMPORTED_MODULE_2__.state)(undefined);
            return result;
        }
        const result = (0,_state_function_js__WEBPACK_IMPORTED_MODULE_2__.state)(() => {
            const stateConfig = _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_1__.setUseMemory.stateConfig;
            const oldStateCount = stateConfig.stateArray.length;
            // Providers with provider requirements just need to use providers.create() and providers.inject()
            const instance = constructMethod.prototype ? new constructMethod() : constructMethod();
            const support = stateConfig.support;
            const stateDiff = stateConfig.stateArray.length - oldStateCount;
            const provider = {
                constructMethod,
                instance,
                stateDiff,
                owner: support,
                children: [],
            };
            stateDiffMemory.provider = provider;
            const global = support.subject.global;
            const providers = global.providers = global.providers || [];
            providers.push(provider);
            stateDiffMemory.stateDiff = stateDiff;
            return instance;
        });
        const cm = constructMethod;
        const compareTo = cm.compareTo = cm.toString();
        stateDiffMemory.provider.constructMethod.compareTo = compareTo;
        return result;
    },
    /**
     * @template T
     * @param {(new (...args: any[]) => T) | () => T} constructor
     * @returns {T}
     */
    inject: providerInject
};
function providerInject(constructor) {
    // find once, return same every time after
    return (0,_state_function_js__WEBPACK_IMPORTED_MODULE_2__.state)(function providerInjectState() {
        // const memory = setUse.memory
        const cm = constructor;
        const compareTo = cm.compareTo = cm.compareTo || constructor.toString();
        const support = (0,_tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_0__.getSupportInCycle)(); // memory.stateConfig.support as AnySupport
        const providers = [];
        let owner = {
            ownerSupport: support.ownerSupport
        };
        while (owner.ownerSupport) {
            const ownGlobal = owner.ownerSupport.subject.global;
            const ownerProviders = ownGlobal.providers;
            if (!ownerProviders) {
                owner = owner.ownerSupport; // cause reloop checking next parent
                continue;
            }
            const provider = ownerProviders.find(provider => {
                providers.push(provider);
                const constructorMatch = provider.constructMethod.compareTo === compareTo;
                if (constructorMatch) {
                    return true;
                }
            });
            if (provider) {
                const global = support.subject.global;
                const providers = global.providers = global.providers || [];
                providers.push(provider);
                provider.children.push(support);
                return provider.instance;
            }
            owner = owner.ownerSupport; // cause reloop checking next parent
        }
        const msg = `Could not inject provider: ${constructor.name} ${constructor}`;
        console.warn(`${msg}. Available providers`, providers);
        throw new Error(msg);
    });
}
//# sourceMappingURL=providers.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/providersChangeCheck.function.js":
/*!**************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/providersChangeCheck.function.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   providersChangeCheck: () => (/* binding */ providersChangeCheck)
/* harmony export */ });
/* harmony import */ var _handleProviderChanges_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleProviderChanges.function.js */ "../../taggedjs/main/dist/js/state/handleProviderChanges.function.js");

function providersChangeCheck(support) {
    const global = support.subject.global;
    const providers = global.providers;
    if (!providers) {
        return [];
    }
    const prosWithChanges = [];
    // reset clones
    for (const provider of providers) {
        const owner = provider.owner;
        const hasChange = (0,_handleProviderChanges_function_js__WEBPACK_IMPORTED_MODULE_0__.handleProviderChanges)(owner, provider);
        prosWithChanges.push(...hasChange.map(mapToSupport));
    }
    return prosWithChanges;
}
function mapToSupport(x) {
    return x.support;
}
//# sourceMappingURL=providersChangeCheck.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/setUse.function.js":
/*!************************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/setUse.function.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=setUse.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/setUseMemory.object.js":
/*!****************************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/setUseMemory.object.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setUseMemory: () => (/* binding */ setUseMemory)
/* harmony export */ });
/* harmony import */ var _states_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./states.utils.js */ "../../taggedjs/main/dist/js/state/states.utils.js");
/* harmony import */ var _stateHandlers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateHandlers.js */ "../../taggedjs/main/dist/js/state/stateHandlers.js");
/* harmony import */ var _tagClosed$_subject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tagClosed$.subject.js */ "../../taggedjs/main/dist/js/state/tagClosed$.subject.js");



const setUseMemory = {
    stateConfig: {
        stateArray: [], // state memory on the first render
        version: Date.now(),
        handlers: {
            handler: _stateHandlers_js__WEBPACK_IMPORTED_MODULE_1__.runFirstState,
            statesHandler: _states_utils_js__WEBPACK_IMPORTED_MODULE_0__.firstStatesHandler,
        }
    },
    tagClosed$: _tagClosed$_subject_js__WEBPACK_IMPORTED_MODULE_2__.tagClosed$,
};
//# sourceMappingURL=setUseMemory.object.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/state.function.js":
/*!***********************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/state.function.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setUseMemory.object.js */ "../../taggedjs/main/dist/js/state/setUseMemory.object.js");

/** Used for variables that need to remain the same variable during render passes */
function state(defaultValue) {
    return _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_0__.setUseMemory.stateConfig.handlers.handler(defaultValue);
}
//# sourceMappingURL=state.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/state.types.js":
/*!********************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/state.types.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=state.types.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/state.utils.js":
/*!********************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/state.utils.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateEchoBack: () => (/* binding */ StateEchoBack),
/* harmony export */   getCallbackValue: () => (/* binding */ getCallbackValue),
/* harmony export */   initState: () => (/* binding */ initState),
/* harmony export */   reState: () => (/* binding */ reState)
/* harmony export */ });
/* harmony import */ var _stateHandlers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateHandlers.js */ "../../taggedjs/main/dist/js/state/stateHandlers.js");
/* harmony import */ var _states_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states.utils.js */ "../../taggedjs/main/dist/js/state/states.utils.js");


function initState(support, config) {
    config.handlers.handler = _stateHandlers_js__WEBPACK_IMPORTED_MODULE_0__.runFirstState;
    config.handlers.statesHandler = _states_utils_js__WEBPACK_IMPORTED_MODULE_1__.firstStatesHandler;
    config.rearray = [];
    config.stateArray = [];
    config.states = [];
    config.statesIndex = 0;
    config.support = support;
}
function reState(newSupport, prevSupport, config, prevState) {
    // set previous state memory
    config.rearray = prevState;
    config.stateArray = [];
    config.states = [];
    config.statesIndex = 0;
    config.handlers.handler = _stateHandlers_js__WEBPACK_IMPORTED_MODULE_0__.runRestate;
    config.handlers.statesHandler = _states_utils_js__WEBPACK_IMPORTED_MODULE_1__.reStatesHandler;
    config.prevSupport = prevSupport;
}
class StateEchoBack {
}
/** sends a fake value and then sets back to received value */
function getCallbackValue(callback) {
    const [value] = callback(StateEchoBack); // get value and set to undefined
    const [checkValue] = callback(value); // set back to original value
    return [value, checkValue];
}
//# sourceMappingURL=state.utils.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/stateHandlers.js":
/*!**********************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/stateHandlers.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runFirstState: () => (/* binding */ runFirstState),
/* harmony export */   runRestate: () => (/* binding */ runRestate)
/* harmony export */ });
/* harmony import */ var _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setUseMemory.object.js */ "../../taggedjs/main/dist/js/state/setUseMemory.object.js");
/* harmony import */ var _getStateValue_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getStateValue.function.js */ "../../taggedjs/main/dist/js/state/getStateValue.function.js");
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");



function runRestate() {
    const config = _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_0__.setUseMemory.stateConfig;
    const rearray = config.rearray;
    const restate = rearray[config.stateArray.length];
    config.stateArray.push(restate);
    return restate.defaultValue;
}
function runFirstState(defaultValue) {
    const config = _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_0__.setUseMemory.stateConfig;
    // State first time run
    let initValue = defaultValue;
    if (typeof (defaultValue) === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__.BasicTypes.function) {
        initValue = defaultValue();
    }
    // the state is actually intended to be a function
    if (typeof (initValue) === _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__.BasicTypes.function) {
        const original = initValue;
        initValue = function initValueFun(...args) {
            const result = original(...args);
            return result;
        };
        initValue.original = original;
    }
    const push = {
        get: function pushState() {
            return (0,_getStateValue_function_js__WEBPACK_IMPORTED_MODULE_1__.getStateValue)(push);
        },
        defaultValue: initValue,
    };
    config.stateArray.push(push);
    return initValue;
}
//# sourceMappingURL=stateHandlers.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/states.function.js":
/*!************************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/states.function.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   states: () => (/* binding */ states)
/* harmony export */ });
/* harmony import */ var _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setUseMemory.object.js */ "../../taggedjs/main/dist/js/state/setUseMemory.object.js");

/** Used for variables that need to remain the same variable during render passes. If defaultValue is a function it is called only once, its return value is first state, and let value can changed */
function states(setter) {
    const config = _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_0__.setUseMemory.stateConfig;
    return config.handlers.statesHandler(setter);
}
//# sourceMappingURL=states.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/states.utils.js":
/*!*********************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/states.utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstStatesHandler: () => (/* binding */ firstStatesHandler),
/* harmony export */   reStatesHandler: () => (/* binding */ reStatesHandler)
/* harmony export */ });
/* harmony import */ var _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setUseMemory.object.js */ "../../taggedjs/main/dist/js/state/setUseMemory.object.js");
/* harmony import */ var _interpolations_attributes_getSupportWithState_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interpolations/attributes/getSupportWithState.function.js */ "../../taggedjs/main/dist/js/interpolations/attributes/getSupportWithState.function.js");


function returnArgs(...args) {
    return args;
}
function firstStatesHandler(setter) {
    const config = _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_0__.setUseMemory.stateConfig;
    config.states[config.statesIndex] = setter;
    ++config.statesIndex;
    return setter(returnArgs);
}
/** aka statesHandler */
function reStatesHandler(setter) {
    const config = _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_0__.setUseMemory.stateConfig;
    const statesIndex = config.statesIndex;
    const prevSupport = (0,_interpolations_attributes_getSupportWithState_function_js__WEBPACK_IMPORTED_MODULE_1__.getSupportWithState)(config.prevSupport);
    const prevStates = prevSupport.states;
    // const prevStates = config.states
    const oldStates = prevStates[statesIndex];
    let lastValues = [];
    oldStates(function regetter(...args) {
        lastValues = args;
        return args;
    });
    const resetter = function stateResetter(..._args) {
        return lastValues;
    };
    config.states[config.statesIndex] = setter;
    ++config.statesIndex;
    return setter(resetter);
}
//# sourceMappingURL=states.utils.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/subject.function.js":
/*!*************************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/subject.function.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subject: () => (/* binding */ subject)
/* harmony export */ });
/* harmony import */ var _subject_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../subject/index.js */ "../../taggedjs/main/dist/js/subject/index.js");
/* harmony import */ var _tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag/getSupportInCycle.function.js */ "../../taggedjs/main/dist/js/tag/getSupportInCycle.function.js");
/* harmony import */ var _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setUseMemory.object.js */ "../../taggedjs/main/dist/js/state/setUseMemory.object.js");
/* harmony import */ var _state_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.function.js */ "../../taggedjs/main/dist/js/state/state.function.js");
/* harmony import */ var _syncStates_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./syncStates.function.js */ "../../taggedjs/main/dist/js/state/syncStates.function.js");





/** Create a Subject that on updates will sync state values to keep chained functions using latest variables */
function subject(initialValue) {
    const support = (0,_tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_1__.getSupportInCycle)();
    if (support) {
        return (0,_state_function_js__WEBPACK_IMPORTED_MODULE_3__.state)(() => new _subject_index_js__WEBPACK_IMPORTED_MODULE_0__.Subject(initialValue));
    }
    return new _subject_index_js__WEBPACK_IMPORTED_MODULE_0__.Subject(initialValue);
}
subject._value = (value) => {
    const oldestState = (0,_state_function_js__WEBPACK_IMPORTED_MODULE_3__.state)(function subjectValue() {
        return {
            stateArray: _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_2__.setUseMemory.stateConfig.stateArray,
            states: _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_2__.setUseMemory.stateConfig.states,
        };
    });
    const nowSupport = (0,_tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_1__.getSupportInCycle)();
    return (0,_state_function_js__WEBPACK_IMPORTED_MODULE_3__.state)(function subjectValue() {
        const subject = new _subject_index_js__WEBPACK_IMPORTED_MODULE_0__.ValueSubject(value).pipe(x => {
            (0,_syncStates_function_js__WEBPACK_IMPORTED_MODULE_4__.oldSyncStates)(nowSupport.state, oldestState.stateArray, nowSupport.states, oldestState.states);
            return x;
        });
        return subject;
    });
};
function all(args) {
    const oldestState = (0,_state_function_js__WEBPACK_IMPORTED_MODULE_3__.state)(() => ({
        stateArray: _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_2__.setUseMemory.stateConfig.stateArray,
        states: _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_2__.setUseMemory.stateConfig.states,
    }));
    const nowSupport = (0,_tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_1__.getSupportInCycle)();
    return _subject_index_js__WEBPACK_IMPORTED_MODULE_0__.Subject.all(args).pipe(x => {
        (0,_syncStates_function_js__WEBPACK_IMPORTED_MODULE_4__.oldSyncStates)(nowSupport.state, oldestState.stateArray, nowSupport.states, oldestState.states);
        return x;
    });
}
subject.all = all;
//# sourceMappingURL=subject.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/subscribeWith.function.js":
/*!*******************************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/subscribeWith.function.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subscribeWith: () => (/* binding */ subscribeWith)
/* harmony export */ });
/* harmony import */ var _interpolations_attributes_getSupportWithState_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interpolations/attributes/getSupportWithState.function.js */ "../../taggedjs/main/dist/js/interpolations/attributes/getSupportWithState.function.js");
/* harmony import */ var _tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag/getSupportInCycle.function.js */ "../../taggedjs/main/dist/js/tag/getSupportInCycle.function.js");
/* harmony import */ var _tag_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag/index.js */ "../../taggedjs/main/dist/js/tag/index.js");
/* harmony import */ var _tag_update_processSubscribe_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag/update/processSubscribe.function.js */ "../../taggedjs/main/dist/js/tag/update/processSubscribe.function.js");
/* harmony import */ var _tag_update_setupSubscribe_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tag/update/setupSubscribe.function.js */ "../../taggedjs/main/dist/js/tag/update/setupSubscribe.function.js");





/** Have an html tagged value as value of subscribe emissions, with initial default value emission. Automatically unsubscribes for you */
function subscribeWith(Observable, withDefault, callback) {
    return {
        tagJsType: _tag_index_js__WEBPACK_IMPORTED_MODULE_2__.ValueTypes.subscribe,
        processInit: _tag_update_processSubscribe_function_js__WEBPACK_IMPORTED_MODULE_3__.processSubscribeWith,
        delete: _tag_update_setupSubscribe_function_js__WEBPACK_IMPORTED_MODULE_4__.deleteAndUnsubscribe,
        checkValueChange: function subscribeDoNothing() {
            return -1;
        },
        Observable,
        callback,
        withDefault,
        states: (0,_interpolations_attributes_getSupportWithState_function_js__WEBPACK_IMPORTED_MODULE_0__.getSupportWithState)((0,_tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_1__.getSupportInCycle)()).states,
    };
}
//# sourceMappingURL=subscribeWith.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/syncStates.function.js":
/*!****************************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/syncStates.function.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oldSyncStates: () => (/* binding */ oldSyncStates),
/* harmony export */   syncStates: () => (/* binding */ syncStates),
/* harmony export */   syncStatesArray: () => (/* binding */ syncStatesArray),
/* harmony export */   syncSupports: () => (/* binding */ syncSupports)
/* harmony export */ });
/**
 * Sync two supports
 * @param support FROM
 * @param newestSupport  ONTO
 * @returns
 */
function syncSupports(support, // from
newestSupport) {
    return syncStatesArray(support.states, newestSupport.states);
}
function syncStatesArray(from, onto) {
    for (let index = 0; index < from.length; ++index) {
        const getter = from[index];
        const setter = onto[index];
        syncStates(getter, setter);
    }
}
let got;
function syncFromState(...x) {
    got = x;
    return x;
}
function syncOntoState() {
    return got;
}
function syncStates(from, onto) {
    from(syncFromState, 1);
    onto(syncOntoState, 2);
}
/** @deprecated favor using syncSupports */
function oldSyncStates(stateFrom, stateTo, intoStates, statesFrom) {
    for (let index = stateFrom.length - 1; index >= 0; --index) {
        const stateFromTarget = stateFrom[index];
        const fromValue = stateFromTarget.get(); // get without setting
        // const fromValue = getStateValue(stateFromTarget) // get without setting
        const stateToTarget = stateTo[index];
        const callback = stateToTarget.callback; // is it a let state?
        if (!callback) {
            continue;
        }
        callback(fromValue); // set the value
    }
    // loop statesFrom to set on the oldStates
    for (let index = statesFrom.length - 1; index >= 0; --index) {
        oldValues.length = 0;
        getIndex = 0;
        const stateFromTarget = statesFrom[index];
        // trigger getting all old values
        stateFromTarget(oldGetCallback);
        // trigger setting updated values
        intoStates[index](newSetCallback);
    }
}
let getIndex = 0;
const oldValues = [];
function oldGetCallback(...args) {
    oldValues.push(args);
    return args;
}
// This is the "get" argument that will be called and all arguments are ignored
function newSetCallback(..._) {
    return oldValues[getIndex++];
}
//# sourceMappingURL=syncStates.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/tagClosed$.subject.js":
/*!***************************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/tagClosed$.subject.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tagClosed$: () => (/* binding */ tagClosed$)
/* harmony export */ });
/* harmony import */ var _tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tag/getSupportInCycle.function.js */ "../../taggedjs/main/dist/js/tag/getSupportInCycle.function.js");
/* harmony import */ var _subject_Subject_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subject/Subject.class.js */ "../../taggedjs/main/dist/js/subject/Subject.class.js");


/** Emits event at the end of a tag being rendered. Use tagClosed$.toPromise() to render a tag after a current tag is done rendering  */
const tagClosed$ = new _subject_Subject_class_js__WEBPACK_IMPORTED_MODULE_1__.Subject(undefined, function tagCloser(subscription) {
    if (!(0,_tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_0__.getSupportInCycle)()) {
        subscription.next(); // we are not currently processing so process now
    }
});
//# sourceMappingURL=tagClosed$.subject.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/state/watch.function.js":
/*!***********************************************************!*\
  !*** ../../taggedjs/main/dist/js/state/watch.function.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   watch: () => (/* binding */ watch)
/* harmony export */ });
/* harmony import */ var _subject_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../subject/index.js */ "../../taggedjs/main/dist/js/subject/index.js");
/* harmony import */ var _tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag/getSupportInCycle.function.js */ "../../taggedjs/main/dist/js/tag/getSupportInCycle.function.js");
/* harmony import */ var _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setUseMemory.object.js */ "../../taggedjs/main/dist/js/state/setUseMemory.object.js");
/* harmony import */ var _state_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.function.js */ "../../taggedjs/main/dist/js/state/state.function.js");
/* harmony import */ var _syncStates_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./syncStates.function.js */ "../../taggedjs/main/dist/js/state/syncStates.function.js");





/**
 * When an item in watch array changes, callback function will be triggered.
 * Triggers on initial watch setup. TIP: try watch.noInit()
 * @param currentValues T[]
 * @param callback WatchCallback
 * @returns T[]
 */
const watch = ((currentValues, callback) => {
    return setupWatch(currentValues, callback);
});
const defaultFinally = (x) => x;
function newWatch(setup) {
    const method = (currentValues, callback) => {
        return setupWatch(currentValues, callback, setup);
    };
    method.setup = setup;
    defineOnMethod(() => method, method);
    return method;
}
/**
 * puts above functionality together
 * @param currentValues values being watched
 * @param callback (currentValue, previousValues) => resolveToValue
 * @param param2
 * @returns
 */
const setupWatch = (currentValues, callback, { init, before, final = defaultFinally, } = {}) => {
    const previous = (0,_state_function_js__WEBPACK_IMPORTED_MODULE_3__.state)({
        pastResult: undefined,
        values: undefined,
    });
    const previousValues = previous.values;
    // First time running watch?
    if (previousValues === undefined) {
        if (before && !before(currentValues)) {
            previous.values = currentValues;
            return previous.pastResult; // do not continue
        }
        const castedInit = init || callback;
        const result = castedInit(currentValues, previousValues);
        previous.pastResult = final(result);
        previous.values = currentValues;
        return previous.pastResult;
    }
    const allExact = currentValues.every((item, index) => item === previousValues[index]);
    if (allExact) {
        return previous.pastResult;
    }
    if (before && !before(currentValues)) {
        previous.values = currentValues;
        return previous.pastResult; // do not continue
    }
    const result = callback(currentValues, previousValues);
    previous.pastResult = final(result);
    previousValues.length = 0;
    previousValues.push(...currentValues);
    return previous.pastResult;
};
function defineOnMethod(getWatch, attachTo) {
    Object.defineProperty(attachTo, 'noInit', {
        get() {
            const watch = getWatch();
            watch.setup.init = () => undefined;
            return watch;
        },
    });
    Object.defineProperty(attachTo, 'asSubject', {
        get() {
            const oldWatch = getWatch();
            const firstSupport = (0,_state_function_js__WEBPACK_IMPORTED_MODULE_3__.state)(() => (0,_tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_1__.getSupportInCycle)());
            const subject = (0,_state_function_js__WEBPACK_IMPORTED_MODULE_3__.state)(() => new _subject_index_js__WEBPACK_IMPORTED_MODULE_0__.ValueSubject(undefined));
            const oldState = (0,_state_function_js__WEBPACK_IMPORTED_MODULE_3__.state)(() => ({
                stateArray: _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_2__.setUseMemory.stateConfig.stateArray,
                states: _setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_2__.setUseMemory.stateConfig.states,
            }));
            const method = (currentValues, callback) => {
                setupWatch(currentValues, (currentValues, previousValues) => {
                    const nowSupport = (0,_tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_1__.getSupportInCycle)();
                    const setTo = callback(currentValues, previousValues);
                    if (nowSupport !== firstSupport) {
                        const newestState = oldState.stateArray;
                        const global = firstSupport.subject.global;
                        const oldest = global.oldest;
                        const oldestState = oldest.state;
                        const newStates = oldState.states;
                        const oldStates = oldest.states;
                        (0,_syncStates_function_js__WEBPACK_IMPORTED_MODULE_4__.oldSyncStates)(newestState, oldestState, newStates, oldStates);
                    }
                    subject.next(setTo);
                }, oldWatch.setup);
                return subject;
            };
            method.setup = oldWatch.setup;
            defineOnMethod(() => method, method);
            return method;
        },
    });
    Object.defineProperty(attachTo, 'truthy', {
        get() {
            const watch = getWatch();
            watch.setup.before = (currentValues) => currentValues.every(x => x);
            return watch;
        },
    });
    return attachTo;
}
defineOnMethod(() => newWatch({}), watch);
//# sourceMappingURL=watch.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/subject/Subject.class.js":
/*!************************************************************!*\
  !*** ../../taggedjs/main/dist/js/subject/Subject.class.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Subject: () => (/* binding */ Subject),
/* harmony export */   Subjective: () => (/* binding */ Subjective),
/* harmony export */   defineValueOn: () => (/* binding */ defineValueOn)
/* harmony export */ });
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");
/* harmony import */ var _combineLatest_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combineLatest.function.js */ "../../taggedjs/main/dist/js/subject/combineLatest.function.js");
/* harmony import */ var _subject_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subject.utils.js */ "../../taggedjs/main/dist/js/subject/subject.utils.js");



class Subject {
    value;
    onSubscription;
    // private?
    methods = [];
    isSubject = true;
    // private?
    subscribers = [];
    subscribeWith;
    constructor(value, 
    // private? - only used by extending classes
    onSubscription) {
        this.value = value;
        this.onSubscription = onSubscription;
        // defineValueOn(this)
    }
    subscribe(callback) {
        const subscription = (0,_subject_utils_js__WEBPACK_IMPORTED_MODULE_2__.getSubscription)(this, callback, this.subscribers);
        // are we within a pipe?
        const subscribeWith = this.subscribeWith;
        if (subscribeWith) {
            // are we in a pipe?
            if (this.methods.length) {
                const orgCallback = callback;
                callback = (value) => {
                    (0,_subject_utils_js__WEBPACK_IMPORTED_MODULE_2__.runPipedMethods)(value, this.methods, lastValue => orgCallback(lastValue, subscription));
                };
            }
            return subscribeWith(callback);
        }
        this.subscribers.push(subscription);
        if (this.onSubscription) {
            this.onSubscription(subscription);
        }
        return subscription;
    }
    next(value) {
        this.value = value;
        this.emit();
    }
    set = this.next.bind(this);
    emit() {
        const value = this.value;
        // Notify all subscribers with the new value
        // const subs = [...this.subscribers] // subs may change as we call callbacks
        const subs = this.subscribers; // subs may change as we call callbacks
        // const length = subs.length
        for (const sub of subs) {
            sub.callback(value, sub);
        }
    }
    toPromise() {
        return new Promise(res => {
            this.subscribe((x, subscription) => {
                subscription.unsubscribe();
                res(x);
            });
        });
    }
    /** like toPromise but faster. Only get called once. No subscription to manage */
    toCallback(callback) {
        const subscription = this.subscribe((x, runtimeSub) => {
            const tagJsUnsub = runtimeSub?.unsubscribe;
            if (tagJsUnsub) {
                tagJsUnsub(); // its from taggedjs
            }
            else {
                setTimeout(() => subscription.unsubscribe(), 0);
            }
            callback(x);
        });
        return this;
    }
    pipe(...operations) {
        const subject = new Subject(this.value);
        subject.setMethods(operations);
        subject.subscribeWith = (x) => this.subscribe(x);
        subject.next = x => this.next(x);
        return subject;
    }
    setMethods(operations) {
        this.methods = operations;
    }
    static all(args) {
        const switched = args.map(arg => {
            if ((0,_isInstance_js__WEBPACK_IMPORTED_MODULE_0__.isSubjectInstance)(arg))
                return arg;
            // Call the callback immediately with the current value
            const x = new Subject(arg, subscription => {
                subscription.next(arg);
                return subscription;
            });
            return x;
        });
        return (0,_combineLatest_function_js__WEBPACK_IMPORTED_MODULE_1__.combineLatest)(switched);
    }
    static globalSubCount$ = new Subject(0); // for ease of debugging}
}
class Subjective extends Subject {
    value;
    onSubscription;
    _value;
    constructor(value, 
    // private?
    onSubscription) {
        super(value, onSubscription);
        this.value = value;
        this.onSubscription = onSubscription;
        this._value = value;
        defineValueOn(this);
    }
    next(value) {
        this._value = value;
        this.emit();
    }
    emit() {
        const value = this._value;
        // Notify all subscribers with the new value
        // const subs = [...this.subscribers] // subs may change as we call callbacks
        const subs = this.subscribers; // subs may change as we call callbacks
        // const length = subs.length
        for (const sub of subs) {
            sub.callback(value, sub);
        }
    }
}
function defineValueOn(subject) {
    Object.defineProperty(subject, 'value', {
        // supports subject.value = x
        set(value) {
            subject._value = value;
            subject.emit();
        },
        // supports subject.value
        get() {
            return subject._value;
        }
    });
}
//# sourceMappingURL=Subject.class.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/subject/ValueSubject.js":
/*!***********************************************************!*\
  !*** ../../taggedjs/main/dist/js/subject/ValueSubject.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValueSubject: () => (/* binding */ ValueSubject),
/* harmony export */   ValueSubjective: () => (/* binding */ ValueSubjective)
/* harmony export */ });
/* harmony import */ var _Subject_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject.class.js */ "../../taggedjs/main/dist/js/subject/Subject.class.js");

class ValueSubject extends _Subject_class_js__WEBPACK_IMPORTED_MODULE_0__.Subject {
    value;
    constructor(value) {
        super(value);
        this.value = value;
    }
    subscribe(callback) {
        const subscription = super.subscribe(callback);
        // Call the callback immediately with the current value
        callback(this.value, subscription);
        return subscription;
    }
}
class ValueSubjective extends _Subject_class_js__WEBPACK_IMPORTED_MODULE_0__.Subject {
    value;
    constructor(value) {
        super(value);
        this.value = value;
        this._value = value;
        (0,_Subject_class_js__WEBPACK_IMPORTED_MODULE_0__.defineValueOn)(this); // if you extend this AND have a constructor, you must call this in your extension
    }
    subscribe(callback) {
        const subscription = super.subscribe(callback);
        // Call the callback immediately with the current value
        callback(this._value, subscription);
        return subscription;
    }
}
//# sourceMappingURL=ValueSubject.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/subject/combineLatest.function.js":
/*!*********************************************************************!*\
  !*** ../../taggedjs/main/dist/js/subject/combineLatest.function.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combineLatest: () => (/* binding */ combineLatest)
/* harmony export */ });
/* harmony import */ var _Subject_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject.class.js */ "../../taggedjs/main/dist/js/subject/Subject.class.js");

function combineLatest(subjects) {
    const output = new _Subject_class_js__WEBPACK_IMPORTED_MODULE_0__.Subject();
    const subscribe = (callback) => {
        const valuesSeen = [];
        const values = [];
        const setValue = (x, index) => {
            valuesSeen[index] = true;
            values[index] = x;
            const countMatched = valuesSeen.length === subjects.length;
            if (!countMatched) {
                return;
            }
            for (const item of valuesSeen) {
                if (!item) {
                    return;
                }
            }
            // everyone has reported values
            callback(values, subscription);
        };
        const clones = [...subjects];
        const firstSub = clones.shift();
        const subscription = firstSub.subscribe(x => setValue(x, 0));
        const subscriptions = clones.map((subject, index) => {
            return subject.subscribe(x => setValue(x, index + 1));
        });
        subscription.subscriptions = subscriptions;
        return subscription;
    };
    output.subscribeWith = subscribe;
    return output;
}
//# sourceMappingURL=combineLatest.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/subject/index.js":
/*!****************************************************!*\
  !*** ../../taggedjs/main/dist/js/subject/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Subject: () => (/* reexport safe */ _Subject_class_js__WEBPACK_IMPORTED_MODULE_1__.Subject),
/* harmony export */   Subjective: () => (/* reexport safe */ _Subject_class_js__WEBPACK_IMPORTED_MODULE_1__.Subjective),
/* harmony export */   ValueSubject: () => (/* reexport safe */ _ValueSubject_js__WEBPACK_IMPORTED_MODULE_2__.ValueSubject),
/* harmony export */   ValueSubjective: () => (/* reexport safe */ _ValueSubject_js__WEBPACK_IMPORTED_MODULE_2__.ValueSubjective),
/* harmony export */   combineLatest: () => (/* reexport safe */ _combineLatest_function_js__WEBPACK_IMPORTED_MODULE_3__.combineLatest),
/* harmony export */   defineValueOn: () => (/* reexport safe */ _Subject_class_js__WEBPACK_IMPORTED_MODULE_1__.defineValueOn),
/* harmony export */   signal: () => (/* reexport safe */ _signal_function_js__WEBPACK_IMPORTED_MODULE_0__.signal),
/* harmony export */   willCallback: () => (/* reexport safe */ _will_functions_js__WEBPACK_IMPORTED_MODULE_4__.willCallback),
/* harmony export */   willPromise: () => (/* reexport safe */ _will_functions_js__WEBPACK_IMPORTED_MODULE_4__.willPromise),
/* harmony export */   willSubscribe: () => (/* reexport safe */ _will_functions_js__WEBPACK_IMPORTED_MODULE_4__.willSubscribe)
/* harmony export */ });
/* harmony import */ var _signal_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signal.function.js */ "../../taggedjs/main/dist/js/subject/signal.function.js");
/* harmony import */ var _Subject_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subject.class.js */ "../../taggedjs/main/dist/js/subject/Subject.class.js");
/* harmony import */ var _ValueSubject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ValueSubject.js */ "../../taggedjs/main/dist/js/subject/ValueSubject.js");
/* harmony import */ var _combineLatest_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./combineLatest.function.js */ "../../taggedjs/main/dist/js/subject/combineLatest.function.js");
/* harmony import */ var _will_functions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./will.functions.js */ "../../taggedjs/main/dist/js/subject/will.functions.js");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/subject/signal.function.js":
/*!**************************************************************!*\
  !*** ../../taggedjs/main/dist/js/subject/signal.function.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Signal: () => (/* binding */ Signal),
/* harmony export */   signal: () => (/* binding */ signal)
/* harmony export */ });
/* harmony import */ var _state_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/index.js */ "../../taggedjs/main/dist/js/state/index.js");
/* harmony import */ var _tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag/getSupportInCycle.function.js */ "../../taggedjs/main/dist/js/tag/getSupportInCycle.function.js");
/* harmony import */ var _tag_update_processSubscribe_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag/update/processSubscribe.function.js */ "../../taggedjs/main/dist/js/tag/update/processSubscribe.function.js");
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");




/** Checks if rendering cycle in process. Then creates object with "value" key and ability to "subscribe" to value changes */
function signal(initialValue) {
    const support = (0,_tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_1__.getSupportInCycle)();
    if (support) {
        return (0,_state_index_js__WEBPACK_IMPORTED_MODULE_0__.state)(() => Signal(initialValue));
    }
    return Signal(initialValue);
}
/** Creates object with "value" key and ability to "subscribe" to value changes */
function Signal(initialValue) {
    let value = initialValue;
    const subscribers = new Set();
    return {
        tagJsType: _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_3__.ValueTypes.signal,
        processInit: _tag_update_processSubscribe_function_js__WEBPACK_IMPORTED_MODULE_2__.processSignal,
        get value() {
            return value;
        },
        set value(newValue) {
            if (value !== newValue) {
                value = newValue;
                // Notify all subscribers
                subscribers.forEach(callback => callback(newValue));
            }
        },
        subscribe(callback) {
            callback(value); // emit initial value
            subscribers.add(callback);
            // Return an unsubscribe function
            const unsub = () => subscribers.delete(callback);
            // support traditional unsubscribe
            unsub.unsubscribe = unsub;
            return unsub;
        },
    };
}
//# sourceMappingURL=signal.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/subject/subject.utils.js":
/*!************************************************************!*\
  !*** ../../taggedjs/main/dist/js/subject/subject.utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSubscription: () => (/* binding */ getSubscription),
/* harmony export */   runPipedMethods: () => (/* binding */ runPipedMethods)
/* harmony export */ });
/* harmony import */ var _Subject_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject.class.js */ "../../taggedjs/main/dist/js/subject/Subject.class.js");

function removeSubFromArray(subscribers, callback) {
    const index = subscribers.findIndex(sub => sub.callback === callback);
    if (index !== -1) {
        subscribers.splice(index, 1);
    }
}
function getSubscription(subject, callback, subscribers) {
    const countSubject = _Subject_class_js__WEBPACK_IMPORTED_MODULE_0__.Subject.globalSubCount$;
    _Subject_class_js__WEBPACK_IMPORTED_MODULE_0__.Subject.globalSubCount$.next(countSubject.value + 1);
    const subscription = function () {
        subscription.unsubscribe();
    };
    subscription.callback = callback;
    subscription.subscriptions = [];
    // Return a function to unsubscribe from the BehaviorSubject
    subscription.unsubscribe = function () {
        return unsubscribe(subscription, subscribers, callback);
    };
    subscription.add = (sub) => {
        subscription.subscriptions.push(sub);
        return subscription;
    };
    subscription.next = (value) => {
        callback(value, subscription);
    };
    return subscription;
}
function runPipedMethods(value, methods, onComplete) {
    const cloneMethods = [...methods];
    const firstMethod = cloneMethods.shift();
    const next = (newValue) => {
        if (cloneMethods.length) {
            return runPipedMethods(newValue, cloneMethods, onComplete);
        }
        onComplete(newValue);
    };
    let handler = next;
    const setHandler = (x) => handler = x;
    const pipeUtils = { setHandler, next };
    const methodResponse = firstMethod(value, pipeUtils);
    handler(methodResponse);
}
function unsubscribe(subscription, subscribers, callback) {
    removeSubFromArray(subscribers, callback); // each will be called when update comes in
    const valSub = _Subject_class_js__WEBPACK_IMPORTED_MODULE_0__.Subject.globalSubCount$;
    _Subject_class_js__WEBPACK_IMPORTED_MODULE_0__.Subject.globalSubCount$.next(valSub.value - 1);
    // any double unsubscribes will be ignored
    subscription.unsubscribe = () => subscription;
    // unsubscribe from any combined subjects
    const subscriptions = subscription.subscriptions;
    for (const sub of subscriptions) {
        sub.unsubscribe();
    }
    return subscription;
}
//# sourceMappingURL=subject.utils.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/subject/will.functions.js":
/*!*************************************************************!*\
  !*** ../../taggedjs/main/dist/js/subject/will.functions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   willCallback: () => (/* binding */ willCallback),
/* harmony export */   willPromise: () => (/* binding */ willPromise),
/* harmony export */   willSubscribe: () => (/* binding */ willSubscribe)
/* harmony export */ });
function willCallback(callback) {
    return ((lastValue, utils) => {
        utils.setHandler(() => {
            return undefined;
        });
        callback(lastValue, utils.next);
    });
}
/** .pipe( promise((x) => Promise.resolve(44)) ) */
function willPromise(callback) {
    return ((lastValue, utils) => {
        utils.setHandler(() => {
            return undefined;
        }); // do nothing on initial return
        const result = callback(lastValue);
        result.then(x => utils.next(x));
    });
}
/** .pipe( willSubscribe((x) => new ValueSubject(44)) ) */
const willSubscribe = (callback) => {
    return ((lastValue, utils) => {
        utils.setHandler(() => {
            return undefined;
        }); // do nothing on initial return
        const result = callback(lastValue);
        const subscription = result.subscribe(x => {
            subscription.unsubscribe();
            utils.next(x);
        });
    });
};
//# sourceMappingURL=will.functions.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/Context.types.js":
/*!********************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/Context.types.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=Context.types.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/DomTag.type.js":
/*!******************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/DomTag.type.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   variablePrefix: () => (/* binding */ variablePrefix),
/* harmony export */   variableSuffix: () => (/* binding */ variableSuffix)
/* harmony export */ });
// taggedjs-no-compile
const variablePrefix = ':tagvar';
const variableSuffix = ':';
//# sourceMappingURL=DomTag.type.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js":
/*!**********************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/ValueTypes.enum.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasicTypes: () => (/* binding */ BasicTypes),
/* harmony export */   ImmutableTypes: () => (/* binding */ ImmutableTypes),
/* harmony export */   ValueTypes: () => (/* binding */ ValueTypes),
/* harmony export */   empty: () => (/* binding */ empty)
/* harmony export */ });
const empty = '';
var ImmutableTypes;
(function (ImmutableTypes) {
    ImmutableTypes["string"] = "string";
    ImmutableTypes["number"] = "number";
    ImmutableTypes["boolean"] = "boolean";
    ImmutableTypes["undefined"] = "undefined";
})(ImmutableTypes || (ImmutableTypes = {}));
var BasicTypes;
(function (BasicTypes) {
    BasicTypes["function"] = "function";
    BasicTypes["date"] = "date";
    BasicTypes["unknown"] = "unknown";
    BasicTypes["object"] = "object";
})(BasicTypes || (BasicTypes = {}));
const version = Date.now();
/** Used as direct memory comparisons, the strings are never compared, just the array */
const ValueTypes = {
    tag: 'html', // html'' aka StringTag | DomTag
    dom: 'dom', // compiled version of html''
    templater: 'templater',
    tagComponent: 'tagComponent',
    tagArray: 'tagArray',
    // subject: 'subject',
    // tagJsSubject: 'tagJsSubject',
    subscribe: 'subscribe',
    signal: 'signal',
    renderOnce: 'renderOnce',
    stateRender: 'stateRender',
    version,
};
//# sourceMappingURL=ValueTypes.enum.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/checkDestroyPrevious.function.js":
/*!************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/checkDestroyPrevious.function.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkArrayValueChange: () => (/* binding */ checkArrayValueChange),
/* harmony export */   destroyArray: () => (/* binding */ destroyArray),
/* harmony export */   destroyArrayContextItem: () => (/* binding */ destroyArrayContextItem)
/* harmony export */ });
/* harmony import */ var _update_compareArrayItems_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update/compareArrayItems.function.js */ "../../taggedjs/main/dist/js/tag/update/compareArrayItems.function.js");
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");


function checkArrayValueChange(newValue, subject) {
    // no longer an array?
    if (!(0,_isInstance_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(newValue)) {
        destroyArrayContextItem(subject);
        return 9; // 'array'
    }
    return false;
}
function destroyArrayContextItem(subject) {
    const lastArray = subject.lastArray;
    destroyArray(subject, lastArray);
}
function destroyArray(subject, lastArray) {
    for (let index = 0; index < lastArray.length; ++index) {
        (0,_update_compareArrayItems_function_js__WEBPACK_IMPORTED_MODULE_0__.destroyArrayItem)(lastArray[index]);
    }
    delete subject.lastArray;
}
//# sourceMappingURL=checkDestroyPrevious.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/checkStateMismatch.function.js":
/*!**********************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/checkStateMismatch.function.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkStateMismatch: () => (/* binding */ checkStateMismatch)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors.js */ "../../taggedjs/main/dist/js/errors.js");

function checkStateMismatch(config, support) {
    const rearray = config.rearray;
    if (rearray.length && rearray.length !== config.stateArray.length) {
        throwStateMismatch(rearray, support, config);
    }
}
const hint = 'State tracking requires same number of state calls on every render. This error typically occurs when a state call is only reachable behind a condition. Also, wrapping tags that have state, with tag(), often helps when tag is only reachable by a condition.';
function throwStateMismatch(rearray, support, config) {
    const message = `Saved states between renders are inconsistent. Expected ${rearray.length} states got ${config.stateArray.length}.`;
    const wrapper = support.templater?.wrapper;
    let tagFunction = wrapper;
    if (wrapper?.original) {
        tagFunction = wrapper.original;
    }
    else if (wrapper?.original) {
        tagFunction = wrapper.original;
    }
    const details = {
        oldStates: config.stateArray,
        newStates: config.rearray,
        tagFunction,
        templater: support.templater,
    };
    const error = new _errors_js__WEBPACK_IMPORTED_MODULE_0__.StateMismatchError(message, details);
    console.error(hint, details);
    throw error;
}
//# sourceMappingURL=checkStateMismatch.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/checkTagValueChange.function.js":
/*!***********************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/checkTagValueChange.function.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkTagValueChange: () => (/* binding */ checkTagValueChange),
/* harmony export */   destroySupportByContextItem: () => (/* binding */ destroySupportByContextItem)
/* harmony export */ });
/* harmony import */ var _update_getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update/getNewGlobal.function.js */ "../../taggedjs/main/dist/js/tag/update/getNewGlobal.function.js");
/* harmony import */ var _render_destroySupport_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/destroySupport.function.js */ "../../taggedjs/main/dist/js/render/destroySupport.function.js");
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");
/* harmony import */ var _isLikeTags_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLikeTags.function.js */ "../../taggedjs/main/dist/js/tag/isLikeTags.function.js");
/* harmony import */ var _update_tryUpdateToTag_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update/tryUpdateToTag.function.js */ "../../taggedjs/main/dist/js/tag/update/tryUpdateToTag.function.js");





function checkTagValueChange(newValue, contextItem, counts) {
    const global = contextItem.global;
    if (!global) {
        return 663; // its not a tag this time
    }
    const lastSupport = global?.newest;
    const isValueTag = (0,_isInstance_js__WEBPACK_IMPORTED_MODULE_2__.isStaticTag)(newValue);
    const newTag = newValue;
    if (isValueTag) {
        // its a different tag now
        const likeTags = (0,_isLikeTags_function_js__WEBPACK_IMPORTED_MODULE_3__.isLikeTags)(newTag, lastSupport);
        if (!likeTags) {
            (0,_render_destroySupport_function_js__WEBPACK_IMPORTED_MODULE_1__.destroySupport)(lastSupport, global);
            (0,_update_getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_0__.getNewGlobal)(contextItem);
            return 7; // 'tag-swap'
        }
        // always cause a redraw of static tags (was false)
        (0,_update_tryUpdateToTag_function_js__WEBPACK_IMPORTED_MODULE_4__.tryUpdateToTag)(contextItem, newValue, lastSupport, counts);
        return -1;
    }
    const isTag = newValue?.tagJsType;
    if (isTag) {
        const support = global.newest;
        const ownerSupport = support.ownerSupport;
        const result = (0,_update_tryUpdateToTag_function_js__WEBPACK_IMPORTED_MODULE_4__.tryUpdateToTag)(contextItem, newValue, ownerSupport, counts);
        const doNotRedraw = result === true;
        if (doNotRedraw) {
            return -1;
        }
        return 88; // its same tag with new values
    }
    destroySupportByContextItem(contextItem);
    return 8; // 'no-longer-tag'
}
function destroySupportByContextItem(contextItem) {
    const global = contextItem.global;
    const lastSupport = global?.newest;
    // destroy old component, value is not a component
    (0,_render_destroySupport_function_js__WEBPACK_IMPORTED_MODULE_1__.destroySupport)(lastSupport, global);
    delete contextItem.global;
    contextItem.renderCount = 0;
}
//# sourceMappingURL=checkTagValueChange.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/cloneValueArray.function.js":
/*!*******************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/cloneValueArray.function.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneTagJsValue: () => (/* binding */ cloneTagJsValue),
/* harmony export */   cloneValueArray: () => (/* binding */ cloneValueArray)
/* harmony export */ });
/* harmony import */ var _deepFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deepFunctions.js */ "../../taggedjs/main/dist/js/deepFunctions.js");
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");



function cloneValueArray(values) {
    return values.map(cloneTagJsValue);
}
/** clones only what is needed to compare differences later */
function cloneTagJsValue(value, maxDepth) {
    const tag = value;
    const tagJsType = value?.tagJsType;
    if (tagJsType) {
        switch (tagJsType) {
            case _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.signal:
            case _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.subscribe:
            case _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.stateRender:
                return undefined;
            case _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.dom:
            case _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.tag:
            case _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.templater:
                return cloneValueArray(tag.values);
        }
    }
    if ((0,_isInstance_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)) {
        return cloneValueArray(tag);
    }
    return (0,_deepFunctions_js__WEBPACK_IMPORTED_MODULE_0__.deepClone)(value, maxDepth);
}
//# sourceMappingURL=cloneValueArray.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/createHtmlSupport.function.js":
/*!*********************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/createHtmlSupport.function.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHtmlSupport: () => (/* binding */ createHtmlSupport),
/* harmony export */   getBaseSupport: () => (/* binding */ getBaseSupport),
/* harmony export */   upgradeBaseToSupport: () => (/* binding */ upgradeBaseToSupport)
/* harmony export */ });
/* harmony import */ var _props_clonePropsBy_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./props/clonePropsBy.function.js */ "../../taggedjs/main/dist/js/tag/props/clonePropsBy.function.js");
/* harmony import */ var _subject_Subject_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subject/Subject.class.js */ "../../taggedjs/main/dist/js/subject/Subject.class.js");


/** used only for apps, otherwise use Support */
function getBaseSupport(templater, subject, castedProps) {
    const baseSupport = {
        templater,
        subject,
        castedProps,
        appSupport: undefined,
    };
    // baseSupport.appSupport = baseSupport
    const global = subject.global;
    global.blocked = [];
    global.destroy$ = new _subject_Subject_class_js__WEBPACK_IMPORTED_MODULE_1__.Subject();
    return baseSupport;
}
/** Sets support states to empty array and clones props */
function upgradeBaseToSupport(templater, // at runtime rendering of a tag, it needs to be married to a new Support()
support, appSupport, castedProps) {
    // ;(support as AnySupport).state = []
    // ;(support as AnySupport).states = []
    support.appSupport = appSupport;
    const props = templater.props; // natural props
    if (props) {
        support.propsConfig = (0,_props_clonePropsBy_function_js__WEBPACK_IMPORTED_MODULE_0__.clonePropsBy)(support, props, castedProps);
    }
    return support;
}
function createHtmlSupport(templater, // at runtime rendering of a tag, it needs to be married to a new Support()
ownerSupport, appSupport, subject, castedProps) {
    const support = {
        templater,
        subject,
        castedProps,
        appSupport: undefined,
    };
    support.ownerSupport = ownerSupport;
    support.appSupport = appSupport;
    return support;
}
//# sourceMappingURL=createHtmlSupport.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/createSupport.function.js":
/*!*****************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/createSupport.function.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSupport: () => (/* binding */ createSupport)
/* harmony export */ });
/* harmony import */ var _createHtmlSupport_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHtmlSupport.function.js */ "../../taggedjs/main/dist/js/tag/createHtmlSupport.function.js");

function createSupport(templater, // at runtime rendering of a tag, it needs to be married to a new Support()
ownerSupport, appSupport, subject, castedProps) {
    const support = (0,_createHtmlSupport_function_js__WEBPACK_IMPORTED_MODULE_0__.getBaseSupport)(templater, subject, castedProps);
    support.ownerSupport = ownerSupport;
    return (0,_createHtmlSupport_function_js__WEBPACK_IMPORTED_MODULE_0__.upgradeBaseToSupport)(templater, support, appSupport, castedProps);
}
//# sourceMappingURL=createSupport.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/destroyContext.function.js":
/*!******************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/destroyContext.function.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   destroyContext: () => (/* binding */ destroyContext),
/* harmony export */   getChildTagsToSoftDestroy: () => (/* binding */ getChildTagsToSoftDestroy),
/* harmony export */   unsubscribeFrom: () => (/* binding */ unsubscribeFrom)
/* harmony export */ });
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");
/* harmony import */ var _tagRunner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tagRunner.js */ "../../taggedjs/main/dist/js/tag/tagRunner.js");
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");



function destroyContext(childTags, ownerSupport) {
    for (const child of childTags) {
        // deleting arrays
        const lastArray = child.lastArray;
        if (lastArray) {
            // recurse
            destroyContext(lastArray, ownerSupport);
            continue;
        }
        const childValue = child.value;
        if (childValue?.tagJsType === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__.ValueTypes.subscribe) {
            childValue.delete(child, ownerSupport);
            continue;
        }
        const global = child.global;
        if (!global) {
            continue; // not a support contextItem
        }
        const support = global.newest;
        const iSubs = global.subscriptions;
        if (iSubs) {
            iSubs.forEach(unsubscribeFrom);
        }
        if ((0,_isInstance_js__WEBPACK_IMPORTED_MODULE_0__.isTagComponent)(support.templater)) {
            (0,_tagRunner_js__WEBPACK_IMPORTED_MODULE_1__.runBeforeDestroy)(support, global);
        }
        const subTags = global.context;
        // recurse
        destroyContext(subTags, support);
    }
}
function getChildTagsToSoftDestroy(childTags, tags = [], subs = []) {
    for (const child of childTags) {
        const global = child.global;
        if (!global) {
            continue;
        }
        const support = global.newest;
        if (support) {
            tags.push(support);
            const iSubs = global.subscriptions;
            if (iSubs) {
                subs.push(...iSubs);
            }
        }
        const subTags = global.context;
        if (subTags) {
            getChildTagsToSoftDestroy(subTags, tags, subs);
        }
    }
    return { tags, subs };
}
function unsubscribeFrom(from) {
    from.unsubscribe();
}
//# sourceMappingURL=destroyContext.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/domMetaCollector.js":
/*!***********************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/domMetaCollector.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDomMeta: () => (/* binding */ getDomMeta)
/* harmony export */ });
/* harmony import */ var _interpolations_optimizers_htmlInterpolationToDomMeta_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interpolations/optimizers/htmlInterpolationToDomMeta.function.js */ "../../taggedjs/main/dist/js/interpolations/optimizers/htmlInterpolationToDomMeta.function.js");
/* harmony import */ var _interpolations_optimizers_replacePlaceholders_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interpolations/optimizers/replacePlaceholders.function.js */ "../../taggedjs/main/dist/js/interpolations/optimizers/replacePlaceholders.function.js");
/* harmony import */ var _isLastRunMatched_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLastRunMatched.function.js */ "../../taggedjs/main/dist/js/tag/isLastRunMatched.function.js");
/* harmony import */ var _getStringsId_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getStringsId.function.js */ "../../taggedjs/main/dist/js/tag/getStringsId.function.js");
// taggedjs-no-compile




const lastRuns = {};
/** Converts strings & values into dom meta */
function getDomMeta(strings, values) {
    const stringId = (0,_getStringsId_function_js__WEBPACK_IMPORTED_MODULE_3__.getStringsId)(strings);
    const lastRun = lastRuns[stringId];
    const matches = lastRun && (0,_isLastRunMatched_function_js__WEBPACK_IMPORTED_MODULE_2__.isLastRunMatched)(strings, values, lastRun);
    if (matches) {
        return lastRun.domMetaMap;
    }
    const domMeta = (0,_interpolations_optimizers_htmlInterpolationToDomMeta_function_js__WEBPACK_IMPORTED_MODULE_0__.htmlInterpolationToDomMeta)(strings, values);
    const map = (0,_interpolations_optimizers_replacePlaceholders_function_js__WEBPACK_IMPORTED_MODULE_1__.replacePlaceholders)(domMeta, values.length);
    const template = {
        interpolation: undefined,
        string: undefined,
        strings,
        values,
        domMetaMap: map,
    };
    lastRuns[stringId] = template;
    return map;
}
//# sourceMappingURL=domMetaCollector.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/getDomTag.function.js":
/*!*************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/getDomTag.function.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDomTag: () => (/* binding */ getDomTag)
/* harmony export */ });
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSupportInCycle.function.js */ "../../taggedjs/main/dist/js/tag/getSupportInCycle.function.js");
/* harmony import */ var _update_processDomTagInit_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update/processDomTagInit.function.js */ "../../taggedjs/main/dist/js/tag/update/processDomTagInit.function.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.js */ "../../taggedjs/main/dist/js/index.js");
/* harmony import */ var _processOuterDomTagInit_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./processOuterDomTagInit.function.js */ "../../taggedjs/main/dist/js/tag/processOuterDomTagInit.function.js");
// taggedjs-no-compile





/** When compiled to then run in browser */
function getDomTag(dom, values) {
    const tag = {
        values,
        ownerSupport: (0,_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_1__.getSupportInCycle)(),
        dom,
        tagJsType: _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.dom,
        processInit: _update_processDomTagInit_function_js__WEBPACK_IMPORTED_MODULE_2__.processDomTagInit,
        checkValueChange: _index_js__WEBPACK_IMPORTED_MODULE_3__.checkTagValueChange,
        delete: _index_js__WEBPACK_IMPORTED_MODULE_3__.destroySupportByContextItem,
        key: function keyFun(arrayValue) {
            tag.arrayValue = arrayValue;
            return tag;
        },
        setHTML: function setHTML(innerHTML) {
            innerHTML.outerHTML = tag;
            tag._innerHTML = innerHTML;
            innerHTML.oldProcessInit = innerHTML.processInit;
            // TODO: Not best idea to override the init
            innerHTML.processInit = _processOuterDomTagInit_function_js__WEBPACK_IMPORTED_MODULE_4__.processOuterDomTagInit;
            return tag;
        },
        /** Used within the outerHTML tag to signify that it can use innerHTML */
        acceptInnerHTML: function acceptInnerHTML(useTagVar) {
            // TODO: datatype
            useTagVar.owner = tag;
            return tag;
        },
        html: {
            dom: function dom(dom, // ObjectChildren
            values) {
                tag.children = { dom: dom, values };
                return tag;
            }
        }
    };
    Object.defineProperty(tag, 'innerHTML', {
        set(innerHTML) {
            return tag.setHTML(innerHTML);
        },
    });
    return tag;
}
//# sourceMappingURL=getDomTag.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/getStringsId.function.js":
/*!****************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/getStringsId.function.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStringsId: () => (/* binding */ getStringsId)
/* harmony export */ });
function getStringsId(strings) {
    const array = strings.map(lengthMapper);
    array.push(strings.length);
    return Number(array.join(''));
}
function lengthMapper(x) {
    return x.length;
}
//# sourceMappingURL=getStringsId.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/getSupportInCycle.function.js":
/*!*********************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/getSupportInCycle.function.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSupportInCycle: () => (/* binding */ getSupportInCycle)
/* harmony export */ });
/* harmony import */ var _state_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/index.js */ "../../taggedjs/main/dist/js/state/index.js");

function getSupportInCycle() {
    return _state_index_js__WEBPACK_IMPORTED_MODULE_0__.setUseMemory.stateConfig.support;
}
//# sourceMappingURL=getSupportInCycle.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/getTagWrap.function.js":
/*!**************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/getTagWrap.function.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCastedProps: () => (/* binding */ getCastedProps),
/* harmony export */   getTagWrap: () => (/* binding */ getTagWrap)
/* harmony export */ });
/* harmony import */ var _props_alterProp_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./props/alterProp.function.js */ "../../taggedjs/main/dist/js/tag/props/alterProp.function.js");
/* harmony import */ var _render_update_updateExistingTagComponent_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/update/updateExistingTagComponent.function.js */ "../../taggedjs/main/dist/js/render/update/updateExistingTagComponent.function.js");
/* harmony import */ var _render_executeWrap_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/executeWrap.function.js */ "../../taggedjs/main/dist/js/render/executeWrap.function.js");
/* harmony import */ var _tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tagJsVars/tag.function.js */ "../../taggedjs/main/dist/js/tagJsVars/tag.function.js");
/* harmony import */ var _hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hasSupportChanged.function.js */ "../../taggedjs/main/dist/js/tag/hasSupportChanged.function.js");
/* harmony import */ var _createSupport_function_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createSupport.function.js */ "../../taggedjs/main/dist/js/tag/createSupport.function.js");






/** creates/returns a function that when called then calls the original component function
 * Gets used as templater.wrapper()
 */
function getTagWrap(templater, result) {
    // this function gets called by taggedjs
    const wrapper = function tagFunWrap(newSupport, subject, lastSupport // subject.global.newest
    ) {
        // wrap any prop functions that are passed in
        const castedProps = getCastedProps(templater, newSupport, lastSupport);
        const ownerSupport = newSupport.ownerSupport;
        const useSupport = (0,_createSupport_function_js__WEBPACK_IMPORTED_MODULE_5__.createSupport)(templater, ownerSupport, newSupport.appSupport, // ownerSupport.appSupport as AnySupport,
        subject, castedProps);
        return (0,_render_executeWrap_function_js__WEBPACK_IMPORTED_MODULE_2__.executeWrap)(templater, result, useSupport, castedProps);
    };
    return wrapper;
}
function getCastedProps(templater, newSupport, lastSupport) {
    const maxDepth = templater.propWatch === _tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_3__.PropWatches.DEEP ? _hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_4__.deepCompareDepth : _hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_4__.shallowCompareDepth;
    const props = templater.props;
    const propsConfig = newSupport.propsConfig;
    // When defined, this must be an update where my new props have already been made for me
    let preCastedProps = propsConfig.castProps;
    const lastPropsConfig = lastSupport?.propsConfig;
    const lastCastProps = lastPropsConfig?.castProps;
    if (lastCastProps) {
        propsConfig.castProps = lastCastProps;
        preCastedProps = (0,_render_update_updateExistingTagComponent_function_js__WEBPACK_IMPORTED_MODULE_1__.syncFunctionProps)(newSupport, lastSupport, lastSupport.ownerSupport, props, maxDepth);
    }
    const castedProps = preCastedProps || (0,_props_alterProp_function_js__WEBPACK_IMPORTED_MODULE_0__.castProps)(props, newSupport, 0);
    return castedProps;
}
//# sourceMappingURL=getTagWrap.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/getTemplaterResult.function.js":
/*!**********************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/getTemplaterResult.function.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTemplaterResult: () => (/* binding */ getTemplaterResult)
/* harmony export */ });
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _update_processTagInit_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update/processTagInit.function.js */ "../../taggedjs/main/dist/js/tag/update/processTagInit.function.js");
/* harmony import */ var _checkTagValueChange_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkTagValueChange.function.js */ "../../taggedjs/main/dist/js/tag/checkTagValueChange.function.js");



function getTemplaterResult(propWatch, props) {
    const templater = {
        tagJsType: _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.templater,
        processInit: _update_processTagInit_function_js__WEBPACK_IMPORTED_MODULE_1__.processTagInit,
        checkValueChange: _checkTagValueChange_function_js__WEBPACK_IMPORTED_MODULE_2__.checkTagValueChange,
        delete: _checkTagValueChange_function_js__WEBPACK_IMPORTED_MODULE_2__.destroySupportByContextItem,
        propWatch,
        props,
        key: function keyTemplate(arrayValue) {
            templater.arrayValue = arrayValue;
            return templater;
        }
    };
    return templater;
}
//# sourceMappingURL=getTemplaterResult.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/guaranteeInsertBefore.function.js":
/*!*************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/guaranteeInsertBefore.function.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   guaranteeInsertBefore: () => (/* binding */ guaranteeInsertBefore)
/* harmony export */ });
/* harmony import */ var _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");


function guaranteeInsertBefore(appendTo, insertBefore) {
    let appendMarker;
    // do we need to append now but process subscription later?
    if (appendTo) {
        appendMarker = insertBefore = document.createTextNode(_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__.empty);
        _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintAppends.push([_render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintAppend, [appendTo, insertBefore]]);
    }
    return {
        appendMarker,
        insertBefore: insertBefore,
    };
}
//# sourceMappingURL=guaranteeInsertBefore.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/hasPropChanges.function.js":
/*!******************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/hasPropChanges.function.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasPropChanges: () => (/* binding */ hasPropChanges)
/* harmony export */ });
/* harmony import */ var _deepFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deepFunctions.js */ "../../taggedjs/main/dist/js/deepFunctions.js");
/* harmony import */ var _hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hasSupportChanged.function.js */ "../../taggedjs/main/dist/js/tag/hasSupportChanged.function.js");
/* harmony import */ var _render_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/renderSupport.function.js */ "../../taggedjs/main/dist/js/render/renderSupport.function.js");
/* harmony import */ var _tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tagJsVars/tag.function.js */ "../../taggedjs/main/dist/js/tagJsVars/tag.function.js");
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");





/**
 *
 * @param props
 * @param pastCloneProps
 * @returns WHEN number then props have changed. WHEN false props have not changed
 */
function hasPropChanges(props, // natural props
pastCloneProps, // previously cloned props
propWatch) {
    const hasLenChanged = (0,_render_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_2__.hasPropLengthsChanged)(props, pastCloneProps);
    if (hasLenChanged) {
        return 11;
    }
    switch (propWatch) {
        case _tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_3__.PropWatches.NONE:
            return 1; // always render
        case _tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_3__.PropWatches.SHALLOW: // determining equal is same as immutable, its the previous cloning step thats different
            return (0,_hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_1__.shallowPropMatch)(props, pastCloneProps);
        case _tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_3__.PropWatches.IMMUTABLE:
            return (0,_hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_1__.immutablePropMatch)(props, pastCloneProps);
    }
    return deepPropChangeCompare(props, pastCloneProps);
}
function deepPropChangeCompare(props, pastCloneProps) {
    // DEEP watch
    let castedProps = props;
    let castedPastProps = pastCloneProps;
    castedProps = [...props];
    castedPastProps = [...(pastCloneProps || [])];
    const allFunctionsMatch = castedProps.every((value, index) => onePropCompare(value, index, castedProps, castedPastProps));
    if (!allFunctionsMatch) {
        return 7; // a change has been detected by function comparisons
    }
    return false;
}
function onePropCompare(value, index, castedProps, castedPastProps) {
    const compare = castedPastProps[index];
    if (typeof (value) === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_4__.BasicTypes.object) {
        const subCastedProps = { ...value };
        const subCompareProps = { ...compare || {} };
        const matched = Object.entries(subCastedProps).every(([key, value]) => compareProps(value, subCompareProps[key], () => {
            delete subCastedProps[key]; // its a function and not needed to be compared
            delete subCompareProps[key]; // its a function and not needed to be compared
        }));
        return matched;
    }
    return compareProps(value, compare, function propComparer() {
        castedProps.splice(index, 1);
        castedPastProps.splice(index, 1);
    });
}
/** returning a number means true good comparison */
function compareProps(value, compare, onDelete) {
    if (!(typeof (value) === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_4__.BasicTypes.function)) {
        return (0,_deepFunctions_js__WEBPACK_IMPORTED_MODULE_0__.deepEqual)(value, compare, _hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_1__.deepCompareDepth) ? 4 : false;
    }
    const compareFn = compare;
    if (!(typeof (compareFn) === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_4__.BasicTypes.function)) {
        return false; // its a function now but was not before
    }
    // ensure we are comparing apples to apples as function get wrapped
    const compareOriginal = compare?.original;
    if (compareOriginal) {
        compare = compareOriginal;
    }
    const original = value.original;
    if (original) {
        value = value.original;
    }
    const valueString = value.toString();
    const compareString = compare.toString();
    if (valueString === compareString) {
        onDelete();
        return 5; // both are function the same
    }
    onDelete();
    return 6;
}
//# sourceMappingURL=hasPropChanges.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/hasSupportChanged.function.js":
/*!*********************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/hasSupportChanged.function.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepCompareDepth: () => (/* binding */ deepCompareDepth),
/* harmony export */   hasSupportChanged: () => (/* binding */ hasSupportChanged),
/* harmony export */   immutablePropMatch: () => (/* binding */ immutablePropMatch),
/* harmony export */   shallowCompareDepth: () => (/* binding */ shallowCompareDepth),
/* harmony export */   shallowPropMatch: () => (/* binding */ shallowPropMatch)
/* harmony export */ });
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");
/* harmony import */ var _hasPropChanges_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hasPropChanges.function.js */ "../../taggedjs/main/dist/js/tag/hasPropChanges.function.js");
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");



/** Used when deciding if a support will even change (are the arguments the same?) */
function hasSupportChanged(oldSupport, newTemplater) {
    const latestProps = newTemplater.props;
    const propsConfig = oldSupport.propsConfig;
    const pastCloneProps = propsConfig.latest;
    const propsChanged = (0,_hasPropChanges_function_js__WEBPACK_IMPORTED_MODULE_1__.hasPropChanges)(latestProps, pastCloneProps, oldSupport.templater.propWatch);
    return propsChanged;
}
function immutablePropMatch(props, pastCloneProps) {
    // if every prop the same, then no changes
    const len = props.length;
    for (let index = 0; index < len; ++index) {
        const prop = props[index];
        const pastProp = pastCloneProps[index];
        if (prop !== pastProp) {
            return 2;
        }
    }
    return false; // false means has not changed
}
function shallowPropMatch(props, pastCloneProps) {
    // if every prop the same, then no changes
    const len = props.length;
    for (let index = 0; index < len; ++index) {
        const prop = props[index];
        const pastProp = pastCloneProps[index];
        if ((0,_isInstance_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(prop) && (0,_isInstance_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(pastProp)) {
            if (prop === pastProp) {
                continue;
            }
            return 3.0; // not equal array
        }
        if (typeof (prop) === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__.BasicTypes.function && typeof (pastProp) === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__.BasicTypes.function) {
            continue; // considered good
        }
        if (typeof (prop) === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__.BasicTypes.object) {
            if (typeof (pastCloneProps) === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__.BasicTypes.object) {
                const obEntries = Object.entries(prop);
                for (const subItem of obEntries) {
                    const result = objectItemMatches(subItem, pastProp);
                    if (!result) {
                        return 3.1;
                    }
                }
            }
            continue; // all sub objects matched
        }
        if (prop === pastProp) {
            continue; // matched good
        }
        return 3.3; // not equal
    }
    return false; // false means has not changed
}
const shallowCompareDepth = 3;
const deepCompareDepth = 10;
function objectItemMatches([name, value], pastProp) {
    const pastValue = pastProp[name];
    if (typeof (value) === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__.BasicTypes.function && typeof (pastValue) === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__.BasicTypes.function) {
        return true;
    }
    return pastValue === value;
}
//# sourceMappingURL=hasSupportChanged.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/html.js":
/*!***********************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/html.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   html: () => (/* binding */ html)
/* harmony export */ });
/* harmony import */ var _getDomTag_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDomTag.function.js */ "../../taggedjs/main/dist/js/tag/getDomTag.function.js");
/* harmony import */ var _tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tagJsVars/tag.function.js */ "../../taggedjs/main/dist/js/tagJsVars/tag.function.js");
/* harmony import */ var _getTemplaterResult_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTemplaterResult.function.js */ "../../taggedjs/main/dist/js/tag/getTemplaterResult.function.js");
/* harmony import */ var _processOuterDomTagInit_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./processOuterDomTagInit.function.js */ "../../taggedjs/main/dist/js/tag/processOuterDomTagInit.function.js");




/** Used as html`<div></div>` */
function html(strings, ...values) {
    const stringTag = (0,_processOuterDomTagInit_function_js__WEBPACK_IMPORTED_MODULE_3__.getStringTag)(strings, values);
    const templater = (0,_getTemplaterResult_function_js__WEBPACK_IMPORTED_MODULE_2__.getTemplaterResult)(_tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_1__.PropWatches.NONE);
    templater.tag = stringTag;
    stringTag.templater = templater;
    return stringTag;
}
html.dom = function (dom, ...values) {
    return (0,_getDomTag_function_js__WEBPACK_IMPORTED_MODULE_0__.getDomTag)(dom, values);
};
//# sourceMappingURL=html.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/index.js":
/*!************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasicTypes: () => (/* reexport safe */ _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_8__.BasicTypes),
/* harmony export */   ImmutableTypes: () => (/* reexport safe */ _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_8__.ImmutableTypes),
/* harmony export */   PropWatches: () => (/* reexport safe */ _tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_4__.PropWatches),
/* harmony export */   RouteQuery: () => (/* reexport safe */ _tag_types_js__WEBPACK_IMPORTED_MODULE_1__.RouteQuery),
/* harmony export */   ValueTypes: () => (/* reexport safe */ _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_8__.ValueTypes),
/* harmony export */   appElements: () => (/* reexport safe */ _tagElement_js__WEBPACK_IMPORTED_MODULE_14__.appElements),
/* harmony export */   checkArrayValueChange: () => (/* reexport safe */ _checkDestroyPrevious_function_js__WEBPACK_IMPORTED_MODULE_11__.checkArrayValueChange),
/* harmony export */   checkSubContext: () => (/* reexport safe */ _update_index_js__WEBPACK_IMPORTED_MODULE_3__.checkSubContext),
/* harmony export */   checkTagValueChange: () => (/* reexport safe */ _checkTagValueChange_function_js__WEBPACK_IMPORTED_MODULE_12__.checkTagValueChange),
/* harmony export */   deleteSubContext: () => (/* reexport safe */ _update_index_js__WEBPACK_IMPORTED_MODULE_3__.deleteSubContext),
/* harmony export */   destroyArray: () => (/* reexport safe */ _checkDestroyPrevious_function_js__WEBPACK_IMPORTED_MODULE_11__.destroyArray),
/* harmony export */   destroyArrayContextItem: () => (/* reexport safe */ _checkDestroyPrevious_function_js__WEBPACK_IMPORTED_MODULE_11__.destroyArrayContextItem),
/* harmony export */   destroySupportByContextItem: () => (/* reexport safe */ _checkTagValueChange_function_js__WEBPACK_IMPORTED_MODULE_12__.destroySupportByContextItem),
/* harmony export */   empty: () => (/* reexport safe */ _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_8__.empty),
/* harmony export */   forceUpdateExistingValue: () => (/* reexport safe */ _update_index_js__WEBPACK_IMPORTED_MODULE_3__.forceUpdateExistingValue),
/* harmony export */   getDomMeta: () => (/* reexport safe */ _domMetaCollector_js__WEBPACK_IMPORTED_MODULE_2__.getDomMeta),
/* harmony export */   getDomTag: () => (/* reexport safe */ _getDomTag_function_js__WEBPACK_IMPORTED_MODULE_5__.getDomTag),
/* harmony export */   getNewGlobal: () => (/* reexport safe */ _update_getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_0__.getNewGlobal),
/* harmony export */   getTemplaterResult: () => (/* reexport safe */ _getTemplaterResult_function_js__WEBPACK_IMPORTED_MODULE_10__.getTemplaterResult),
/* harmony export */   guaranteeInsertBefore: () => (/* reexport safe */ _guaranteeInsertBefore_function_js__WEBPACK_IMPORTED_MODULE_20__.guaranteeInsertBefore),
/* harmony export */   hasPropChanges: () => (/* reexport safe */ _hasPropChanges_function_js__WEBPACK_IMPORTED_MODULE_18__.hasPropChanges),
/* harmony export */   html: () => (/* reexport safe */ _html_js__WEBPACK_IMPORTED_MODULE_7__.html),
/* harmony export */   onFirstSubContext: () => (/* reexport safe */ _update_index_js__WEBPACK_IMPORTED_MODULE_3__.onFirstSubContext),
/* harmony export */   oneRenderToSupport: () => (/* reexport safe */ _update_oneRenderToSupport_function_js__WEBPACK_IMPORTED_MODULE_9__.oneRenderToSupport),
/* harmony export */   output: () => (/* reexport safe */ _output_function_js__WEBPACK_IMPORTED_MODULE_19__.output),
/* harmony export */   paint: () => (/* reexport safe */ _render_paint_function_js__WEBPACK_IMPORTED_MODULE_16__.paint),
/* harmony export */   processFirstSubjectValue: () => (/* reexport safe */ _update_processFirstSubjectValue_function_js__WEBPACK_IMPORTED_MODULE_17__.processFirstSubjectValue),
/* harmony export */   tag: () => (/* reexport safe */ _tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_4__.tag),
/* harmony export */   tagElement: () => (/* reexport safe */ _tagElement_js__WEBPACK_IMPORTED_MODULE_14__.tagElement),
/* harmony export */   tags: () => (/* reexport safe */ _tag_utils_js__WEBPACK_IMPORTED_MODULE_6__.tags),
/* harmony export */   variablePrefix: () => (/* reexport safe */ _DomTag_type_js__WEBPACK_IMPORTED_MODULE_15__.variablePrefix)
/* harmony export */ });
/* harmony import */ var _update_getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update/getNewGlobal.function.js */ "../../taggedjs/main/dist/js/tag/update/getNewGlobal.function.js");
/* harmony import */ var _tag_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag.types.js */ "../../taggedjs/main/dist/js/tag/tag.types.js");
/* harmony import */ var _domMetaCollector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domMetaCollector.js */ "../../taggedjs/main/dist/js/tag/domMetaCollector.js");
/* harmony import */ var _update_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/index.js */ "../../taggedjs/main/dist/js/tag/update/index.js");
/* harmony import */ var _tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tagJsVars/tag.function.js */ "../../taggedjs/main/dist/js/tagJsVars/tag.function.js");
/* harmony import */ var _getDomTag_function_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDomTag.function.js */ "../../taggedjs/main/dist/js/tag/getDomTag.function.js");
/* harmony import */ var _tag_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tag.utils.js */ "../../taggedjs/main/dist/js/tag/tag.utils.js");
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html.js */ "../../taggedjs/main/dist/js/tag/html.js");
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _update_oneRenderToSupport_function_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update/oneRenderToSupport.function.js */ "../../taggedjs/main/dist/js/tag/update/oneRenderToSupport.function.js");
/* harmony import */ var _getTemplaterResult_function_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getTemplaterResult.function.js */ "../../taggedjs/main/dist/js/tag/getTemplaterResult.function.js");
/* harmony import */ var _checkDestroyPrevious_function_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checkDestroyPrevious.function.js */ "../../taggedjs/main/dist/js/tag/checkDestroyPrevious.function.js");
/* harmony import */ var _checkTagValueChange_function_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./checkTagValueChange.function.js */ "../../taggedjs/main/dist/js/tag/checkTagValueChange.function.js");
/* harmony import */ var _Context_types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Context.types.js */ "../../taggedjs/main/dist/js/tag/Context.types.js");
/* harmony import */ var _tagElement_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tagElement.js */ "../../taggedjs/main/dist/js/tag/tagElement.js");
/* harmony import */ var _DomTag_type_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DomTag.type.js */ "../../taggedjs/main/dist/js/tag/DomTag.type.js");
/* harmony import */ var _render_paint_function_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../render/paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");
/* harmony import */ var _update_processFirstSubjectValue_function_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./update/processFirstSubjectValue.function.js */ "../../taggedjs/main/dist/js/tag/update/processFirstSubjectValue.function.js");
/* harmony import */ var _hasPropChanges_function_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./hasPropChanges.function.js */ "../../taggedjs/main/dist/js/tag/hasPropChanges.function.js");
/* harmony import */ var _output_function_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./output.function.js */ "../../taggedjs/main/dist/js/tag/output.function.js");
/* harmony import */ var _guaranteeInsertBefore_function_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guaranteeInsertBefore.function.js */ "../../taggedjs/main/dist/js/tag/guaranteeInsertBefore.function.js");






















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/isLastRunMatched.function.js":
/*!********************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/isLastRunMatched.function.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLastRunMatched: () => (/* binding */ isLastRunMatched)
/* harmony export */ });
function isLastRunMatched(strings, values, lastRun) {
    if (lastRun) {
        if (lastRun.strings.length === strings.length) {
            const stringsMatch = lastRun.strings.every((string, index) => 
            // string.length === strings[index].length
            string === strings[index]);
            if (stringsMatch && lastRun.values.length === values.length) {
                return true; // performance savings using the last time this component was rendered
            }
        }
    }
    return false;
}
//# sourceMappingURL=isLastRunMatched.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/isLikeTags.function.js":
/*!**************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/isLikeTags.function.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLikeDomTags: () => (/* binding */ isLikeDomTags),
/* harmony export */   isLikeTags: () => (/* binding */ isLikeTags),
/* harmony export */   isLikeValueSets: () => (/* binding */ isLikeValueSets)
/* harmony export */ });
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");

function isLikeTags(newSupport, // new
oldSupport) {
    const isLike = isLikeBaseTags(newSupport, oldSupport);
    // is this perhaps an outerHTML compare?      
    if (!isLike && oldSupport.templater.tag?._innerHTML) {
        if (isLikeBaseTags(newSupport.outerHTML, oldSupport)) {
            return true;
        }
    }
    return isLike;
}
function isLikeBaseTags(newSupport, // new
oldSupport) {
    const templater0 = newSupport.templater;
    const templater1 = oldSupport.templater;
    const newTag = templater0?.tag || newSupport;
    const oldTag = templater1.tag; // || (oldSupport as any)
    if (templater0?.tagJsType === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.stateRender) {
        return templater0.dom === templater1.dom;
    }
    switch (newTag.tagJsType) {
        case _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.dom: {
            if (oldTag?.tagJsType !== _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.dom) {
                return false; // newTag is not even same type
            }
            return isLikeDomTags(newTag, oldTag);
        }
        case _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.tag: {
            const like = isLikeStringTags(newTag, oldTag, newSupport, oldSupport);
            return like;
        }
    }
    throw new Error(`unknown tagJsType of ${newTag.tagJsType}`);
}
// used when compiler was used
function isLikeDomTags(newTag, oldTag) {
    const domMeta0 = newTag.dom;
    const domMeta1 = oldTag.dom;
    return domMeta0 === domMeta1;
}
// used for no compiling
function isLikeStringTags(newTag, oldTag, newSupport, // new
oldSupport) {
    const strings0 = newTag.strings;
    const strings1 = oldTag.strings;
    if (strings0.length !== strings1.length) {
        return false;
    }
    const everyStringMatched = strings0.every((string, index) => strings1[index].length === string.length // performance, just compare length of strings // TODO: Document this
    );
    if (!everyStringMatched) {
        return false;
    }
    const values0 = newSupport.templater.values || newTag.values;
    const values1 = oldSupport.templater.values || oldTag.values;
    return isLikeValueSets(values0, values1);
}
function isLikeValueSets(values0, values1) {
    const valuesLengthsMatch = values0.length === values1.length;
    if (!valuesLengthsMatch) {
        return false;
    }
    const allVarsMatch = values1.every(function isEveryValueAlike(value, index) {
        const compareTo = values0[index];
        const isFunctions = typeof (value) === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.BasicTypes.function && typeof (compareTo) === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.BasicTypes.function;
        if (isFunctions) {
            const stringMatch = value.toString() === compareTo.toString();
            if (stringMatch) {
                return true;
            }
            return false;
        }
        return true;
    });
    if (allVarsMatch) {
        return true;
    }
    return false;
}
//# sourceMappingURL=isLikeTags.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/loadNewBaseSupport.function.js":
/*!**********************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/loadNewBaseSupport.function.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadNewBaseSupport: () => (/* binding */ loadNewBaseSupport)
/* harmony export */ });
/* harmony import */ var _createHtmlSupport_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHtmlSupport.function.js */ "../../taggedjs/main/dist/js/tag/createHtmlSupport.function.js");

function loadNewBaseSupport(templater, subject, appElement) {
    const global = subject.global;
    const newSupport = (0,_createHtmlSupport_function_js__WEBPACK_IMPORTED_MODULE_0__.getBaseSupport)(templater, subject);
    (0,_createHtmlSupport_function_js__WEBPACK_IMPORTED_MODULE_0__.upgradeBaseToSupport)(templater, newSupport, newSupport);
    newSupport.appElement = appElement;
    global.oldest = global.oldest || newSupport;
    global.newest = newSupport;
    return newSupport;
}
//# sourceMappingURL=loadNewBaseSupport.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/output.function.js":
/*!**********************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/output.function.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   output: () => (/* binding */ output)
/* harmony export */ });
/* harmony import */ var _render_dom_attachDomElements_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/dom/attachDomElements.function.js */ "../../taggedjs/main/dist/js/render/dom/attachDomElements.function.js");
/* harmony import */ var _state_syncStates_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/syncStates.function.js */ "../../taggedjs/main/dist/js/state/syncStates.function.js");
/* harmony import */ var _getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getSupportInCycle.function.js */ "../../taggedjs/main/dist/js/tag/getSupportInCycle.function.js");
/* harmony import */ var _props_alterProp_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./props/alterProp.function.js */ "../../taggedjs/main/dist/js/tag/props/alterProp.function.js");




/** Used to call a function that belongs to a calling tag */
function output(callback) {
    if (!callback) {
        return _render_dom_attachDomElements_function_js__WEBPACK_IMPORTED_MODULE_0__.blankHandler; // output used on an argument that was not passed in
    }
    const support = (0,_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_2__.getSupportInCycle)();
    if (!support) {
        throw new Error('output must be used in render sync fashion');
    }
    return (...args) => {
        const ownerSupport = support.ownerSupport;
        const ownerGlobal = ownerSupport.subject.global;
        const newestOwner = ownerGlobal.newest;
        // sync the new states to the old before the old does any processing
        (0,_state_syncStates_function_js__WEBPACK_IMPORTED_MODULE_1__.syncStatesArray)(newestOwner.states, ownerSupport.states);
        const c = callback(...args); // call the latest callback
        // sync the old states to the new
        (0,_state_syncStates_function_js__WEBPACK_IMPORTED_MODULE_1__.syncStatesArray)(ownerSupport.states, newestOwner.states);
        // now render the owner
        const newestOwnerOwner = newestOwner.ownerSupport;
        (0,_props_alterProp_function_js__WEBPACK_IMPORTED_MODULE_3__.safeRenderSupport)(newestOwner, newestOwnerOwner.subject.global.newest);
        return c;
    };
}
//# sourceMappingURL=output.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/processOuterDomTagInit.function.js":
/*!**************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/processOuterDomTagInit.function.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStringTag: () => (/* binding */ getStringTag),
/* harmony export */   processOuterDomTagInit: () => (/* binding */ processOuterDomTagInit)
/* harmony export */ });
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSupportInCycle.function.js */ "../../taggedjs/main/dist/js/tag/getSupportInCycle.function.js");
/* harmony import */ var _update_processDomTagInit_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update/processDomTagInit.function.js */ "../../taggedjs/main/dist/js/tag/update/processDomTagInit.function.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.js */ "../../taggedjs/main/dist/js/index.js");
/* harmony import */ var _update_forceUpdateExistingValue_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update/forceUpdateExistingValue.function.js */ "../../taggedjs/main/dist/js/tag/update/forceUpdateExistingValue.function.js");
// taggedjs-no-compile





/** Used to override the html`` processing that will first render outerHTML and then its innerHTML */
function processOuterDomTagInit(value, contextItem, // could be tag via result.tag
ownerSupport, // owningSupport
counts, appendTo, insertBefore) {
    console.log('processOuterDomTagInit******', {
        appendTo, insertBefore,
        parentNode: insertBefore?.parentNode,
        contextItem,
        placeholder: contextItem.placeholder,
        placeholderParentNode: contextItem.placeholder?.parentNode,
    });
    const outerHTML = value.outerHTML;
    (0,_update_processDomTagInit_function_js__WEBPACK_IMPORTED_MODULE_2__.processDomTagInit)(outerHTML, contextItem, // could be tag via result.tag
    ownerSupport, // owningSupport
    counts, appendTo, insertBefore);
    console.log('set');
    contextItem.handler = function outDomTagHanlder(value, newSupport, contextItem2, _values, counts) {
        console.log('xxxxx', {
            contextItem,
            contextItem2,
            equal: contextItem === contextItem2,
        });
        (0,_update_forceUpdateExistingValue_function_js__WEBPACK_IMPORTED_MODULE_4__.forceUpdateExistingValue)(contextItem2, value?.outerHTML || value, newSupport, counts);
    };
    // TODO: Not best idea to swap out the original values changeChecker
    value.checkValueChange = function outerCheckValueChange(newValue, contextItem, counts) {
        return checkOuterTagValueChange(newValue, contextItem, counts);
    };
}
function checkOuterTagValueChange(newValue, contextItem, counts) {
    return (0,_index_js__WEBPACK_IMPORTED_MODULE_3__.checkTagValueChange)(newValue, // (newValue as Tag)?.outerHTML || newValue,
    contextItem, // subContext.contextItem as any,
    counts);
}
/** When runtime is in browser */
function getStringTag(strings, values) {
    const tag = {
        values,
        ownerSupport: (0,_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_1__.getSupportInCycle)(),
        tagJsType: _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.tag,
        processInit: _update_processDomTagInit_function_js__WEBPACK_IMPORTED_MODULE_2__.processDomTagInit,
        checkValueChange: _index_js__WEBPACK_IMPORTED_MODULE_3__.checkTagValueChange,
        delete: _index_js__WEBPACK_IMPORTED_MODULE_3__.destroySupportByContextItem,
        strings,
        /** Used within an array.map() that returns html aka array.map(x => html``.key(x)) */
        key(arrayValue) {
            tag.arrayValue = arrayValue;
            return tag;
        },
        /** aka setInnerHTML */
        setHTML: function setHTML(innerHTML) {
            innerHTML.outerHTML = tag;
            tag._innerHTML = innerHTML;
            innerHTML.oldProcessInit = innerHTML.processInit;
            // TODO: Not best idea to override the init
            innerHTML.processInit = processOuterDomTagInit;
            return tag;
        },
        /** Used within the outerHTML tag to signify that it can use innerHTML */
        acceptInnerHTML: function acceptInnerHTML(useTagVar) {
            // TODO: datatype
            useTagVar.owner = tag;
            return tag;
        },
        html: function html(strings, values) {
            tag.children = { strings, values };
            return tag;
        }
    };
    Object.defineProperty(tag, 'innerHTML', {
        set(innerHTML) {
            return tag.setHTML(innerHTML);
        },
    });
    return tag;
}
//# sourceMappingURL=processOuterDomTagInit.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/processUpdateContext.function.js":
/*!************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/processUpdateContext.function.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processUpdateContext: () => (/* binding */ processUpdateContext)
/* harmony export */ });
/* harmony import */ var _tagJsVars_valueToTagJsVar_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tagJsVars/valueToTagJsVar.function.js */ "../../taggedjs/main/dist/js/tagJsVars/valueToTagJsVar.function.js");

function processUpdateContext(support, context) {
    const thisTag = support.templater.tag;
    const values = thisTag.values;
    let index = 0;
    const len = values.length;
    const counts = { added: 0, removed: 0 };
    while (index < len) {
        processUpdateOneContext(values, index, context, support, counts);
        ++index;
    }
    return context;
}
/** returns boolean of did render */
function processUpdateOneContext(values, // the interpolated values
index, context, ownerSupport, counts) {
    const value = values[index];
    // is something already there?
    const contextItem = context[index];
    // Do not continue if the value is just the same
    if (value === contextItem.value) {
        return;
    }
    const handler = contextItem.handler;
    handler(value, ownerSupport, contextItem, values, counts);
    contextItem.value = value;
    contextItem.tagJsVar = (0,_tagJsVars_valueToTagJsVar_function_js__WEBPACK_IMPORTED_MODULE_0__.valueToTagJsVar)(value);
}
//# sourceMappingURL=processUpdateContext.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/props/alterProp.function.js":
/*!*******************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/props/alterProp.function.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callbackPropOwner: () => (/* binding */ callbackPropOwner),
/* harmony export */   castProps: () => (/* binding */ castProps),
/* harmony export */   checkProp: () => (/* binding */ checkProp),
/* harmony export */   getPropWrap: () => (/* binding */ getPropWrap),
/* harmony export */   isSkipPropValue: () => (/* binding */ isSkipPropValue),
/* harmony export */   safeRenderSupport: () => (/* binding */ safeRenderSupport)
/* harmony export */ });
/* harmony import */ var _render_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/renderSupport.function.js */ "../../taggedjs/main/dist/js/render/renderSupport.function.js");
/* harmony import */ var _render_renderExistingTag_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/renderExistingTag.function.js */ "../../taggedjs/main/dist/js/render/renderExistingTag.function.js");
/* harmony import */ var _getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getSupportInCycle.function.js */ "../../taggedjs/main/dist/js/tag/getSupportInCycle.function.js");
/* harmony import */ var _hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hasSupportChanged.function.js */ "../../taggedjs/main/dist/js/tag/hasSupportChanged.function.js");
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _state_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../state/index.js */ "../../taggedjs/main/dist/js/state/index.js");







function castProps(props, newSupport, depth) {
    return props.map(function eachCastProp(prop) {
        return alterProp(prop, newSupport.ownerSupport, newSupport, depth);
    });
}
/* Used to rewrite props that are functions. When they are called it should cause parent rendering */
function alterProp(prop, ownerSupport, newSupport, depth) {
    if ((0,_isInstance_js__WEBPACK_IMPORTED_MODULE_4__.isStaticTag)(prop) || !prop) {
        return prop;
    }
    if (!ownerSupport) {
        return prop; // no one above me
    }
    return checkProp(prop, ownerSupport, newSupport, depth);
}
function checkProp(value, ownerSupport, newSupport, depth, owner) {
    if (!value) {
        return value;
    }
    if (value.tagJsType) {
        return value;
    }
    if (typeof (value) === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_5__.BasicTypes.function) {
        if (depth <= 1) {
            // only wrap function at depth 0 and 1
            return getPropWrap(value, owner, ownerSupport);
        }
        return value;
    }
    if (depth === _hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_3__.deepCompareDepth) {
        return value;
    }
    const skip = isSkipPropValue(value);
    if (skip) {
        return value; // no children to crawl through
    }
    if ((0,_isInstance_js__WEBPACK_IMPORTED_MODULE_4__.isArray)(value)) {
        return checkArrayProp(value, newSupport, ownerSupport, depth);
    }
    return checkObjectProp(value, newSupport, ownerSupport, depth);
}
function checkArrayProp(value, newSupport, ownerSupport, depth) {
    for (let index = value.length - 1; index >= 0; --index) {
        const subValue = value[index];
        value[index] = checkProp(subValue, ownerSupport, newSupport, depth + 1, value);
        if (typeof (subValue) === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_5__.BasicTypes.function) {
            if (subValue.mem) {
                continue;
            }
            afterCheckProp(depth + 1, index, subValue, value, newSupport);
        }
    }
    return value;
}
function checkObjectProp(value, newSupport, ownerSupport, depth) {
    const keys = Object.keys(value);
    for (const name of keys) {
        const subValue = value[name];
        const result = checkProp(subValue, ownerSupport, newSupport, depth + 1, value);
        const newSubValue = value[name];
        if (newSubValue === result) {
            continue;
        }
        const getset = Object.getOwnPropertyDescriptor(value, name);
        const hasSetter = getset?.get || getset?.set;
        if (hasSetter) {
            continue;
        }
        value[name] = result;
        if (typeof (result) === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_5__.BasicTypes.function) {
            if (subValue.mem) {
                continue;
            }
            afterCheckProp(depth + 1, name, subValue, value, newSupport);
        }
    }
    return value;
}
function afterCheckProp(depth, index, originalValue, newProp, newSupport) {
    // restore object to have original function on destroy
    if (depth > 0) {
        const global = newSupport.subject.global;
        newProp[index].subscription = global.destroy$.toCallback(function alterCheckProcessor() {
            newProp[index] = originalValue;
        });
    }
}
function getPropWrap(value, owner, ownerSupport) {
    const already = value.mem;
    // already previously converted by a parent?
    if (already) {
        return value;
    }
    const wrap = function wrapRunner(...args) {
        return callbackPropOwner(wrap.mem, owner, args, ownerSupport);
    }; // what gets called can switch over parent state changes
    wrap.original = value;
    wrap.mem = value;
    // copy data properties that maybe on source function
    Object.assign(wrap, value);
    return wrap;
}
/** Function shared by alterProps() and updateExistingTagComponent... TODO: May want to have to functions to reduce cycle checking?  */
function callbackPropOwner(toCall, // original function
owner, callWith, ownerSupport) {
    const global = ownerSupport.subject.global;
    const newest = global?.newest || ownerSupport;
    const supportInCycle = (0,_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_2__.getSupportInCycle)();
    const noCycle = supportInCycle === undefined;
    // actual function call to original method
    const callbackResult = toCall.apply(owner, callWith);
    const run = function propCallbackProcessor() {
        const global = newest.subject.global;
        if (!global || global.locked === true) {
            return callbackResult; // currently in the middle of rendering
        }
        safeRenderSupport(newest, ownerSupport);
        return callbackResult;
    };
    if (noCycle) {
        return run();
    }
    _state_index_js__WEBPACK_IMPORTED_MODULE_6__.setUseMemory.tagClosed$.toCallback(run);
    return callbackResult;
}
function isSkipPropValue(value) {
    return typeof (value) !== _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_5__.BasicTypes.object || !value || value.tagJsType;
}
function safeRenderSupport(newest, ownerSupport) {
    const subject = newest.subject;
    const isInline = (0,_render_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_0__.isInlineHtml)(newest.templater);
    if (isInline) {
        const result = (0,_render_renderSupport_function_js__WEBPACK_IMPORTED_MODULE_0__.renderInlineHtml)(ownerSupport, newest);
        return result;
    }
    const global = subject.global;
    global.locked = true;
    (0,_render_renderExistingTag_function_js__WEBPACK_IMPORTED_MODULE_1__.renderExistingReadyTag)(global.newest, newest, ownerSupport, subject);
    delete global.locked;
}
//# sourceMappingURL=alterProp.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/props/clonePropsBy.function.js":
/*!**********************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/props/clonePropsBy.function.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clonePropsBy: () => (/* binding */ clonePropsBy)
/* harmony export */ });
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _cloneValueArray_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cloneValueArray.function.js */ "../../taggedjs/main/dist/js/tag/cloneValueArray.function.js");
/* harmony import */ var _hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hasSupportChanged.function.js */ "../../taggedjs/main/dist/js/tag/hasSupportChanged.function.js");
/* harmony import */ var _tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tagJsVars/tag.function.js */ "../../taggedjs/main/dist/js/tagJsVars/tag.function.js");




function clonePropsBy(support, props, castProps) {
    const templater = support.templater;
    if (templater.tagJsType === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.stateRender) {
        return;
    }
    switch (templater.propWatch) {
        case _tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_3__.PropWatches.IMMUTABLE:
            return support.propsConfig = {
                latest: props,
                castProps,
            };
        case _tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_3__.PropWatches.SHALLOW:
            return support.propsConfig = {
                latest: props.map(shallowMapper),
                castProps,
            };
    }
    return support.propsConfig = {
        latest: props.map(deepMapper),
        castProps,
    };
}
function shallowMapper(x) {
    return (0,_cloneValueArray_function_js__WEBPACK_IMPORTED_MODULE_1__.cloneTagJsValue)(x, _hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_2__.shallowCompareDepth);
}
function deepMapper(props) {
    return (0,_cloneValueArray_function_js__WEBPACK_IMPORTED_MODULE_1__.cloneTagJsValue)(props, _hasSupportChanged_function_js__WEBPACK_IMPORTED_MODULE_2__.deepCompareDepth);
}
//# sourceMappingURL=clonePropsBy.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/smartRemoveKids.function.js":
/*!*******************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/smartRemoveKids.function.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   smartRemoveKids: () => (/* binding */ smartRemoveKids)
/* harmony export */ });
/* harmony import */ var _checkDestroyPrevious_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkDestroyPrevious.function.js */ "../../taggedjs/main/dist/js/tag/checkDestroyPrevious.function.js");
/* harmony import */ var _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");


/** sets global.deleted on support and all children */
function smartRemoveKids(global, allPromises) {
    const context = global.context;
    // already set
    // global.deleted = true
    const destroys = global.destroys;
    if (destroys) {
        return processContextDestroys(destroys, global, allPromises);
    }
    smartRemoveByContext(context, allPromises);
    destroyClones(global);
}
const promises = [];
function destroyCall(destroy) {
    const maybePromise = destroy();
    const isPromise = maybePromise instanceof Promise;
    if (isPromise) {
        promises.push(maybePromise);
    }
}
// Elements that have a destroy or ondestroy attribute
function processContextDestroys(destroys, global, allPromises) {
    promises.length = 0;
    destroys.forEach(destroyCall);
    if (promises.length) {
        const lastPromise = Promise.all(promises)
            .then(() => {
            ++_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.painting.locks;
            // continue to remove
            smartRemoveByContext(global.context, allPromises);
            destroyClones(global);
            --_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.painting.locks;
            (0,_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paint)();
        });
        // run destroy animations
        allPromises.push(lastPromise);
        return;
    }
    ++_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.painting.locks;
    smartRemoveByContext(global.context, allPromises);
    destroyClones(global);
    --_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.painting.locks;
    (0,_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paint)();
}
function smartRemoveByContext(context, allPromises) {
    for (const subject of context) {
        if (subject.withinOwnerElement) {
            continue; // i live within my owner variable. I will be deleted with owner
        }
        const lastArray = subject.lastArray;
        if (lastArray) {
            (0,_checkDestroyPrevious_function_js__WEBPACK_IMPORTED_MODULE_0__.destroyArray)(subject, lastArray);
            continue;
        }
        // regular values, no placeholders
        const elm = subject.simpleValueElm;
        if (elm) {
            delete subject.simpleValueElm;
            _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintCommands.push([_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintRemover, [elm]]);
            continue;
        }
        const subGlobal = subject.global;
        if (subGlobal === undefined) {
            continue; // subject
        }
        if (subGlobal.deleted === true) {
            continue; // already deleted
        }
        subGlobal.deleted = true;
        const oldest = subGlobal.oldest;
        if (oldest) {
            smartRemoveKids(subGlobal, allPromises);
            continue;
        }
    }
}
/** Destroy dom elements and dom space markers */
function destroyClones(global) {
    const htmlDomMeta = global.htmlDomMeta;
    // check subjects that may have clones attached to them
    htmlDomMeta.forEach(destroyClone);
}
function destroyClone(clone) {
    const marker = clone.marker;
    if (marker) {
        _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintCommands.push([_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintRemover, [marker]]);
    }
    const dom = clone.domElement;
    if (!dom) {
        return;
    }
    _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintCommands.push([_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintRemover, [dom]]);
}
//# sourceMappingURL=smartRemoveKids.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/tag.types.js":
/*!****************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/tag.types.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouteQuery: () => (/* binding */ RouteQuery)
/* harmony export */ });
class RouteQuery {
    get(_name) {
        return 'todo';
    }
}
//# sourceMappingURL=tag.types.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/tag.utils.js":
/*!****************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/tag.utils.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tags: () => (/* binding */ tags)
/* harmony export */ });
const tags = [];
//# sourceMappingURL=tag.utils.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/tagElement.js":
/*!*****************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/tagElement.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appElements: () => (/* binding */ appElements),
/* harmony export */   tagElement: () => (/* binding */ tagElement)
/* harmony export */ });
/* harmony import */ var _update_getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update/getNewGlobal.function.js */ "../../taggedjs/main/dist/js/tag/update/getNewGlobal.function.js");
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _render_destroySupport_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/destroySupport.function.js */ "../../taggedjs/main/dist/js/render/destroySupport.function.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ "../../taggedjs/main/dist/js/tag/index.js");
/* harmony import */ var _state_state_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/state.utils.js */ "../../taggedjs/main/dist/js/state/state.utils.js");
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");
/* harmony import */ var _state_setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/setUseMemory.object.js */ "../../taggedjs/main/dist/js/state/setUseMemory.object.js");
/* harmony import */ var _checkTagValueChange_function_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkTagValueChange.function.js */ "../../taggedjs/main/dist/js/tag/checkTagValueChange.function.js");
/* harmony import */ var _render_renderTagElement_function_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../render/renderTagElement.function.js */ "../../taggedjs/main/dist/js/render/renderTagElement.function.js");
/* harmony import */ var _loadNewBaseSupport_function_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loadNewBaseSupport.function.js */ "../../taggedjs/main/dist/js/tag/loadNewBaseSupport.function.js");










if (document) {
    if (document.taggedJs) {
        console.warn('🏷️🏷️ Multiple versions of taggedjs are loaded. May cause issues.');
    }
    document.taggedJs = true;
}
const appElements = [];
/**
 *
 * @param app taggedjs tag
 * @param element HTMLElement
 * @param props object
 * @returns
 */
function tagElement(app, element, props) {
    const appElmIndex = appElements.findIndex(appElm => appElm.element === element);
    if (appElmIndex >= 0) {
        const support = appElements[appElmIndex].support;
        (0,_render_destroySupport_function_js__WEBPACK_IMPORTED_MODULE_2__.destroySupport)(support, support.subject.global);
        appElements.splice(appElmIndex, 1);
        // an element already had an app on it
        console.warn('Found and destroyed app element already rendered to element', { element });
    }
    // Create the app which returns [props, runOneTimeFunction]
    let templater = (() => templater2(props));
    templater.propWatch = _index_js__WEBPACK_IMPORTED_MODULE_3__.PropWatches.NONE;
    templater.tagJsType = _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.stateRender;
    // todo: props should be an array
    templater.props = [props];
    templater.isApp = true;
    // create observable the app lives on
    const subject = getNewSubject(templater, element);
    const global = subject.global;
    (0,_state_state_utils_js__WEBPACK_IMPORTED_MODULE_4__.initState)(global.newest, _state_setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_6__.setUseMemory.stateConfig);
    let templater2 = app(props);
    const isAppFunction = typeof templater2 == _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__.BasicTypes.function;
    if (!isAppFunction) {
        if (!(0,_isInstance_js__WEBPACK_IMPORTED_MODULE_5__.isTagComponent)(templater2)) {
            templater.tag = templater2;
            templater2 = app;
        }
        else {
            global.newest.propsConfig = {
                latest: [props],
                castProps: [props],
            };
            templater.propWatch = templater2.propWatch;
            templater.tagJsType = templater2.tagJsType;
            templater.wrapper = templater2.wrapper;
            templater = templater2;
        }
    }
    return (0,_render_renderTagElement_function_js__WEBPACK_IMPORTED_MODULE_8__.renderTagElement)(app, global, templater, templater2, element, subject, isAppFunction);
}
function getNewSubject(templater, appElement) {
    const subject = {
        value: templater,
        withinOwnerElement: false, // i am the highest owner
        renderCount: 0,
        global: undefined, // gets set below in getNewGlobal()
        tagJsVar: {
            tagJsType: 'templater',
            checkValueChange: _checkTagValueChange_function_js__WEBPACK_IMPORTED_MODULE_7__.checkTagValueChange,
            delete: _checkTagValueChange_function_js__WEBPACK_IMPORTED_MODULE_7__.destroySupportByContextItem,
            processInit: function appDoNothing() {
                console.debug('do nothing app function');
            }
        }
    };
    const global = (0,_update_getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_0__.getNewGlobal)(subject);
    // for click events and such read at a higher level
    global.events = {};
    (0,_loadNewBaseSupport_function_js__WEBPACK_IMPORTED_MODULE_9__.loadNewBaseSupport)(templater, subject, appElement);
    return subject;
}
//# sourceMappingURL=tagElement.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/tagRunner.js":
/*!****************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/tagRunner.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   runBeforeDestroy: () => (/* binding */ runBeforeDestroy)
/* harmony export */ });
// Life cycle 4 - end of life
function runBeforeDestroy(support, global) {
    const providers = global.providers;
    if (providers) {
        for (const provider of providers) {
            for (let index = provider.children.length - 1; index >= 0; --index) {
                const child = provider.children[index];
                if (child.subject.global === global) {
                    provider.children.splice(index, 1);
                }
            }
        }
    }
    if (global.destroy$) {
        global.destroy$.next();
    }
    support.subject.renderCount = 0; // if it comes back, wont be considered an update
}
//# sourceMappingURL=tagRunner.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/checkSubContext.function.js":
/*!**************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/checkSubContext.function.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkSubContext: () => (/* binding */ checkSubContext)
/* harmony export */ });
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _updateToDiffValue_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateToDiffValue.function.js */ "../../taggedjs/main/dist/js/tag/update/updateToDiffValue.function.js");


function checkSubContext(newValue, ownerSupport, contextItem, _values, counts) {
    if (!newValue || !newValue.tagJsType || newValue.tagJsType !== _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.subscribe) {
        const tagJsVar = contextItem.tagJsVar;
        tagJsVar.delete(contextItem, ownerSupport);
        (0,_updateToDiffValue_function_js__WEBPACK_IMPORTED_MODULE_1__.updateToDiffValue)(newValue, contextItem, ownerSupport, 99, counts);
        return 99;
    }
    const subscription = contextItem.subContext;
    if (!subscription.hasEmitted) {
        return -1;
    }
    subscription.callback = newValue.callback;
    subscription.valueHandler(subscription.lastValue);
    return -1;
}
//# sourceMappingURL=checkSubContext.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/compareArrayItems.function.js":
/*!****************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/compareArrayItems.function.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareArrayItems: () => (/* binding */ compareArrayItems),
/* harmony export */   destroyArrayItem: () => (/* binding */ destroyArrayItem)
/* harmony export */ });
/* harmony import */ var _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");
/* harmony import */ var _render_destroySupport_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/destroySupport.function.js */ "../../taggedjs/main/dist/js/render/destroySupport.function.js");


function compareArrayItems(value, index, lastArray, removed) {
    const newLength = value.length - 1;
    const at = index - removed;
    const lessLength = at < 0 || newLength < at;
    const prevContext = lastArray[index];
    if (lessLength) {
        destroyArrayItem(prevContext);
        return 1;
    }
    const oldKey = prevContext.value.arrayValue;
    const newValueTag = value[index];
    const result = runArrayItemDiff(oldKey, newValueTag, prevContext, lastArray, index);
    return result;
}
function runArrayItemDiff(oldKey, newValueTag, prevContext, lastArray, index) {
    const isDiff = newValueTag && oldKey !== newValueTag.arrayValue;
    if (isDiff) {
        destroyArrayItem(prevContext);
        lastArray.splice(index, 1);
        return 2;
    }
    return 0;
}
function destroyArrayItem(item) {
    const global = item.global;
    destroyArrayItemByGlobal(global, item);
}
function destroyArrayItemByGlobal(global, item) {
    if (global) {
        const support = global.oldest;
        (0,_render_destroySupport_function_js__WEBPACK_IMPORTED_MODULE_1__.destroySupport)(support, global);
        return;
    }
    const element = item.simpleValueElm;
    delete item.simpleValueElm;
    _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintCommands.push([_render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintRemover, [element]]);
}
//# sourceMappingURL=compareArrayItems.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/createAndProcessContextItem.function.js":
/*!**************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/createAndProcessContextItem.function.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAndProcessContextItem: () => (/* binding */ createAndProcessContextItem)
/* harmony export */ });
/* harmony import */ var _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");
/* harmony import */ var _interpolations_optimizers_domProcessContextItem_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interpolations/optimizers/domProcessContextItem.function.js */ "../../taggedjs/main/dist/js/interpolations/optimizers/domProcessContextItem.function.js");
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
// taggedjs-no-compile



/** Must provide insertBefore OR appendTo */
function createAndProcessContextItem(value, ownerSupport, counts, insertBefore, // used during updates
appendTo) {
    const element = document.createTextNode(_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__.empty);
    const contextItem = {
        value,
        withinOwnerElement: false,
        placeholder: element,
    };
    if (!appendTo) {
        _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintCommands.push([_render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintBefore, [insertBefore, element]]);
    }
    (0,_interpolations_optimizers_domProcessContextItem_function_js__WEBPACK_IMPORTED_MODULE_1__.domProcessContextItem)(value, ownerSupport, contextItem, counts, appendTo, insertBefore);
    if (appendTo) {
        _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintAppends.push([_render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintAppend, [appendTo, element]]);
    }
    return contextItem;
}
//# sourceMappingURL=createAndProcessContextItem.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/deleteSubContext.function.js":
/*!***************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/deleteSubContext.function.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteSubContext: () => (/* binding */ deleteSubContext)
/* harmony export */ });
/* harmony import */ var _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");
/* harmony import */ var _tagValueUpdateHandler_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tagValueUpdateHandler.function.js */ "../../taggedjs/main/dist/js/tag/update/tagValueUpdateHandler.function.js");


function deleteSubContext(contextItem, ownerSupport) {
    const subscription = contextItem.subContext;
    subscription.deleted = true;
    delete contextItem.subContext;
    const appendMarker = subscription.appendMarker;
    if (appendMarker) {
        _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintCommands.push([_render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paintRemover, [appendMarker]]);
        delete subscription.appendMarker;
    }
    delete contextItem.delete;
    contextItem.handler = _tagValueUpdateHandler_function_js__WEBPACK_IMPORTED_MODULE_1__.tagValueUpdateHandler;
    if (!subscription.hasEmitted) {
        return;
    }
    const subContextItem = subscription.contextItem;
    const tagJsVar = subContextItem.tagJsVar;
    tagJsVar.delete(subContextItem, ownerSupport);
    return 76;
}
//# sourceMappingURL=deleteSubContext.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/forceUpdateExistingValue.function.js":
/*!***********************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/forceUpdateExistingValue.function.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forceUpdateExistingValue: () => (/* binding */ forceUpdateExistingValue)
/* harmony export */ });
/* harmony import */ var _updateToDiffValue_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateToDiffValue.function.js */ "../../taggedjs/main/dist/js/tag/update/updateToDiffValue.function.js");

/** Used for all tag value updates. Determines if value changed since last render */
function forceUpdateExistingValue(contextItem, newValue, // newValue
ownerSupport, counts) {
    // Have the context check itself (avoid having to detect old value)
    const tagJsVar = contextItem.tagJsVar;
    const ignoreOrDestroyed = tagJsVar.checkValueChange(newValue, contextItem, counts, ownerSupport);
    // ignore
    if (ignoreOrDestroyed === -1) {
        return; // do nothing
    }
    (0,_updateToDiffValue_function_js__WEBPACK_IMPORTED_MODULE_0__.updateToDiffValue)(newValue, contextItem, ownerSupport, ignoreOrDestroyed, counts);
}
//# sourceMappingURL=forceUpdateExistingValue.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/getNewGlobal.function.js":
/*!***********************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/getNewGlobal.function.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNewGlobal: () => (/* binding */ getNewGlobal)
/* harmony export */ });
function getNewGlobal(contextItem) {
    ;
    contextItem.renderCount = contextItem.renderCount || 0;
    return contextItem.global = {};
}
//# sourceMappingURL=getNewGlobal.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/handleStillTag.function.js":
/*!*************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/handleStillTag.function.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleStillTag: () => (/* binding */ handleStillTag)
/* harmony export */ });
/* harmony import */ var _render_update_updateSupportBy_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/update/updateSupportBy.function.js */ "../../taggedjs/main/dist/js/render/update/updateSupportBy.function.js");
/* harmony import */ var _createSupport_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createSupport.function.js */ "../../taggedjs/main/dist/js/tag/createSupport.function.js");


function handleStillTag(oldSupport, subject, value, ownerSupport) {
    // Value is result of either tag(() => html``) or () => html``
    let templater = value.templater || value;
    const oldTtag = oldSupport.templater.tag;
    if (oldTtag) {
        const innerHTML = oldTtag._innerHTML;
        if (innerHTML) {
            // Value has innerHTML that is either tag() or html``
            templater = value.outerHTML || value._innerHTML.outerHTML;
        }
    }
    const valueSupport = (0,_createSupport_function_js__WEBPACK_IMPORTED_MODULE_1__.createSupport)(templater, ownerSupport, ownerSupport.appSupport, subject);
    const lastSubject = oldSupport.subject;
    const newGlobal = lastSubject.global;
    const oldest = newGlobal.oldest;
    (0,_render_update_updateSupportBy_function_js__WEBPACK_IMPORTED_MODULE_0__.updateSupportBy)(oldest, valueSupport);
}
//# sourceMappingURL=handleStillTag.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/index.js":
/*!*******************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkSubContext: () => (/* reexport safe */ _checkSubContext_function_js__WEBPACK_IMPORTED_MODULE_1__.checkSubContext),
/* harmony export */   deleteSubContext: () => (/* reexport safe */ _deleteSubContext_function_js__WEBPACK_IMPORTED_MODULE_0__.deleteSubContext),
/* harmony export */   forceUpdateExistingValue: () => (/* reexport safe */ _forceUpdateExistingValue_function_js__WEBPACK_IMPORTED_MODULE_3__.forceUpdateExistingValue),
/* harmony export */   onFirstSubContext: () => (/* reexport safe */ _onFirstSubContext_function_js__WEBPACK_IMPORTED_MODULE_2__.onFirstSubContext)
/* harmony export */ });
/* harmony import */ var _deleteSubContext_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteSubContext.function.js */ "../../taggedjs/main/dist/js/tag/update/deleteSubContext.function.js");
/* harmony import */ var _checkSubContext_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkSubContext.function.js */ "../../taggedjs/main/dist/js/tag/update/checkSubContext.function.js");
/* harmony import */ var _onFirstSubContext_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onFirstSubContext.function.js */ "../../taggedjs/main/dist/js/tag/update/onFirstSubContext.function.js");
/* harmony import */ var _forceUpdateExistingValue_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forceUpdateExistingValue.function.js */ "../../taggedjs/main/dist/js/tag/update/forceUpdateExistingValue.function.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/onFirstSubContext.function.js":
/*!****************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/onFirstSubContext.function.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onFirstSubContext: () => (/* binding */ onFirstSubContext)
/* harmony export */ });
/* harmony import */ var _createAndProcessContextItem_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAndProcessContextItem.function.js */ "../../taggedjs/main/dist/js/tag/update/createAndProcessContextItem.function.js");

function onFirstSubContext(value, subContext, ownerSupport, // ownerSupport ?
counts, // used for animation stagger computing
insertBefore) {
    subContext.hasEmitted = true;
    subContext.contextItem = (0,_createAndProcessContextItem_function_js__WEBPACK_IMPORTED_MODULE_0__.createAndProcessContextItem)(value, ownerSupport, counts, insertBefore);
}
//# sourceMappingURL=onFirstSubContext.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/oneRenderToSupport.function.js":
/*!*****************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/oneRenderToSupport.function.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oneRenderToSupport: () => (/* binding */ oneRenderToSupport)
/* harmony export */ });
/* harmony import */ var _getTemplaterResult_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getTemplaterResult.function.js */ "../../taggedjs/main/dist/js/tag/getTemplaterResult.function.js");
/* harmony import */ var _render_update_processTag_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/update/processTag.function.js */ "../../taggedjs/main/dist/js/render/update/processTag.function.js");
/* harmony import */ var _tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tagJsVars/tag.function.js */ "../../taggedjs/main/dist/js/tagJsVars/tag.function.js");



function oneRenderToSupport(wrapper, subject, ownerSupport) {
    const templater = (0,_getTemplaterResult_function_js__WEBPACK_IMPORTED_MODULE_0__.getTemplaterResult)(_tagJsVars_tag_function_js__WEBPACK_IMPORTED_MODULE_2__.PropWatches.DEEP);
    templater.tagJsType = wrapper.tagJsType;
    const support = (0,_render_update_processTag_function_js__WEBPACK_IMPORTED_MODULE_1__.newSupportByTemplater)(templater, ownerSupport, subject);
    let tag;
    function wrap() {
        templater.tag = tag || wrapper();
        return support;
    }
    templater.wrapper = wrap;
    wrap.tagJsType = wrapper.tagJsType;
    wrap.original = wrapper.original || wrapper;
    return support;
}
//# sourceMappingURL=oneRenderToSupport.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/processDomTagInit.function.js":
/*!****************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/processDomTagInit.function.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processDomTagInit: () => (/* binding */ processDomTagInit)
/* harmony export */ });
/* harmony import */ var _render_update_processTag_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/update/processTag.function.js */ "../../taggedjs/main/dist/js/render/update/processTag.function.js");
/* harmony import */ var _getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNewGlobal.function.js */ "../../taggedjs/main/dist/js/tag/update/getNewGlobal.function.js");
/* harmony import */ var _processNewSubjectTag_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processNewSubjectTag.function.js */ "../../taggedjs/main/dist/js/tag/update/processNewSubjectTag.function.js");



function processDomTagInit(value, // StringTag,
contextItem, // could be tag via result.tag
ownerSupport, // owningSupport
counts, appendTo, insertBefore) {
    console.log('processDomTagInit - 1', {
        appendTo,
        insertBefore,
        parentNode: insertBefore?.parentNode,
        placeholder: contextItem.placeholder,
        placeholderParentNode: contextItem.placeholder?.parentNode,
        contextItem,
    });
    const tag = value;
    let templater = tag.templater;
    if (!templater) {
        templater = (0,_render_update_processTag_function_js__WEBPACK_IMPORTED_MODULE_0__.tagFakeTemplater)(tag);
    }
    const global = (0,_getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_1__.getNewGlobal)(contextItem);
    if (appendTo) {
        return (0,_processNewSubjectTag_function_js__WEBPACK_IMPORTED_MODULE_2__.processNewSubjectTag)(templater, contextItem, ownerSupport, counts, appendTo, insertBefore);
    }
    global.newest = (0,_render_update_processTag_function_js__WEBPACK_IMPORTED_MODULE_0__.newSupportByTemplater)(templater, ownerSupport, contextItem);
    console.log('processDomTagInit - 2', {
        appendTo,
        insertBefore,
        parentNode: insertBefore?.parentNode,
        placeholder: contextItem.placeholder,
        placeholderParentNode: contextItem.placeholder?.parentNode,
        contextItem,
    });
    return (0,_render_update_processTag_function_js__WEBPACK_IMPORTED_MODULE_0__.processTag)(ownerSupport, contextItem, counts);
}
//# sourceMappingURL=processDomTagInit.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/processFirstSubjectComponent.function.js":
/*!***************************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/processFirstSubjectComponent.function.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processFirstSubjectComponent: () => (/* binding */ processFirstSubjectComponent),
/* harmony export */   processReplacementComponent: () => (/* binding */ processReplacementComponent)
/* harmony export */ });
/* harmony import */ var _processTagResult_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processTagResult.function.js */ "../../taggedjs/main/dist/js/tag/update/processTagResult.function.js");
/* harmony import */ var _render_renderWithSupport_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/renderWithSupport.function.js */ "../../taggedjs/main/dist/js/render/renderWithSupport.function.js");
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _getTagWrap_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getTagWrap.function.js */ "../../taggedjs/main/dist/js/tag/getTagWrap.function.js");
/* harmony import */ var _createSupport_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../createSupport.function.js */ "../../taggedjs/main/dist/js/tag/createSupport.function.js");





function processReplacementComponent(templater, subject, ownerSupport, counts) {
    // TODO: This below check not needed in production mode
    // validateTemplater(templater)
    const newSupport = (0,_createSupport_function_js__WEBPACK_IMPORTED_MODULE_4__.createSupport)(templater, ownerSupport, ownerSupport.appSupport, subject);
    const newPropsConfig = newSupport.propsConfig;
    if (newPropsConfig) {
        const castedProps = templater.tagJsType !== _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__.ValueTypes.tagComponent ? [] : (0,_getTagWrap_function_js__WEBPACK_IMPORTED_MODULE_3__.getCastedProps)(templater, newSupport);
        newPropsConfig.castProps = castedProps;
    }
    const global = subject.global;
    const { support } = (0,_render_renderWithSupport_function_js__WEBPACK_IMPORTED_MODULE_1__.renderWithSupport)(newSupport, global.newest, // existing tag
    subject, ownerSupport);
    (0,_processTagResult_function_js__WEBPACK_IMPORTED_MODULE_0__.processReplaceTagResult)(support, counts, subject);
    return support;
}
function processFirstSubjectComponent(templater, subject, ownerSupport, counts, appendTo) {
    // TODO: This below check not needed in production mode
    // validateTemplater(templater)
    const newSupport = (0,_createSupport_function_js__WEBPACK_IMPORTED_MODULE_4__.createSupport)(templater, ownerSupport, ownerSupport.appSupport, subject);
    const newPropsConfig = newSupport.propsConfig;
    if (newPropsConfig) {
        const castedProps = templater.tagJsType !== _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_2__.ValueTypes.tagComponent ? [] : (0,_getTagWrap_function_js__WEBPACK_IMPORTED_MODULE_3__.getCastedProps)(templater, newSupport);
        newPropsConfig.castProps = castedProps;
    }
    const global = subject.global;
    const { support } = (0,_render_renderWithSupport_function_js__WEBPACK_IMPORTED_MODULE_1__.renderWithSupport)(newSupport, global.newest, // existing tag   
    subject, ownerSupport);
    (0,_processTagResult_function_js__WEBPACK_IMPORTED_MODULE_0__.processFirstTagResult)(support, counts, appendTo);
    return support;
}
//# sourceMappingURL=processFirstSubjectComponent.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/processFirstSubjectValue.function.js":
/*!***********************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/processFirstSubjectValue.function.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processFirstSubjectValue: () => (/* binding */ processFirstSubjectValue)
/* harmony export */ });
/* harmony import */ var _tagJsVars_valueToTagJsVar_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tagJsVars/valueToTagJsVar.function.js */ "../../taggedjs/main/dist/js/tagJsVars/valueToTagJsVar.function.js");

function processFirstSubjectValue(value, contextItem, // could be tag via result.tag
ownerSupport, // owningSupport
counts, appendTo, insertBefore) {
    const tagJsVar = (0,_tagJsVars_valueToTagJsVar_function_js__WEBPACK_IMPORTED_MODULE_0__.valueToTagJsVar)(value);
    contextItem.tagJsVar = tagJsVar;
    return tagJsVar.processInit(value, contextItem, ownerSupport, counts, appendTo, insertBefore);
}
//# sourceMappingURL=processFirstSubjectValue.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/processNewSubjectTag.function.js":
/*!*******************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/processNewSubjectTag.function.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processNewSubjectTag: () => (/* binding */ processNewSubjectTag)
/* harmony export */ });
/* harmony import */ var _render_buildBeforeElement_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/buildBeforeElement.function.js */ "../../taggedjs/main/dist/js/render/buildBeforeElement.function.js");
/* harmony import */ var _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");
/* harmony import */ var _render_update_processTag_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/update/processTag.function.js */ "../../taggedjs/main/dist/js/render/update/processTag.function.js");



function processNewSubjectTag(templater, subject, // could be tag via result.tag
ownerSupport, // owner
counts, appendTo, insertBefore) {
    const support = (0,_render_update_processTag_function_js__WEBPACK_IMPORTED_MODULE_2__.newSupportByTemplater)(templater, ownerSupport, subject);
    support.ownerSupport = ownerSupport;
    const result = (0,_render_buildBeforeElement_function_js__WEBPACK_IMPORTED_MODULE_0__.buildBeforeElement)(support, counts, appendTo, appendTo ? undefined : insertBefore);
    for (const dom of result.dom) {
        if (dom.marker) {
            if (appendTo) {
                _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintAppends.push([_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintAppend, [appendTo, dom.marker]]);
            }
            else {
                _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintCommands.push([_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintBefore, [insertBefore, dom.marker]]);
            }
        }
        if (dom.domElement) {
            if (appendTo) {
                _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintAppends.push([_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintAppend, [appendTo, dom.domElement]]);
            }
            else {
                _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintCommands.push([_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintBefore, [insertBefore, dom.domElement]]);
            }
        }
    }
    return support;
}
//# sourceMappingURL=processNewSubjectTag.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/processRegularValue.function.js":
/*!******************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/processRegularValue.function.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processNowRegularValue: () => (/* binding */ processNowRegularValue),
/* harmony export */   processUpdateRegularValue: () => (/* binding */ processUpdateRegularValue)
/* harmony export */ });
/* harmony import */ var _castTextValue_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../castTextValue.function.js */ "../../taggedjs/main/dist/js/castTextValue.function.js");
/* harmony import */ var _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");
/* harmony import */ var _tagJsVars_getSimpleTagVar_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tagJsVars/getSimpleTagVar.function.js */ "../../taggedjs/main/dist/js/tagJsVars/getSimpleTagVar.function.js");



function processUpdateRegularValue(value, contextItem) {
    const castedValue = (0,_castTextValue_function_js__WEBPACK_IMPORTED_MODULE_0__.castTextValue)(value);
    if (contextItem.paint) {
        // its already painting, just provide new text paint[function, [element, text]]
        contextItem.paint[1][1] = castedValue;
        return;
    }
    const oldClone = contextItem.simpleValueElm; // placeholder
    _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.setContent.push([castedValue, oldClone]);
}
/** Used during updates that were another value/tag first but now simple string */
function processNowRegularValue(value, contextItem) {
    contextItem.value = value;
    contextItem.tagJsVar = (0,_tagJsVars_getSimpleTagVar_function_js__WEBPACK_IMPORTED_MODULE_2__.getSimpleTagVar)(value);
    const before = contextItem.placeholder;
    const castedValue = (0,_castTextValue_function_js__WEBPACK_IMPORTED_MODULE_0__.castTextValue)(value);
    const paint = contextItem.paint = [_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintBeforeText, [before, castedValue, function cleanRegularValue(x) {
                contextItem.simpleValueElm = x;
                delete contextItem.paint;
            }]];
    _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintCommands.push(paint);
}
//# sourceMappingURL=processRegularValue.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/processSubscribe.function.js":
/*!***************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/processSubscribe.function.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processSignal: () => (/* binding */ processSignal),
/* harmony export */   processSubscribe: () => (/* binding */ processSubscribe),
/* harmony export */   processSubscribeWith: () => (/* binding */ processSubscribeWith)
/* harmony export */ });
/* harmony import */ var _setupSubscribe_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setupSubscribe.function.js */ "../../taggedjs/main/dist/js/tag/update/setupSubscribe.function.js");

function processSubscribe(value, contextItem, ownerSupport, counts, appendTo, insertBefore) {
    return (0,_setupSubscribe_function_js__WEBPACK_IMPORTED_MODULE_0__.setupSubscribe)(value.Observable, contextItem, ownerSupport, counts, value.callback, appendTo, insertBefore);
}
function processSubscribeWith(value, contextItem, ownerSupport, counts, appendTo, insertBefore) {
    const observable = value.Observable;
    const subscription = (0,_setupSubscribe_function_js__WEBPACK_IMPORTED_MODULE_0__.setupSubscribe)(observable, contextItem, ownerSupport, counts, value.callback, appendTo, insertBefore);
    if (!subscription.hasEmitted) {
        subscription.valueHandler((observable.value || value.withDefault));
    }
    return subscription;
}
function processSignal(value, contextItem, ownerSupport, counts, appendTo) {
    (0,_setupSubscribe_function_js__WEBPACK_IMPORTED_MODULE_0__.setupSubscribe)(value, contextItem, ownerSupport, counts, undefined, appendTo);
}
//# sourceMappingURL=processSubscribe.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/processTagArray.js":
/*!*****************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/processTagArray.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processTagArray: () => (/* binding */ processTagArray)
/* harmony export */ });
/* harmony import */ var _tagValueUpdateHandler_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tagValueUpdateHandler.function.js */ "../../taggedjs/main/dist/js/tag/update/tagValueUpdateHandler.function.js");
/* harmony import */ var _compareArrayItems_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compareArrayItems.function.js */ "../../taggedjs/main/dist/js/tag/update/compareArrayItems.function.js");
/* harmony import */ var _createAndProcessContextItem_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createAndProcessContextItem.function.js */ "../../taggedjs/main/dist/js/tag/update/createAndProcessContextItem.function.js");
// taggedjs-no-compile



function processTagArray(subject, value, // arry of Tag classes
ownerSupport, counts, appendTo) {
    const noLast = subject.lastArray === undefined;
    if (noLast) {
        subject.lastArray = [];
    }
    const lastArray = subject.lastArray;
    let runtimeInsertBefore = subject.placeholder;
    let removed = 0;
    /** 🗑️ remove previous items first */
    const filteredLast = [];
    // if not first time, then check for deletes
    if (!noLast) {
        // on each loop check the new length
        for (let index = 0; index < lastArray.length; ++index) {
            const item = lastArray[index];
            // 👁️ COMPARE & REMOVE
            const newRemoved = (0,_compareArrayItems_function_js__WEBPACK_IMPORTED_MODULE_1__.compareArrayItems)(value, index, lastArray, removed);
            if (newRemoved === 0) {
                filteredLast.push(item);
                continue;
            }
            // do the same number again because it was a mid delete
            if (newRemoved === 2) {
                index = index - 1;
                continue;
            }
            removed = removed + newRemoved;
        }
        subject.lastArray = filteredLast;
    }
    const length = value.length;
    for (let index = 0; index < length; ++index) {
        const newSubject = reviewArrayItem(value, index, subject.lastArray, ownerSupport, runtimeInsertBefore, counts, appendTo);
        runtimeInsertBefore = newSubject.placeholder;
    }
}
function reviewArrayItem(array, index, lastArray, ownerSupport, runtimeInsertBefore, // used during updates
counts, appendTo) {
    const item = array[index];
    const previous = lastArray[index];
    if (previous) {
        return reviewPreviousArrayItem(item, previous, lastArray, ownerSupport, index, runtimeInsertBefore, counts, appendTo);
    }
    const contextItem = (0,_createAndProcessContextItem_function_js__WEBPACK_IMPORTED_MODULE_2__.createAndProcessContextItem)(item, ownerSupport, counts, runtimeInsertBefore, appendTo);
    // Added to previous array
    lastArray.push(contextItem);
    return contextItem;
}
function reviewPreviousArrayItem(value, itemSubject, lastArray, ownerSupport, index, runtimeInsertBefore, // used during updates
counts, appendTo) {
    const couldBeSame = lastArray.length > index;
    if (couldBeSame) {
        (0,_tagValueUpdateHandler_function_js__WEBPACK_IMPORTED_MODULE_0__.tagValueUpdateHandler)(value, ownerSupport, itemSubject, undefined, counts);
        return itemSubject;
    }
    const contextItem = (0,_createAndProcessContextItem_function_js__WEBPACK_IMPORTED_MODULE_2__.createAndProcessContextItem)(value, ownerSupport, counts, runtimeInsertBefore, appendTo);
    // Added to previous array
    lastArray.push(contextItem);
    return contextItem;
}
//# sourceMappingURL=processTagArray.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/processTagComponentInit.function.js":
/*!**********************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/processTagComponentInit.function.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processTagComponentInit: () => (/* binding */ processTagComponentInit)
/* harmony export */ });
/* harmony import */ var _processFirstSubjectComponent_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processFirstSubjectComponent.function.js */ "../../taggedjs/main/dist/js/tag/update/processFirstSubjectComponent.function.js");
/* harmony import */ var _getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNewGlobal.function.js */ "../../taggedjs/main/dist/js/tag/update/getNewGlobal.function.js");


function processTagComponentInit(value, contextItem, // could be tag via result.tag
ownerSupport, // owningSupport
counts, appendTo) {
    (0,_getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_1__.getNewGlobal)(contextItem);
    if (appendTo) {
        const processResult = (0,_processFirstSubjectComponent_function_js__WEBPACK_IMPORTED_MODULE_0__.processFirstSubjectComponent)(value, contextItem, ownerSupport, counts, appendTo);
        return processResult;
    }
    const processResult = (0,_processFirstSubjectComponent_function_js__WEBPACK_IMPORTED_MODULE_0__.processReplacementComponent)(value, contextItem, ownerSupport, counts);
    return processResult;
}
//# sourceMappingURL=processTagComponentInit.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/processTagInit.function.js":
/*!*************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/processTagInit.function.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processTagInit: () => (/* binding */ processTagInit)
/* harmony export */ });
/* harmony import */ var _render_update_processTag_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/update/processTag.function.js */ "../../taggedjs/main/dist/js/render/update/processTag.function.js");
/* harmony import */ var _processNewSubjectTag_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processNewSubjectTag.function.js */ "../../taggedjs/main/dist/js/tag/update/processNewSubjectTag.function.js");


function processTagInit(value, contextItem, ownerSupport, counts, appendTo, insertBefore) {
    if (appendTo) {
        return (0,_processNewSubjectTag_function_js__WEBPACK_IMPORTED_MODULE_1__.processNewSubjectTag)(value, contextItem, ownerSupport, counts, appendTo, insertBefore);
    }
    console.log('process a new tag', {
        insertBefore, appendTo,
    });
    return (0,_render_update_processTag_function_js__WEBPACK_IMPORTED_MODULE_0__.processTag)(ownerSupport, contextItem, counts);
}
//# sourceMappingURL=processTagInit.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/processTagResult.function.js":
/*!***************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/processTagResult.function.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processFirstTagResult: () => (/* binding */ processFirstTagResult),
/* harmony export */   processReplaceTagResult: () => (/* binding */ processReplaceTagResult)
/* harmony export */ });
/* harmony import */ var _render_buildBeforeElement_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/buildBeforeElement.function.js */ "../../taggedjs/main/dist/js/render/buildBeforeElement.function.js");
/* harmony import */ var _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");


function processReplaceTagResult(support, counts, contextItem) {
    const ph = contextItem.placeholder;
    (0,_render_buildBeforeElement_function_js__WEBPACK_IMPORTED_MODULE_0__.buildBeforeElement)(support, counts, undefined, // element for append child
    ph);
    return support;
}
function processFirstTagResult(support, counts, appendTo) {
    let appendIndex = _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintAppends.length;
    const result = (0,_render_buildBeforeElement_function_js__WEBPACK_IMPORTED_MODULE_0__.buildBeforeElement)(support, counts, appendTo, undefined);
    for (const dom of result.dom) {
        if (dom.domElement) {
            _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintAppends.splice(appendIndex++, 0, [_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintAppend, [appendTo, dom.domElement]]);
        }
        if (dom.marker) {
            _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintAppends.splice(appendIndex++, 0, [_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintAppend, [appendTo, dom.marker]]);
        }
    }
    return support;
}
//# sourceMappingURL=processTagResult.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/setupSubscribe.function.js":
/*!*************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/setupSubscribe.function.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteAndUnsubscribe: () => (/* binding */ deleteAndUnsubscribe),
/* harmony export */   setupSubscribe: () => (/* binding */ setupSubscribe),
/* harmony export */   setupSubscribeCallbackProcessor: () => (/* binding */ setupSubscribeCallbackProcessor)
/* harmony export */ });
/* harmony import */ var _render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");
/* harmony import */ var _state_setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/setUseMemory.object.js */ "../../taggedjs/main/dist/js/state/setUseMemory.object.js");
/* harmony import */ var _state_syncStates_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/syncStates.function.js */ "../../taggedjs/main/dist/js/state/syncStates.function.js");
/* harmony import */ var _forceUpdateExistingValue_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forceUpdateExistingValue.function.js */ "../../taggedjs/main/dist/js/tag/update/forceUpdateExistingValue.function.js");
/* harmony import */ var _interpolations_attributes_getSupportWithState_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interpolations/attributes/getSupportWithState.function.js */ "../../taggedjs/main/dist/js/interpolations/attributes/getSupportWithState.function.js");
/* harmony import */ var _deleteSubContext_function_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deleteSubContext.function.js */ "../../taggedjs/main/dist/js/tag/update/deleteSubContext.function.js");
/* harmony import */ var _checkSubContext_function_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkSubContext.function.js */ "../../taggedjs/main/dist/js/tag/update/checkSubContext.function.js");
/* harmony import */ var _onFirstSubContext_function_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./onFirstSubContext.function.js */ "../../taggedjs/main/dist/js/tag/update/onFirstSubContext.function.js");
/* harmony import */ var _guaranteeInsertBefore_function_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../guaranteeInsertBefore.function.js */ "../../taggedjs/main/dist/js/tag/guaranteeInsertBefore.function.js");









function setupSubscribe(observable, contextItem, ownerSupport, counts, callback, appendTo, insertBeforeOriginal) {
    const { appendMarker, insertBefore } = (0,_guaranteeInsertBefore_function_js__WEBPACK_IMPORTED_MODULE_8__.guaranteeInsertBefore)(appendTo, insertBeforeOriginal);
    const subContext = setupSubscribeCallbackProcessor(observable, ownerSupport, counts, insertBefore, callback);
    subContext.appendMarker = appendMarker;
    contextItem.subContext = subContext;
    contextItem.handler = _checkSubContext_function_js__WEBPACK_IMPORTED_MODULE_6__.checkSubContext;
    return subContext;
}
function setupSubscribeCallbackProcessor(observable, ownerSupport, // ownerSupport ?
counts, // used for animation stagger computing
insertBefore, callback) {
    const component = (0,_interpolations_attributes_getSupportWithState_function_js__WEBPACK_IMPORTED_MODULE_4__.getSupportWithState)(ownerSupport);
    let onValue = function onSubValue(value) {
        (0,_onFirstSubContext_function_js__WEBPACK_IMPORTED_MODULE_7__.onFirstSubContext)(value, subContext, ownerSupport, counts, insertBefore);
        // from now on just run update
        onValue = function subscriptionUpdate(value) {
            (0,_forceUpdateExistingValue_function_js__WEBPACK_IMPORTED_MODULE_3__.forceUpdateExistingValue)(subContext.contextItem, value, ownerSupport, { added: 0, removed: 0 });
            if (!syncRun && !_state_setUseMemory_object_js__WEBPACK_IMPORTED_MODULE_1__.setUseMemory.stateConfig.support) {
                (0,_render_paint_function_js__WEBPACK_IMPORTED_MODULE_0__.paint)();
            }
        };
    };
    // onValue mutates so function below calls original and mutation
    function valueHandler(value) {
        subContext.lastValue = value;
        const newComponent = component.subject.global.newest;
        (0,_state_syncStates_function_js__WEBPACK_IMPORTED_MODULE_2__.syncSupports)(newComponent, component);
        if (subContext.callback) {
            value = subContext.callback(value);
        }
        onValue(value);
    }
    let syncRun = true;
    const subContext = {
        valueHandler,
        callback,
    };
    // HINT: Must subscribe AFTER initial variable created above incase subscribing causes immediate run
    subContext.subscription = observable.subscribe(valueHandler);
    syncRun = false;
    return subContext;
}
function deleteAndUnsubscribe(contextItem, ownerSupport) {
    const subscription = contextItem.subContext;
    subscription.subscription.unsubscribe();
    return (0,_deleteSubContext_function_js__WEBPACK_IMPORTED_MODULE_5__.deleteSubContext)(contextItem, ownerSupport);
}
//# sourceMappingURL=setupSubscribe.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/syncPriorPropFunction.function.js":
/*!********************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/syncPriorPropFunction.function.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   syncPriorPropFunction: () => (/* binding */ syncPriorPropFunction)
/* harmony export */ });
/* harmony import */ var _props_alterProp_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../props/alterProp.function.js */ "../../taggedjs/main/dist/js/tag/props/alterProp.function.js");
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");
/* harmony import */ var _updateExistingObject_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateExistingObject.function.js */ "../../taggedjs/main/dist/js/tag/update/updateExistingObject.function.js");
/* harmony import */ var _updateExistingArray_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateExistingArray.function.js */ "../../taggedjs/main/dist/js/tag/update/updateExistingArray.function.js");





function syncPriorPropFunction(priorProp, prop, newSupport, ownerSupport, maxDepth, depth) {
    if (priorProp === undefined || priorProp === null) {
        return prop;
    }
    // prevent infinite recursion
    if (depth > maxDepth) {
        return prop;
    }
    if (typeof (priorProp) === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_1__.BasicTypes.function) {
        // the prop i am receiving, is already being monitored/controlled by another parent
        if (prop.mem) {
            priorProp.mem = prop.mem;
            return prop;
        }
        priorProp.mem = prop;
        return priorProp;
    }
    if ((0,_props_alterProp_function_js__WEBPACK_IMPORTED_MODULE_0__.isSkipPropValue)(prop)) {
        return prop; // no children to crawl through
    }
    if ((0,_isInstance_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(prop)) {
        return (0,_updateExistingArray_function_js__WEBPACK_IMPORTED_MODULE_4__.updateExistingArray)(prop, priorProp, newSupport, ownerSupport, depth, maxDepth);
    }
    return (0,_updateExistingObject_function_js__WEBPACK_IMPORTED_MODULE_3__.updateExistingObject)(prop, priorProp, newSupport, ownerSupport, depth, maxDepth);
}
//# sourceMappingURL=syncPriorPropFunction.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/tagValueUpdateHandler.function.js":
/*!********************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/tagValueUpdateHandler.function.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prepareUpdateToComponent: () => (/* binding */ prepareUpdateToComponent),
/* harmony export */   tagValueUpdateHandler: () => (/* binding */ tagValueUpdateHandler)
/* harmony export */ });
/* harmony import */ var _render_update_updateExistingTagComponent_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/update/updateExistingTagComponent.function.js */ "../../taggedjs/main/dist/js/render/update/updateExistingTagComponent.function.js");
/* harmony import */ var _forceUpdateExistingValue_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forceUpdateExistingValue.function.js */ "../../taggedjs/main/dist/js/tag/update/forceUpdateExistingValue.function.js");
/* harmony import */ var _createSupport_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createSupport.function.js */ "../../taggedjs/main/dist/js/tag/createSupport.function.js");



/** Checks if value has changed before updating. Used for all tag value updates. Determines if value changed since last render */
function tagValueUpdateHandler(newValue, // newValue
ownerSupport, contextItem, _values, counts) {
    // Do not continue if the value is just the same
    if (newValue === contextItem.value) {
        return;
    }
    (0,_forceUpdateExistingValue_function_js__WEBPACK_IMPORTED_MODULE_1__.forceUpdateExistingValue)(contextItem, newValue, ownerSupport, counts);
}
function prepareUpdateToComponent(templater, contextItem, ownerSupport, counts) {
    const global = contextItem.global;
    // When last value was not a component
    if (!global.newest) {
        console.log('updating into a tag', contextItem);
        templater.processInit(templater, contextItem, ownerSupport, counts, undefined, // appendTo,
        contextItem.placeholder);
        return;
    }
    const support = (0,_createSupport_function_js__WEBPACK_IMPORTED_MODULE_2__.createSupport)(templater, ownerSupport, ownerSupport.appSupport, contextItem);
    (0,_render_update_updateExistingTagComponent_function_js__WEBPACK_IMPORTED_MODULE_0__.updateExistingTagComponent)(ownerSupport, support, // latest value
    contextItem);
}
//# sourceMappingURL=tagValueUpdateHandler.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/tryUpdateToTag.function.js":
/*!*************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/tryUpdateToTag.function.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tryUpdateToTag: () => (/* binding */ tryUpdateToTag)
/* harmony export */ });
/* harmony import */ var _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");
/* harmony import */ var _getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNewGlobal.function.js */ "../../taggedjs/main/dist/js/tag/update/getNewGlobal.function.js");
/* harmony import */ var _handleStillTag_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleStillTag.function.js */ "../../taggedjs/main/dist/js/tag/update/handleStillTag.function.js");
/* harmony import */ var _tagValueUpdateHandler_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tagValueUpdateHandler.function.js */ "../../taggedjs/main/dist/js/tag/update/tagValueUpdateHandler.function.js");





/** result is an indication to ignore further processing but that does not seem in use anymore */
function tryUpdateToTag(contextItem, newValue, // newValue
ownerSupport, counts) {
    const isComp = (0,_isInstance_js__WEBPACK_IMPORTED_MODULE_1__.isTagComponent)(newValue);
    if (isComp) {
        if (contextItem.global === undefined) {
            (0,_getNewGlobal_function_js__WEBPACK_IMPORTED_MODULE_2__.getNewGlobal)(contextItem);
        }
        (0,_tagValueUpdateHandler_function_js__WEBPACK_IMPORTED_MODULE_4__.prepareUpdateToComponent)(newValue, contextItem, ownerSupport, counts);
        return true;
    }
    // detect if previous value was a tag
    const global = contextItem.global;
    if (global) {
        // its html/dom based tag
        const support = global.newest;
        if (support) {
            if (typeof (newValue) === _ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_0__.BasicTypes.function) {
                return true;
            }
            (0,_handleStillTag_function_js__WEBPACK_IMPORTED_MODULE_3__.handleStillTag)(support, contextItem, newValue, ownerSupport);
            return true;
        }
    }
    console.log('goto tag', {
        placeholder: contextItem.placeholder,
        parent: contextItem.placeholder?.parentNode,
        contextItem,
        processInit: newValue.processInit,
        newValue,
    });
    newValue.processInit(newValue, contextItem, ownerSupport, counts, undefined, // appendTo,
    contextItem.placeholder);
    return true;
}
//# sourceMappingURL=tryUpdateToTag.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/updateExistingArray.function.js":
/*!******************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/updateExistingArray.function.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateExistingArray: () => (/* binding */ updateExistingArray)
/* harmony export */ });
/* harmony import */ var _syncPriorPropFunction_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./syncPriorPropFunction.function.js */ "../../taggedjs/main/dist/js/tag/update/syncPriorPropFunction.function.js");

function updateExistingArray(prop, priorProp, newSupport, ownerSupport, depth, maxDepth) {
    for (let index = prop.length - 1; index >= 0; --index) {
        const x = prop[index];
        const oldProp = priorProp[index];
        prop[index] = (0,_syncPriorPropFunction_function_js__WEBPACK_IMPORTED_MODULE_0__.syncPriorPropFunction)(oldProp, x, newSupport, ownerSupport, maxDepth, depth + 1);
    }
    return prop;
}
//# sourceMappingURL=updateExistingArray.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/updateExistingObject.function.js":
/*!*******************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/updateExistingObject.function.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateExistingObject: () => (/* binding */ updateExistingObject)
/* harmony export */ });
/* harmony import */ var _syncPriorPropFunction_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./syncPriorPropFunction.function.js */ "../../taggedjs/main/dist/js/tag/update/syncPriorPropFunction.function.js");

function updateExistingObject(prop, priorProp, newSupport, ownerSupport, depth, maxDepth) {
    const keys = Object.keys(prop);
    for (const name of keys) {
        const subValue = prop[name];
        const oldProp = priorProp[name];
        const result = (0,_syncPriorPropFunction_function_js__WEBPACK_IMPORTED_MODULE_0__.syncPriorPropFunction)(oldProp, subValue, newSupport, ownerSupport, maxDepth, depth + 1);
        if (subValue === result) {
            continue;
        }
        const hasSetter = Object.getOwnPropertyDescriptor(prop, name)?.set;
        if (hasSetter) {
            continue;
        }
        prop[name] = result;
    }
    return prop;
}
//# sourceMappingURL=updateExistingObject.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tag/update/updateToDiffValue.function.js":
/*!****************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tag/update/updateToDiffValue.function.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateToDiffValue: () => (/* binding */ updateToDiffValue)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "../../taggedjs/main/dist/js/tag/index.js");
/* harmony import */ var _tryUpdateToTag_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tryUpdateToTag.function.js */ "../../taggedjs/main/dist/js/tag/update/tryUpdateToTag.function.js");
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");
/* harmony import */ var _processTagArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./processTagArray.js */ "../../taggedjs/main/dist/js/tag/update/processTagArray.js");
/* harmony import */ var _processRegularValue_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./processRegularValue.function.js */ "../../taggedjs/main/dist/js/tag/update/processRegularValue.function.js");
/* harmony import */ var _tagJsVars_getArrayTagJsVar_function_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tagJsVars/getArrayTagJsVar.function.js */ "../../taggedjs/main/dist/js/tagJsVars/getArrayTagJsVar.function.js");






function updateToDiffValue(newValue, contextItem, ownerSupport, ignoreOrDestroyed, counts) {
    // is new value a tag?
    const tagJsType = newValue && newValue.tagJsType;
    if (tagJsType) {
        if (tagJsType === _index_js__WEBPACK_IMPORTED_MODULE_0__.ValueTypes.renderOnce) {
            return;
        }
        (0,_tryUpdateToTag_function_js__WEBPACK_IMPORTED_MODULE_1__.tryUpdateToTag)(contextItem, newValue, ownerSupport, counts);
        return;
    }
    if ((0,_isInstance_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(newValue)) {
        (0,_processTagArray_js__WEBPACK_IMPORTED_MODULE_3__.processTagArray)(contextItem, newValue, ownerSupport, counts);
        contextItem.tagJsVar = (0,_tagJsVars_getArrayTagJsVar_function_js__WEBPACK_IMPORTED_MODULE_5__.getArrayTagVar)(newValue);
        return;
    }
    if (typeof (newValue) === _index_js__WEBPACK_IMPORTED_MODULE_0__.BasicTypes.function) {
        contextItem.value = newValue; // do not render functions that are not explicity defined as tag html processing
        return;
    }
    if (ignoreOrDestroyed) {
        (0,_processRegularValue_function_js__WEBPACK_IMPORTED_MODULE_4__.processNowRegularValue)(newValue, contextItem);
    }
}
//# sourceMappingURL=updateToDiffValue.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tagJsVars/checkSimpleValueChange.function.js":
/*!********************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tagJsVars/checkSimpleValueChange.function.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkSimpleValueChange: () => (/* binding */ checkSimpleValueChange)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "../../taggedjs/main/dist/js/index.js");
/* harmony import */ var _tag_update_processRegularValue_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag/update/processRegularValue.function.js */ "../../taggedjs/main/dist/js/tag/update/processRegularValue.function.js");


function checkSimpleValueChange(newValue, contextItem) {
    const isBadValue = newValue === null || newValue === undefined;
    if (isBadValue || !(typeof (newValue) === _index_js__WEBPACK_IMPORTED_MODULE_0__.BasicTypes.object)) {
        // This will cause all other values to render
        (0,_tag_update_processRegularValue_function_js__WEBPACK_IMPORTED_MODULE_1__.processUpdateRegularValue)(newValue, contextItem);
        return -1; // no need to destroy, just update display
    }
    console.log('old place holder - 0', {
        simpleValueElm: contextItem.simpleValueElm,
        placeholder: contextItem.placeholder,
        equal: contextItem.simpleValueElm === contextItem.placeholder,
        parentNode0: contextItem.placeholder?.parentNode,
        parentNode1: contextItem.simpleValueElm?.parentNode,
        newValue,
    });
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.deleteSimpleValue)(contextItem);
    console.log('old place holder - 1', {
        simpleValueElm: contextItem.simpleValueElm,
        placeholder: contextItem.placeholder,
        equal: contextItem.simpleValueElm === contextItem.placeholder,
        parentNode0: contextItem.placeholder?.parentNode,
        parentNode1: contextItem.simpleValueElm?.parentNode,
        newValue,
    });
    setTimeout(() => {
        console.log('old place holder - 2', {
            simpleValueElm: contextItem.simpleValueElm,
            placeholder: contextItem.placeholder,
            equal: contextItem.simpleValueElm === contextItem.placeholder,
            parentNode0: contextItem.placeholder?.parentNode,
            parentNode1: contextItem.simpleValueElm?.parentNode,
            newValue,
        });
    }, 100);
    return 6; // 'changed-simple-value'
}
//# sourceMappingURL=checkSimpleValueChange.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tagJsVars/getArrayTagJsVar.function.js":
/*!**************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tagJsVars/getArrayTagJsVar.function.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getArrayTagVar: () => (/* binding */ getArrayTagVar)
/* harmony export */ });
/* harmony import */ var _tag_checkDestroyPrevious_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tag/checkDestroyPrevious.function.js */ "../../taggedjs/main/dist/js/tag/checkDestroyPrevious.function.js");
/* harmony import */ var _tag_update_processTagArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag/update/processTagArray.js */ "../../taggedjs/main/dist/js/tag/update/processTagArray.js");


function getArrayTagVar(value) {
    return {
        tagJsType: 'array',
        value,
        processInit: processArrayInit,
        checkValueChange: _tag_checkDestroyPrevious_function_js__WEBPACK_IMPORTED_MODULE_0__.checkArrayValueChange,
        delete: _tag_checkDestroyPrevious_function_js__WEBPACK_IMPORTED_MODULE_0__.destroyArrayContextItem,
    };
}
function processArrayInit(value, // TemplateValue | StringTag | SubscribeValue | SignalObject,
contextItem, ownerSupport, counts, appendTo) {
    const subValue = value;
    (0,_tag_update_processTagArray_js__WEBPACK_IMPORTED_MODULE_1__.processTagArray)(contextItem, subValue, ownerSupport, counts, appendTo);
}
//# sourceMappingURL=getArrayTagJsVar.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tagJsVars/getInnerHTML.function.js":
/*!**********************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tagJsVars/getInnerHTML.function.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInnerHTML: () => (/* binding */ getInnerHTML)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "../../taggedjs/main/dist/js/index.js");
/* harmony import */ var _tag_update_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag/update/index.js */ "../../taggedjs/main/dist/js/tag/update/index.js");


function handleInnerHTML(value, newSupport, contextItem, _values, counts) {
    const owner = value.owner;
    const realValue = owner._innerHTML;
    realValue.processInit = realValue.oldProcessInit;
    const context = contextItem.subContext?.contextItem;
    (0,_tag_update_index_js__WEBPACK_IMPORTED_MODULE_1__.forceUpdateExistingValue)(context, realValue, newSupport, counts);
}
function processInnerHTML(value, contextItem, ownerSupport, counts, appendTo, insertBefore) {
    contextItem.subContext = {};
    contextItem.handler = handleInnerHTML;
    checkInnerHTML(value, ownerSupport, contextItem, counts, insertBefore, appendTo);
}
function checkInnerHTML(value, ownerSupport, contextItem, counts, insertBeforeOriginal, appendTo) {
    const { appendMarker, insertBefore } = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.guaranteeInsertBefore)(appendTo, insertBeforeOriginal);
    const subContext = contextItem.subContext;
    subContext.appendMarker = appendMarker;
    const owner = value.owner;
    const realValue = owner._innerHTML;
    realValue.processInit = realValue.oldProcessInit;
    /** Render the content that will CONTAIN the innerHTML */
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.onFirstSubContext)(realValue, subContext, ownerSupport, counts, insertBefore);
}
function getInnerHTML() {
    return {
        tagJsType: 'innerHTML',
        processInit: processInnerHTML,
        delete: _index_js__WEBPACK_IMPORTED_MODULE_0__.deleteSubContext,
        checkValueChange: () => console.debug('weird innerHTML check'),
    };
}
//# sourceMappingURL=getInnerHTML.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tagJsVars/getSimpleTagVar.function.js":
/*!*************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tagJsVars/getSimpleTagVar.function.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteSimpleValue: () => (/* binding */ deleteSimpleValue),
/* harmony export */   getSimpleTagVar: () => (/* binding */ getSimpleTagVar)
/* harmony export */ });
/* harmony import */ var _castTextValue_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../castTextValue.function.js */ "../../taggedjs/main/dist/js/castTextValue.function.js");
/* harmony import */ var _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/paint.function.js */ "../../taggedjs/main/dist/js/render/paint.function.js");
/* harmony import */ var _checkSimpleValueChange_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkSimpleValueChange.function.js */ "../../taggedjs/main/dist/js/tagJsVars/checkSimpleValueChange.function.js");



function getSimpleTagVar(value) {
    return {
        tagJsType: 'simple',
        value,
        processInit: processSimpleValueInit,
        checkValueChange: _checkSimpleValueChange_function_js__WEBPACK_IMPORTED_MODULE_2__.checkSimpleValueChange,
        delete: deleteSimpleValue,
    };
}
function processSimpleValueInit(value, // TemplateValue | StringTag | SubscribeValue | SignalObject,
contextItem, ownerSupport, counts, appendTo, insertBefore) {
    // value = value.value
    const castedValue = (0,_castTextValue_function_js__WEBPACK_IMPORTED_MODULE_0__.castTextValue)(value);
    insertBefore = contextItem.placeholder;
    // always insertBefore for content
    const paint = contextItem.paint = [_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintBeforeText, [insertBefore, castedValue, function afterSimpleValue(x) {
                contextItem.simpleValueElm = x;
                delete contextItem.paint;
                console.log('insertBefore simple', { x, value, parentNode: x.parentNode });
            }]];
    _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintCommands.push(paint);
}
function deleteSimpleValue(contextItem) {
    const elm = contextItem.simpleValueElm;
    delete contextItem.simpleValueElm;
    delete contextItem.tagJsVar;
    // is it being destroyed before it was even built?
    if (contextItem.paint !== undefined) {
        const paintIndex = _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintCommands.findIndex(paint => paint === contextItem.paint);
        _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintCommands.splice(paintIndex, 1);
        return;
    }
    _render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintCommands.push([_render_paint_function_js__WEBPACK_IMPORTED_MODULE_1__.paintRemover, [elm]]);
}
//# sourceMappingURL=getSimpleTagVar.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tagJsVars/index.js":
/*!******************************************************!*\
  !*** ../../taggedjs/main/dist/js/tagJsVars/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropWatches: () => (/* reexport safe */ _tag_function_js__WEBPACK_IMPORTED_MODULE_2__.PropWatches),
/* harmony export */   checkSimpleValueChange: () => (/* reexport safe */ _checkSimpleValueChange_function_js__WEBPACK_IMPORTED_MODULE_4__.checkSimpleValueChange),
/* harmony export */   deleteSimpleValue: () => (/* reexport safe */ _getSimpleTagVar_function_js__WEBPACK_IMPORTED_MODULE_3__.deleteSimpleValue),
/* harmony export */   getInnerHTML: () => (/* reexport safe */ _getInnerHTML_function_js__WEBPACK_IMPORTED_MODULE_1__.getInnerHTML),
/* harmony export */   subscribe: () => (/* reexport safe */ _subscribe_function_js__WEBPACK_IMPORTED_MODULE_0__.subscribe),
/* harmony export */   tag: () => (/* reexport safe */ _tag_function_js__WEBPACK_IMPORTED_MODULE_2__.tag)
/* harmony export */ });
/* harmony import */ var _subscribe_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribe.function.js */ "../../taggedjs/main/dist/js/tagJsVars/subscribe.function.js");
/* harmony import */ var _getInnerHTML_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getInnerHTML.function.js */ "../../taggedjs/main/dist/js/tagJsVars/getInnerHTML.function.js");
/* harmony import */ var _tag_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag.function.js */ "../../taggedjs/main/dist/js/tagJsVars/tag.function.js");
/* harmony import */ var _getSimpleTagVar_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getSimpleTagVar.function.js */ "../../taggedjs/main/dist/js/tagJsVars/getSimpleTagVar.function.js");
/* harmony import */ var _checkSimpleValueChange_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkSimpleValueChange.function.js */ "../../taggedjs/main/dist/js/tagJsVars/checkSimpleValueChange.function.js");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tagJsVars/subscribe.function.js":
/*!*******************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tagJsVars/subscribe.function.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subscribe: () => (/* binding */ subscribe)
/* harmony export */ });
/* harmony import */ var _interpolations_attributes_getSupportWithState_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interpolations/attributes/getSupportWithState.function.js */ "../../taggedjs/main/dist/js/interpolations/attributes/getSupportWithState.function.js");
/* harmony import */ var _tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag/getSupportInCycle.function.js */ "../../taggedjs/main/dist/js/tag/getSupportInCycle.function.js");
/* harmony import */ var _tag_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag/index.js */ "../../taggedjs/main/dist/js/tag/index.js");
/* harmony import */ var _tag_update_processSubscribe_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag/update/processSubscribe.function.js */ "../../taggedjs/main/dist/js/tag/update/processSubscribe.function.js");
/* harmony import */ var _tag_update_setupSubscribe_function_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tag/update/setupSubscribe.function.js */ "../../taggedjs/main/dist/js/tag/update/setupSubscribe.function.js");





/** Have an html tagged value as value of subscribe emissions. Automatically unsubscribes for you */
function subscribe(Observable, callback) {
    return {
        tagJsType: _tag_index_js__WEBPACK_IMPORTED_MODULE_2__.ValueTypes.subscribe,
        processInit: _tag_update_processSubscribe_function_js__WEBPACK_IMPORTED_MODULE_3__.processSubscribe,
        delete: _tag_update_setupSubscribe_function_js__WEBPACK_IMPORTED_MODULE_4__.deleteAndUnsubscribe,
        checkValueChange: function subscribeDoNothing() {
            console.debug('weird to be here');
            return -1;
        },
        Observable,
        callback,
        states: (0,_interpolations_attributes_getSupportWithState_function_js__WEBPACK_IMPORTED_MODULE_0__.getSupportWithState)((0,_tag_getSupportInCycle_function_js__WEBPACK_IMPORTED_MODULE_1__.getSupportInCycle)()).states,
    };
}
//# sourceMappingURL=subscribe.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tagJsVars/tag.function.js":
/*!*************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tagJsVars/tag.function.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropWatches: () => (/* binding */ PropWatches),
/* harmony export */   tag: () => (/* binding */ tag)
/* harmony export */ });
/* harmony import */ var _state_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/index.js */ "../../taggedjs/main/dist/js/state/index.js");
/* harmony import */ var _tag_getTemplaterResult_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag/getTemplaterResult.function.js */ "../../taggedjs/main/dist/js/tag/getTemplaterResult.function.js");
/* harmony import */ var _tag_tag_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag/tag.utils.js */ "../../taggedjs/main/dist/js/tag/tag.utils.js");
/* harmony import */ var _tag_getTagWrap_function_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag/getTagWrap.function.js */ "../../taggedjs/main/dist/js/tag/getTagWrap.function.js");
/* harmony import */ var _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tag/ValueTypes.enum.js */ "../../taggedjs/main/dist/js/tag/ValueTypes.enum.js");
/* harmony import */ var _render_update_processRenderOnceInit_function_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render/update/processRenderOnceInit.function.js */ "../../taggedjs/main/dist/js/render/update/processRenderOnceInit.function.js");
/* harmony import */ var _tag_update_processTagComponentInit_function_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tag/update/processTagComponentInit.function.js */ "../../taggedjs/main/dist/js/tag/update/processTagComponentInit.function.js");
/* harmony import */ var _tag_checkTagValueChange_function_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tag/checkTagValueChange.function.js */ "../../taggedjs/main/dist/js/tag/checkTagValueChange.function.js");
// taggedjs-no-compile








let tagCount = 0;
/** How to handle checking for prop changes aka argument changes */
var PropWatches;
(function (PropWatches) {
    PropWatches["DEEP"] = "deep";
    /** checks all values up to 2 levels deep */
    PropWatches["SHALLOW"] = "shallow";
    PropWatches["NONE"] = "none";
    PropWatches["IMMUTABLE"] = "immutable";
})(PropWatches || (PropWatches = {}));
/** Wraps a function tag in a state manager and calls wrapped function on event cycles
 * For single rendering, no event cycles, use: tag.renderOnce = (props) => html``
 */
function tag(tagComponent, propWatch = PropWatches.SHALLOW) {
    /** function developer triggers */
    const parentWrap = function tagWrapper(...props) {
        const templater = (0,_tag_getTemplaterResult_function_js__WEBPACK_IMPORTED_MODULE_1__.getTemplaterResult)(propWatch, props);
        templater.tagJsType = _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_4__.ValueTypes.tagComponent;
        templater.processInit = _tag_update_processTagComponentInit_function_js__WEBPACK_IMPORTED_MODULE_6__.processTagComponentInit;
        // attach memory back to original function that contains developer display logic
        const innerTagWrap = (0,_tag_getTagWrap_function_js__WEBPACK_IMPORTED_MODULE_3__.getTagWrap)(templater, parentWrap);
        innerTagWrap.original = tagComponent;
        templater.wrapper = innerTagWrap;
        return templater;
    }; // we override the function provided and pretend original is what's returned
    const tag = tagComponent;
    parentWrap.original = tagComponent;
    // group tags together and have hmr pickup
    tag.tags = _tag_tag_utils_js__WEBPACK_IMPORTED_MODULE_2__.tags;
    tag.setUse = _state_index_js__WEBPACK_IMPORTED_MODULE_0__.setUseMemory;
    tag.ValueTypes = _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_4__.ValueTypes;
    tag.tagIndex = tagCount++; // needed for things like HMR
    _tag_tag_utils_js__WEBPACK_IMPORTED_MODULE_2__.tags.push(parentWrap);
    return parentWrap;
}
/** Use to structure and define a browser tag route handler
 * Example: export default tag.route = (routeProps: RouteProps) => (state) => html``
 */
function routeFn(_routeProps) {
    throw new Error('Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `');
}
function renderOnceFn() {
    throw new Error('Do not call tag.renderOnce as a function but instead set it as: `(props) => tag.renderOnce = () => html`` `');
}
/** Used to create variable scoping when calling a function that lives within a prop container function */
function tagUseFn() {
    throw new Error('Do not call tag.use as a function but instead set it as: `(props) => tag.use = (use) => html`` `');
}
;
tag.renderOnce = renderOnceFn;
tag.use = tagUseFn;
tag.deepPropWatch = tag;
tag.route = routeFn;
tag.app = function (_routeTag) {
    throw new Error('Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `');
};
tag.immutableProps = function immutableProps(tagComponent) {
    return tag(tagComponent, PropWatches.IMMUTABLE);
};
tag.watchProps = function watchProps(tagComponent) {
    return tag(tagComponent, PropWatches.SHALLOW);
};
/* BELOW: Cast functions into setters with no getters */
Object.defineProperty(tag, 'renderOnce', {
    set(oneRenderFunction) {
        oneRenderFunction.tagJsType = _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_4__.ValueTypes.renderOnce;
        oneRenderFunction.processInit = _render_update_processRenderOnceInit_function_js__WEBPACK_IMPORTED_MODULE_5__.processRenderOnceInit;
        oneRenderFunction.delete = _tag_checkTagValueChange_function_js__WEBPACK_IMPORTED_MODULE_7__.destroySupportByContextItem;
        oneRenderFunction.checkValueChange = function renderOnceNeverChanges() {
            return -1;
        };
    },
});
Object.defineProperty(tag, 'use', {
    set(renderFunction) {
        renderFunction.original = {
            setUse: _state_index_js__WEBPACK_IMPORTED_MODULE_0__.setUseMemory,
            tags: _tag_tag_utils_js__WEBPACK_IMPORTED_MODULE_2__.tags,
        };
        renderFunction.tagJsType = _tag_ValueTypes_enum_js__WEBPACK_IMPORTED_MODULE_4__.ValueTypes.stateRender;
        renderFunction.processInit = _tag_update_processTagComponentInit_function_js__WEBPACK_IMPORTED_MODULE_6__.processTagComponentInit;
        renderFunction.checkValueChange = _tag_checkTagValueChange_function_js__WEBPACK_IMPORTED_MODULE_7__.checkTagValueChange;
        renderFunction.delete = _tag_checkTagValueChange_function_js__WEBPACK_IMPORTED_MODULE_7__.destroySupportByContextItem;
    },
});
//# sourceMappingURL=tag.function.js.map

/***/ }),

/***/ "../../taggedjs/main/dist/js/tagJsVars/valueToTagJsVar.function.js":
/*!*************************************************************************!*\
  !*** ../../taggedjs/main/dist/js/tagJsVars/valueToTagJsVar.function.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   valueToTagJsVar: () => (/* binding */ valueToTagJsVar)
/* harmony export */ });
/* harmony import */ var _isInstance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isInstance.js */ "../../taggedjs/main/dist/js/isInstance.js");
/* harmony import */ var _getSimpleTagVar_function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSimpleTagVar.function.js */ "../../taggedjs/main/dist/js/tagJsVars/getSimpleTagVar.function.js");
/* harmony import */ var _getArrayTagJsVar_function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getArrayTagJsVar.function.js */ "../../taggedjs/main/dist/js/tagJsVars/getArrayTagJsVar.function.js");



function valueToTagJsVar(value) {
    const tagJsType = value?.tagJsType;
    if (tagJsType) {
        return value;
    }
    return getBasicTagVar(value);
}
function getBasicTagVar(value) {
    if ((0,_isInstance_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(value)) {
        return (0,_getArrayTagJsVar_function_js__WEBPACK_IMPORTED_MODULE_2__.getArrayTagVar)(value);
    }
    return (0,_getSimpleTagVar_function_js__WEBPACK_IMPORTED_MODULE_1__.getSimpleTagVar)(value);
}
//# sourceMappingURL=valueToTagJsVar.function.js.map

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _run_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./run.function */ "./src/run.function.ts");

(0,_run_function__WEBPACK_IMPORTED_MODULE_0__.run)();

})();


//# sourceMappingURL=bundle.js.map