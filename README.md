# Tiny Timer

Tiny and Powerful Library for show time counter.

## Features 

  - Easy
  - Fast
  - Compact
  - No dependencies
  
## Arguments 

| Argument Name  | Goal | Default |
| ------------- | ------------- | ----- |
| data-timer-update  	| Functional name for called each time the timer is updated. | Optional |
| data-timer-done  	|  Functional name for called each time the timer is done and again start.| Optional |
| data-timer-finish  	| Functional name for called each time the timer complete and finish. | Optional |
| data-timer-delay  	| Delay time to run the timer | 1000 ms (1s) |
| data-timer-mutation  	| The mutation of the time | 1 (one by one) |
| data-timer-duration  	| Time value in seconds | Essential and without initial value (Units in seconds) |
| data-timer-repeat  	| Number of repetitions | unlimited |

## Samples

To view the full details, run the [Example.html](https://github.com/BaseMax/TinyTimerJs/blob/master/Example.html) file.

#### `data-timer-duration`

```
<div data-timer-duration="3"></div>
```
```
<div data-timer-duration="3" data-timer-repeat="true"></div>
```

#### `data-timer-repeat`

```
<div data-timer-duration="3" data-timer-repeat="2"></div>
```

#### `data-timer-repeat`

```
<div data-timer-duration="3" data-timer-repeat="2"></div>
```

#### `data-timer-mutation`

```
<div data-timer-duration="7" data-timer-mutation="2" data-timer-repeat="2"></div>
```

#### `data-timer-delay`

```
<div data-timer-duration="7" data-timer-delay="2000" data-timer-mutation="2" data-timer-repeat="2"></div>
```

#### `data-timer-update`
```
<script>
function check(index)
{
	console.log("Next...");
}
</script>
<div data-timer-duration="3" data-timer-update="check"></div>
```

#### `data-timer-finish`
#### `data-timer-done`


# License

TinyTimer is licensed under the [GNU General Public License](https://github.com/BaseMax/TinyTimerJs/blob/master/LICENSE).
