<a name="5.0.6"></a>
## [5.0.6](https://github.com/staltz/xstream/compare/v5.0.5...v5.0.6) (2016-06-17)


### Bug Fixes

* **imitate:** fix stack overflow when pruning cycles ([02b0327](https://github.com/staltz/xstream/commit/02b0327))



<a name="5.0.5"></a>
## [5.0.5](https://github.com/staltz/xstream/compare/v5.0.4...v5.0.5) (2016-06-14)


### Bug Fixes

* **imitate:** fix against cyclic propagation of errors ([1aa0549](https://github.com/staltz/xstream/commit/1aa0549))



<a name="5.0.4"></a>
## [5.0.4](https://github.com/staltz/xstream/compare/v5.0.3...v5.0.4) (2016-06-14)


### Bug Fixes

* **imitate:** fix cyclic execution leaks ([8658aa0](https://github.com/staltz/xstream/commit/8658aa0)), closes [#51](https://github.com/staltz/xstream/issues/51)



<a name="5.0.3"></a>
## [5.0.3](https://github.com/staltz/xstream/compare/v5.0.2...v5.0.3) (2016-06-13)


### Bug Fixes

* **imitate:** fix imitate() isomorphism ([d9970cc](https://github.com/staltz/xstream/commit/d9970cc))


### Performance Improvements

* **dataflow:** add dataflow perf benchmark ([9b8730a](https://github.com/staltz/xstream/commit/9b8730a))



<a name="5.0.2"></a>
## [5.0.2](https://github.com/staltz/xstream/compare/v4.0.4...v5.0.2) (2016-06-12)


### Bug Fixes

* **imitate:** fix cyclic execution leak, and refactor ([8a432b6](https://github.com/staltz/xstream/commit/8a432b6)), closes [#51](https://github.com/staltz/xstream/issues/51) [#49](https://github.com/staltz/xstream/issues/49)
* **take:** remove redundant stop() call ([625fb3e](https://github.com/staltz/xstream/commit/625fb3e))


### Features

* **combine:** change API for combine() operator ([a2aa0a6](https://github.com/staltz/xstream/commit/a2aa0a6))
* **imitate:** move imitate() from MimicStream to Stream ([ad63372](https://github.com/staltz/xstream/commit/ad63372))


### BREAKING CHANGES

* combine: combine() now takes only streams as argument, no more project function. combine() will return an
stream that emits arrays of the collected values from each input stream. To transform that array,
you should now use map() operator after combine(), to take the array of collected values and return
a combination value. See tests for examples.
* imitate: MimicStream and xs.createMimic() were removed entirely. The imitate() method now exists on every
Stream instance. To use the proxy stream technique, use xs.create() to create the proxy, then call
proxy.imitate(other).



<a name="4.0.4"></a>
## [4.0.4](https://github.com/staltz/xstream/compare/v4.0.3...v4.0.4) (2016-06-09)



<a name="4.0.3"></a>
## [4.0.3](https://github.com/staltz/xstream/compare/v4.0.2...v4.0.3) (2016-06-08)


### Bug Fixes

* **remember:** fix remember() on producer-less streams ([cbe806d](https://github.com/staltz/xstream/commit/cbe806d))



<a name="4.0.2"></a>
## [4.0.2](https://github.com/staltz/xstream/compare/v4.0.1...v4.0.2) (2016-06-08)


### Bug Fixes

* **Stream:** fix small issue with private Stream members ([61b5c12](https://github.com/staltz/xstream/commit/61b5c12))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/staltz/xstream/compare/v4.0.0...v4.0.1) (2016-06-03)


### Bug Fixes

* **compose:** improve compose type signature ([38b1064](https://github.com/staltz/xstream/commit/38b1064))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/staltz/xstream/compare/v3.0.0...v4.0.0) (2016-06-03)


### Bug Fixes

* **core:** remove instance combine() and merge() ([00fc72c](https://github.com/staltz/xstream/commit/00fc72c))


### Features

* **core:** improve signature of operators regarding types ([#43](https://github.com/staltz/xstream/issues/43)) ([116e9f2](https://github.com/staltz/xstream/commit/116e9f2))


### BREAKING CHANGES

* core: Instance operators stream.combine() and stream.merge() removed. Use
xs.combine() and xs.merge() instead.
* core: debug() now returns a MemoryStream if the input was also a MemoryStream.
endWhen() now returns a MemoryStream if the input was also a MemoryStream.
fold() now returns always a MemoryStream, not Stream.
imitate() only works on conventional Stream, will throw error on
MemoryStream.
map() now returns a MemoryStream if the input was also a MemoryStream.
mapTo() now returns a MemoryStream if the input was also a MemoryStream.
replaceError() now returns a MemoryStream if the input was also a MemoryStream.
startWith() now returns always a MemoryStream, not Stream.
take() now returns a MemoryStream if the input was also a MemoryStream.



<a name="3.0.0"></a>
# [3.0.0](https://github.com/staltz/xstream/compare/v2.6.2...v3.0.0) (2016-06-02)


### Bug Fixes

* **extra:** change flattenSequentially and pairwise signatures ([71df158](https://github.com/staltz/xstream/commit/71df158))
* **extra:** move flattenConcurrently from core to extra ([7d0fc01](https://github.com/staltz/xstream/commit/7d0fc01))
* **imitate:** fix imitate, should not add listener immediately ([a6e39d2](https://github.com/staltz/xstream/commit/a6e39d2)), closes [#5](https://github.com/staltz/xstream/issues/5) [#5](https://github.com/staltz/xstream/issues/5)


### BREAKING CHANGES

* extra: Usage of flattenSequentially have changed, from
compose(flattenSequentially()) to compose(flattenSequentially) and from
compose(pairwise()) and compose(pairwise).
* extra: flattenConcurrently must be separately imported as an extra operator and
used with .compose()
* imitate: imitate() method on Stream removed. New type introduced: MimicStream,
which can be created through xs.createMimic(). A MimicStream has the
method imitate(), which has the same API as before, but imitate does not
trigger any Stream/Producer to start.



<a name="2.6.2"></a>
## [2.6.2](https://github.com/staltz/xstream/compare/v2.6.1...v2.6.2) (2016-05-25)


### Bug Fixes

* **debug:** improve printing of objects from debug() ([9cf630b](https://github.com/staltz/xstream/commit/9cf630b)), closes [#38](https://github.com/staltz/xstream/issues/38)



<a name="2.6.1"></a>
## [2.6.1](https://github.com/staltz/xstream/compare/v2.6.0...v2.6.1) (2016-05-23)


### Bug Fixes

* **MemoryStream:** fix tear down logic to reset memory ([524d68e](https://github.com/staltz/xstream/commit/524d68e)), closes [#36](https://github.com/staltz/xstream/issues/36)



<a name="2.6.0"></a>
# [2.6.0](https://github.com/staltz/xstream/compare/v2.5.0...v2.6.0) (2016-05-21)


### Features

* **debug:** add support for label argument to debug() ([9231851](https://github.com/staltz/xstream/commit/9231851))



<a name="2.5.0"></a>
# [2.5.0](https://github.com/staltz/xstream/compare/v2.4.3...v2.5.0) (2016-05-21)


### Features

* **extra:** add new extra factory fromDiagram ([d6c4ae5](https://github.com/staltz/xstream/commit/d6c4ae5))



<a name="2.4.3"></a>
## [2.4.3](https://github.com/staltz/xstream/compare/v2.4.2...v2.4.3) (2016-05-16)


### Bug Fixes

* **extra:** add safety check against nulls for next() etc ([cf82a8b](https://github.com/staltz/xstream/commit/cf82a8b))


### Performance Improvements

* **debounce:** improve debounce speed/rate ([8bf7903](https://github.com/staltz/xstream/commit/8bf7903))



<a name="2.4.2"></a>
## [2.4.2](https://github.com/staltz/xstream/compare/v2.4.1...v2.4.2) (2016-05-13)


### Bug Fixes

* **flatten:** fix map+flatten fusion to respect filter+map fusion ([6520550](https://github.com/staltz/xstream/commit/6520550))



<a name="2.4.1"></a>
## [2.4.1](https://github.com/staltz/xstream/compare/v2.4.0...v2.4.1) (2016-05-13)


### Bug Fixes

* **operators:** add safety check against nulls for next() etc ([5d433c3](https://github.com/staltz/xstream/commit/5d433c3))
* **operators:** improve *type* metadata for operators with fusion ([fb1e81c](https://github.com/staltz/xstream/commit/fb1e81c))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/staltz/xstream/compare/v2.3.0...v2.4.0) (2016-05-12)


### Bug Fixes

* **flatten:** add ins field as metadata to flatten ([cbc1f8b](https://github.com/staltz/xstream/commit/cbc1f8b))


### Features

* **extra:** implement new extra operator: dropUntil ([e06d502](https://github.com/staltz/xstream/commit/e06d502))
* **extra:** implement new extra operator: split ([84742e8](https://github.com/staltz/xstream/commit/84742e8))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/staltz/xstream/compare/v2.2.1...v2.3.0) (2016-05-09)


### Bug Fixes

* **combine:** fix combine() to export its Producer class ([700a129](https://github.com/staltz/xstream/commit/700a129))


### Features

* **operators:** add type metadata string to all operators/producers ([a734fd4](https://github.com/staltz/xstream/commit/a734fd4))



<a name="2.2.1"></a>
## [2.2.1](https://github.com/staltz/xstream/compare/v2.2.0...v2.2.1) (2016-05-03)


### Performance Improvements

* **combine:** apply some perf optimizations to combine ([ee4ec4c](https://github.com/staltz/xstream/commit/ee4ec4c))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/staltz/xstream/compare/v2.1.4...v2.2.0) (2016-05-02)


### Features

* **combine:** support zero streams args to combine() ([1b3ca90](https://github.com/staltz/xstream/commit/1b3ca90))



<a name="2.1.4"></a>
## [2.1.4](https://github.com/staltz/xstream/compare/v2.1.3...v2.1.4) (2016-05-02)


### Bug Fixes

* **combine:** guard CombineListener against invalid out stream ([74c6061](https://github.com/staltz/xstream/commit/74c6061))


### Performance Improvements

* **flatten:** avoid cut() method in flattening ([28afee9](https://github.com/staltz/xstream/commit/28afee9))



<a name="2.1.3"></a>
## [2.1.3](https://github.com/staltz/xstream/compare/v2.1.2...v2.1.3) (2016-04-30)


### Bug Fixes

* **remember:** return MemoryStream, not Stream ([4f50922](https://github.com/staltz/xstream/commit/4f50922))



<a name="2.1.2"></a>
## [2.1.2](https://github.com/staltz/xstream/compare/v2.1.1...v2.1.2) (2016-04-30)


### Bug Fixes

* **combine:** fix CombineFactorySignature ([c65bd0b](https://github.com/staltz/xstream/commit/c65bd0b))



<a name="2.1.1"></a>
## [2.1.1](https://github.com/staltz/xstream/compare/v2.1.0...v2.1.1) (2016-04-30)


### Bug Fixes

* **remember:** build safety against map+map fusion ([079602c](https://github.com/staltz/xstream/commit/079602c))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/staltz/xstream/compare/v2.0.2...v2.1.0) (2016-04-30)


### Bug Fixes

* **flatten:** fix TypeScript output type ([26f2241](https://github.com/staltz/xstream/commit/26f2241)), closes [#4](https://github.com/staltz/xstream/issues/4)
* **flattenConcurrently:** fix TypeScript output type ([b5445a5](https://github.com/staltz/xstream/commit/b5445a5)), closes [#4](https://github.com/staltz/xstream/issues/4)


### Features

* **create:** Throw an error if for incomplete producer ([39c7c80](https://github.com/staltz/xstream/commit/39c7c80))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/staltz/xstream/compare/v2.0.1...v2.0.2) (2016-04-28)


### Bug Fixes

* **filter:** fix filter fusion logic. ([8c417f9](https://github.com/staltz/xstream/commit/8c417f9))


### Performance Improvements

* **Stream:** improve way of fixing ils array concurrency ([accd2d0](https://github.com/staltz/xstream/commit/accd2d0))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/staltz/xstream/compare/v2.0.0...v2.0.1) (2016-04-28)


### Bug Fixes

* **take:** fix take() behavior when stopping ([438fc0f](https://github.com/staltz/xstream/commit/438fc0f))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/staltz/xstream/compare/v1.1.1...v2.0.0) (2016-04-27)


### Bug Fixes

* **package:** put extra operators in xstream/extra ([2735a74](https://github.com/staltz/xstream/commit/2735a74))


### BREAKING CHANGES

* package: Import extra operators from xstream/extra/the-operator-you-want not from
xstream/lib/extra/the-operator-you-want



<a name="1.1.1"></a>
## [1.1.1](https://github.com/staltz/xstream/compare/v1.1.0...v1.1.1) (2016-04-27)


### Features

* **addListener:** throw an error if next, error or complete functions are missing ([b6e9df3](https://github.com/staltz/xstream/commit/b6e9df3))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/staltz/xstream/compare/v1.0.1...v1.1.0) (2016-04-26)


### Bug Fixes

* **core:** export all operator classes ([10ef8f3](https://github.com/staltz/xstream/commit/10ef8f3))
* **package:** fix TS dependency on es6-promise, and bump ([4c8adb8](https://github.com/staltz/xstream/commit/4c8adb8))
* **package.json:** add typings field, bump to 1.0.4 ([bffd84b](https://github.com/staltz/xstream/commit/bffd84b))
* **typings:** fix usage of ambient es6-promise ([6b4ae8e](https://github.com/staltz/xstream/commit/6b4ae8e))
* **typings:** make es6-promise an ambient dep, and bump ([49edd74](https://github.com/staltz/xstream/commit/49edd74))


### Features

* **extra:** implement new flattenSequentially() extra operator ([4a6e63e](https://github.com/staltz/xstream/commit/4a6e63e))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/staltz/xstream/compare/a3a08e7...v1.0.1) (2016-04-22)


### Bug Fixes

* **compose2:** fix type signature errors ([5c77ff9](https://github.com/staltz/xstream/commit/5c77ff9))
* **core:** fix map type signature ([133c400](https://github.com/staltz/xstream/commit/133c400))
* **dropRepeats:** move dropRepeats from core to extra ([78851c8](https://github.com/staltz/xstream/commit/78851c8))
* **filterMap:** properly catch errors that could be thrown ([8ff48a5](https://github.com/staltz/xstream/commit/8ff48a5))
* **flattenConcurrently:** fix inner management when optimization is off ([da1f379](https://github.com/staltz/xstream/commit/da1f379))
* **fromArray:** rename from() producer to fromArray() ([05f519a](https://github.com/staltz/xstream/commit/05f519a))
* **fromEvent:** rename static domEvent() to fromEvent() as extra ([c481cc8](https://github.com/staltz/xstream/commit/c481cc8))
* **MemoryStream:** fix how MemoryStream handles late sync emissions ([00de09d](https://github.com/staltz/xstream/commit/00de09d))
* **operator:** add more tear down logic in _stop() in operators ([2483107](https://github.com/staltz/xstream/commit/2483107))
* **operator:** fix all operators redirection of error/complete ([2caa2ca](https://github.com/staltz/xstream/commit/2caa2ca))
* **package.json:** no postinstall npm script anymore ([4011aa1](https://github.com/staltz/xstream/commit/4011aa1))
* **periodic:** rename interval() factory to periodic() ([6a2adc5](https://github.com/staltz/xstream/commit/6a2adc5))
* **src:** make index be an import facade for core.ts ([180f7c4](https://github.com/staltz/xstream/commit/180f7c4))
* **Stream:** fix unsubscription semantics w.r.t. restarting ([9a0f3af](https://github.com/staltz/xstream/commit/9a0f3af))
* **Stream:** stop the producer syncly after stream completes ([faba7bf](https://github.com/staltz/xstream/commit/faba7bf))
* **Stream:** stop the producer syncly after the Stream errors ([6c803ac](https://github.com/staltz/xstream/commit/6c803ac))
* **Stream:** use underscore for pseudo-private fields in Stream ([95f2ebb](https://github.com/staltz/xstream/commit/95f2ebb))
* **take:** fix take() operator, and also combine and merge ([c5fdfc0](https://github.com/staltz/xstream/commit/c5fdfc0))


### Features

* **concat:** implement extra concat() operator ([7652011](https://github.com/staltz/xstream/commit/7652011))
* **core:** flatten and flattenConcurrently should optimize for FilterMapOperator ([e1bebff](https://github.com/staltz/xstream/commit/e1bebff))
* **core:** implement filter + map fusion ([b0507e6](https://github.com/staltz/xstream/commit/b0507e6))
* **core:** use filterMap fusion for map() + filter ([a723fa4](https://github.com/staltz/xstream/commit/a723fa4))
* **createWithMemory:** rename xs.MemoryStream to xs.createWithMemory ([c88d6c2](https://github.com/staltz/xstream/commit/c88d6c2))
* **debounce:** implement debounce operator ([7dfb709](https://github.com/staltz/xstream/commit/7dfb709))
* **debounce:** make debounce an extra operator ([34fd6c1](https://github.com/staltz/xstream/commit/34fd6c1))
* **delay:** implement extra operator delay() and compose() ([48c5abc](https://github.com/staltz/xstream/commit/48c5abc))
* **domEvent:** implement domEvent stream constructor ([ad40a08](https://github.com/staltz/xstream/commit/ad40a08))
* **drop:** rename skip() to drop() ([cab26a9](https://github.com/staltz/xstream/commit/cab26a9))
* **dropRepeats:** implement core instance operator dropRepeats() ([b7dccf9](https://github.com/staltz/xstream/commit/b7dccf9))
* **emptyObserver:** makes emptyObserver noop functions instead of null ([e1d2537](https://github.com/staltz/xstream/commit/e1d2537))
* **endWhen:** implement operator endWhen(), add tests ([23099ef](https://github.com/staltz/xstream/commit/23099ef))
* **factory:** add factory from() with FromMachine ([e76acef](https://github.com/staltz/xstream/commit/e76acef))
* **factory:** implement merge() with MergeProducer ([42b6f12](https://github.com/staltz/xstream/commit/42b6f12))
* **filterMap:** implement all combinations of filter and map fusion ([5eb5822](https://github.com/staltz/xstream/commit/5eb5822))
* **flatten:** implement flatten operator, a.k.a. switch() ([6255e53](https://github.com/staltz/xstream/commit/6255e53))
* **flattenConcurrently:** rename flatten to flattenConcurrently ([b3a87ee](https://github.com/staltz/xstream/commit/b3a87ee))
* **fromPromise:** implement factory fromPromise() ([ad0ccfd](https://github.com/staltz/xstream/commit/ad0ccfd))
* **imitate:** implement imitate() operator for circular dependencies ([6545670](https://github.com/staltz/xstream/commit/6545670))
* **index:** export new domEvent constructor ([870fdc6](https://github.com/staltz/xstream/commit/870fdc6))
* **mapTo:** implement mapTo ([f73bc8e](https://github.com/staltz/xstream/commit/f73bc8e))
* **MapTo:** adjust to more private variables ([a5ed5ab](https://github.com/staltz/xstream/commit/a5ed5ab))
* **Observer:** rename complete() callback to end() ([d282684](https://github.com/staltz/xstream/commit/d282684))
* **operator:** implement combine(), both static and instance ([f65a6a3](https://github.com/staltz/xstream/commit/f65a6a3))
* **operator:** implement debug() operator with DebugMachine ([e2a0342](https://github.com/staltz/xstream/commit/e2a0342))
* **operator:** implement filter operator with FilterMachine ([a74f160](https://github.com/staltz/xstream/commit/a74f160))
* **operator:** implement flatten() operator ([4800873](https://github.com/staltz/xstream/commit/4800873))
* **operator:** implement fold operator with FoldMachine ([57453f2](https://github.com/staltz/xstream/commit/57453f2))
* **operator:** implement last() operator with LastMachine ([747e255](https://github.com/staltz/xstream/commit/747e255))
* **operator:** implement map operator with MapMachine ([76df500](https://github.com/staltz/xstream/commit/76df500))
* **operator:** implement skip operator with SkipMachine ([32dd8ac](https://github.com/staltz/xstream/commit/32dd8ac))
* **operator:** implement take operator with TakeMachine ([6e1d0db](https://github.com/staltz/xstream/commit/6e1d0db))
* **pairwise:** implement extra operator pairwise() ([5b1ec51](https://github.com/staltz/xstream/commit/5b1ec51))
* **remember:** implement RememeberProducer ([7279ad8](https://github.com/staltz/xstream/commit/7279ad8))
* **RememberOperator:** adjust to work with MemoryStream ([0898404](https://github.com/staltz/xstream/commit/0898404))
* **replaceError:** implement replaceError(), wrap code with try-catch ([ffa5976](https://github.com/staltz/xstream/commit/ffa5976))
* **shamefullySendNext:** introduce shamefullySendNext and hide _next callback ([552caff](https://github.com/staltz/xstream/commit/552caff))
* **startWith:** implement startWith operator ([3489ce3](https://github.com/staltz/xstream/commit/3489ce3))
* **Stream:** add a concept of current value ([cc5650f](https://github.com/staltz/xstream/commit/cc5650f))
* **Stream:** add debounce to Stream prototype ([f44b819](https://github.com/staltz/xstream/commit/f44b819))
* **Stream:** add mapTo to Stream prototype ([58c83f9](https://github.com/staltz/xstream/commit/58c83f9))
* **Stream:** add never() and empty() stream factories ([04f59b0](https://github.com/staltz/xstream/commit/04f59b0))
* **Stream:** implement really simply Stream and interval() factory ([a3a08e7](https://github.com/staltz/xstream/commit/a3a08e7))
* **Stream:** implement Stream ([86d68ff](https://github.com/staltz/xstream/commit/86d68ff))
* **Stream:** implement xs.of() ([f86fd49](https://github.com/staltz/xstream/commit/f86fd49))
* **takeUntil:** implement and test takeUntil() ([304bed1](https://github.com/staltz/xstream/commit/304bed1))
* **throw:** implement new static factory throw() ([76879a5](https://github.com/staltz/xstream/commit/76879a5))


### Performance Improvements

* **core:** have FilterMapOperator extend MapOperator ([e0c153a](https://github.com/staltz/xstream/commit/e0c153a))
* **debug:** improve performance of debug() operator, using Proxy class ([9f766af](https://github.com/staltz/xstream/commit/9f766af))
* **filter-map-reduce:** add preliminary perf micro benchmarks ([8b1f2d3](https://github.com/staltz/xstream/commit/8b1f2d3))
* **filter-map-reduce:** improve filter-map-reduce test to actually do reduce() too ([7ff9fd0](https://github.com/staltz/xstream/commit/7ff9fd0))
* **fold:** improve performance by using shorter names ([8a25fe7](https://github.com/staltz/xstream/commit/8a25fe7))
* **from:** improve from factory perf by renaming a var ([a814c8a](https://github.com/staltz/xstream/commit/a814c8a))
* **fromArray:** rename/fix from() to fromArray() in perf benchmarks ([a433dd5](https://github.com/staltz/xstream/commit/a433dd5))
* **merge:** add merge performance benchmark ([de9f002](https://github.com/staltz/xstream/commit/de9f002))
* **operator:** fix all operators to refer this.proxy initially to emptyObserver ([ad210fc](https://github.com/staltz/xstream/commit/ad210fc))
* **operator:** replace operator proxies with class, improves perf ([2e6ec27](https://github.com/staltz/xstream/commit/2e6ec27))
* **perf:** fix xstream perf benchmark for merge() ([4758a1d](https://github.com/staltz/xstream/commit/4758a1d))
* **scan:** add performance benchmark for fold ([5d5ef94](https://github.com/staltz/xstream/commit/5d5ef94))
* **skip:** improve skip perf by using Proxy Observer class ([5233f43](https://github.com/staltz/xstream/commit/5233f43))
* **Stream:** improve performance of Observer methods in Stream ([465f22d](https://github.com/staltz/xstream/commit/465f22d))
* **Stream:** remove this.num in Stream to improve perf ([53bcaad](https://github.com/staltz/xstream/commit/53bcaad))
* **Stream:** squeeze kB size in map and filter fusion ([23ac9d0](https://github.com/staltz/xstream/commit/23ac9d0))
* **Stream:** tiny saving of lookups and source code size ([6527129](https://github.com/staltz/xstream/commit/6527129))
* **take:** improve take() perf by using Proxy Observer class ([6eae1a9](https://github.com/staltz/xstream/commit/6eae1a9))


### Reverts

* **takeUntil:** revert takeUntil implementation ([6f62fc1](https://github.com/staltz/xstream/commit/6f62fc1))



