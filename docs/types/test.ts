/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import randu = require( '@stdlib/random-iter-randu' );
import iterator2arrayviewRight = require( './index' );

/**
* Multiplies a value by 10.
*
* @param v - iterated value
* @returns new value
*/
function times10( v: number ): number {
	return v * 10.0;
}


// TESTS //

// The function returns a collection...
{
	const iter = randu( { 'iter': 10 } );
	const out = new Float64Array( 10 );
	iterator2arrayviewRight( iter, out ); // $ExpectType Collection<number>
	iterator2arrayviewRight( iter, out, times10 ); // $ExpectType Collection<number>
	iterator2arrayviewRight( iter, out, times10, {} ); // $ExpectType Collection<number>
	iterator2arrayviewRight( iter, out, 0, 10, times10 ); // $ExpectType Collection<number>
	iterator2arrayviewRight( iter, out, 0, 10, times10, {} ); // $ExpectType Collection<number>
}

// The compiler throws an error if the function is provided a first argument which is not an iterator...
{
	iterator2arrayviewRight( 'abc', [] ); // $ExpectError
	iterator2arrayviewRight( 123, [] );  // $ExpectError
	iterator2arrayviewRight( true, [] ); // $ExpectError
	iterator2arrayviewRight( false, [] ); // $ExpectError
	iterator2arrayviewRight( [], [] ); // $ExpectError
	iterator2arrayviewRight( {}, [] ); // $ExpectError
	iterator2arrayviewRight( null, [] ); // $ExpectError
	iterator2arrayviewRight( undefined, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const iter = randu( { 'iter': 10 } );
	iterator2arrayviewRight( iter, 123 ); // $ExpectError
	iterator2arrayviewRight( iter, {} ); // $ExpectError
	iterator2arrayviewRight( iter, true ); // $ExpectError
	iterator2arrayviewRight( iter, false ); // $ExpectError
	iterator2arrayviewRight( iter, null ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number or map function...
{
	const iter = randu( { 'iter': 10 } );
	iterator2arrayviewRight( iter, [], 'abc' ); // $ExpectError
	iterator2arrayviewRight( iter, [], [] ); // $ExpectError
	iterator2arrayviewRight( iter, [], {} ); // $ExpectError
	iterator2arrayviewRight( iter, [], true ); // $ExpectError
	iterator2arrayviewRight( iter, [], false ); // $ExpectError
	iterator2arrayviewRight( iter, [], null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `begin` argument and a fourth argument which is not a number or map function...
{
	const iter = randu( { 'iter': 10 } );
	iterator2arrayviewRight( iter, [], 2, 'abc' ); // $ExpectError
	iterator2arrayviewRight( iter, [], 2, [] ); // $ExpectError
	iterator2arrayviewRight( iter, [], 2, {} ); // $ExpectError
	iterator2arrayviewRight( iter, [], 2, true ); // $ExpectError
	iterator2arrayviewRight( iter, [], 2, false ); // $ExpectError
	iterator2arrayviewRight( iter, [], 2, null ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const iter = randu( { 'iter': 10 } );
	iterator2arrayviewRight(); // $ExpectError
	iterator2arrayviewRight( iter ); // $ExpectError
	iterator2arrayviewRight( iter, [], 0, 10, times10, {}, 123 ); // $ExpectError
}
