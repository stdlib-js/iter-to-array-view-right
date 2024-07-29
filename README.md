<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# iterator2arrayviewRight

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill an array-like object view from right to left with values returned from an iterator.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
iterator2arrayviewRight = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-to-array-view-right@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var iterator2arrayviewRight = require( 'path/to/vendor/umd/iter-to-array-view-right/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/iter-to-array-view-right@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.iterator2arrayviewRight;
})();
</script>
```

#### iterator2arrayviewRight( iterator, dest\[, begin\[, end]]\[, mapFcn\[, thisArg]] )

Fills an array-like `object` view from right to left with values returned from an `iterator`.

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );
var array2iterator = require( '@stdlib/array-to-iterator' );

var iter = array2iterator( [ 1, 2, 3, 4 ] );

var arr = iterator2arrayviewRight( iter, new Uint8Array( 10 ) );
// returns <Uint8Array>[ 0, 0, 0, 0, 0, 0, 4, 3, 2, 1 ]
```

The `begin` and `end` arguments define the starting (inclusive) and ending (non-inclusive) indices of the array view. By default, the function begins filling from the last element of a provided array-like `object` (i.e., from the "end"). To specify an alternative view end, provide an `end` argument (zero-based and non-inclusive).

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );
var array2iterator = require( '@stdlib/array-to-iterator' );

var iter = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );

var arr = iterator2arrayviewRight( iter, new Uint8Array( 10 ), 0, 4 );
// returns <Uint8Array>[ 4, 3, 2, 1, 0, 0, 0, 0, 0, 0 ]
```

If `end` is less than `0`, the last view element is resolved relative to the last element of the provided array-like `object`. For example, the following achieves the same behavior as the previous example

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );
var array2iterator = require( '@stdlib/array-to-iterator' );

var iter = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );

var arr = iterator2arrayviewRight( iter, new Uint8Array( 10 ), 0, -6 );
// returns <Uint8Array>[ 4, 3, 2, 1, 0, 0, 0, 0, 0, 0 ]
```

By default, the function fills through the first element of the provided array-like `object`. To specify an alternative view beginning, provide a `begin` argument (zero-based and inclusive).

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );
var array2iterator = require( '@stdlib/array-to-iterator' );

var iter = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );

var arr = iterator2arrayviewRight( iter, new Uint8Array( 10 ), 3 );
// returns <Uint8Array>[ 0, 0, 0, 7, 6, 5, 4, 3, 2, 1 ]
```

If `begin` is less than `0`, the first view element index is resolved relative to the last element of the provided array-like `object`. For example, the following achieves the same behavior as the previous example

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );
var array2iterator = require( '@stdlib/array-to-iterator' );

var iter = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );

var arr = iterator2arrayviewRight( iter, new Uint8Array( 10 ), -7 );
// returns <Uint8Array>[ 0, 0, 0, 7, 6, 5, 4, 3, 2, 1 ]
```

To invoke a function for each iterated value, provide a callback function.

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var array2iterator = require( '@stdlib/array-to-iterator' );

function fcn( v ) {
    return v * 10.0;
}

var iter = array2iterator( [ 1, 2, 3, 4 ] );

var arr = iterator2arrayviewRight( iter, new Float64Array( 4 ), fcn );
// returns <Float64Array>[ 40.0, 30.0, 20.0, 10.0 ]
```

The invoked function is provided three arguments:

-   **value**: iterated value.
-   **index**: destination index (zero-based).
-   **n**: iteration index (zero-based).

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );
var array2iterator = require( '@stdlib/array-to-iterator' );

function fcn( v, i, n ) {
    return v * (n+1);
}

var iter = array2iterator( [ 1, 2, 3, 4 ] );

var arr = iterator2arrayviewRight( iter, new Uint8Array( 4 ), fcn );
// returns <Uint8Array>[ 16, 9, 4, 1 ]
```

To set the callback function execution context, provide a `thisArg`.

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var randu = require( '@stdlib/random-iter-randu' );

function fcn( v ) {
    this.count += 1;
    return v * 10.0;
}

var ctx = {
    'count': 0
};

var arr = iterator2arrayviewRight( randu(), new Float64Array( 10 ), fcn, ctx );
// returns <Float64Array>

var count = ctx.count;
// returns 10
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Iteration stops when an output array view is full **or** an iterator finishes; whichever comes first.
-   The function supports output array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array-complex64`][@stdlib/array/complex64]).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/iter-to-array-view-right@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function scale( v, i, n ) {
    return v * (n+1) * 10.0;
}

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var it = randu();

// Fill an array view with scaled iterator values:
var arr = iterator2arrayviewRight( it, new Float64Array( 100 ), 40, 60, scale );

var i;
for ( i = 0; i < arr.length; i++ ) {
    console.log( arr[ i ] );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-from-iterator`][@stdlib/array/from-iterator]</span><span class="delimiter">: </span><span class="description">create (or fill) an array from an iterator.</span>
-   <span class="package-name">[`@stdlib/array-to-view-iterator-right`][@stdlib/array/to-view-iterator-right]</span><span class="delimiter">: </span><span class="description">create an iterator from an array-like object view, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/iter-to-array-view`][@stdlib/iter/to-array-view]</span><span class="delimiter">: </span><span class="description">fill an array-like object view with values returned from an iterator.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-to-array-view-right.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-to-array-view-right

[test-image]: https://github.com/stdlib-js/iter-to-array-view-right/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/iter-to-array-view-right/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-to-array-view-right/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-to-array-view-right?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-to-array-view-right.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-to-array-view-right/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/iter-to-array-view-right/tree/deno
[deno-readme]: https://github.com/stdlib-js/iter-to-array-view-right/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/iter-to-array-view-right/tree/umd
[umd-readme]: https://github.com/stdlib-js/iter-to-array-view-right/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/iter-to-array-view-right/tree/esm
[esm-readme]: https://github.com/stdlib-js/iter-to-array-view-right/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/iter-to-array-view-right/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-to-array-view-right/main/LICENSE

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/umd

<!-- <related-links> -->

[@stdlib/array/from-iterator]: https://github.com/stdlib-js/array-from-iterator/tree/umd

[@stdlib/array/to-view-iterator-right]: https://github.com/stdlib-js/array-to-view-iterator-right/tree/umd

[@stdlib/iter/to-array-view]: https://github.com/stdlib-js/iter-to-array-view/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
