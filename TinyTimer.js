/**
*
* @Name : TinyTimer.js
* @Version : 1.0
* @Programmer : Max
* @Date : 2018-11-18
* @Released under : https://github.com/BaseMax/TinyTimerJs/blob/master/LICENSE
* @Repository : https://github.com/BaseMax/TinyTimerJs
*
**/
;(function(window,document)
{
	"use strict";
	/**
	* @variable consts
	*
	* @goal : using in the whole of script
	*
	**/
	const TIME_DELAY   = 1000;//1s
	const TIME_MUTATION= 1;//one
	const KEY_DURATION = "data-timer-duration";
	const KEY_UPDATE   = "data-timer-update";
	const KEY_FINISH   = "data-timer-finish";
	const KEY_DONE 	   = "data-timer-done";
	const KEY_REPEAT   = "data-timer-repeat";
	const KEY_DELAY    = "data-timer-delay";
	const KEY_INDEX    = "data-timer-index";
	const KEY_MUTATION = "data-timer-mutation";
	/**
	* @variable timers
	**/
	var timers=[];
	/**
	* @function stop
	**/
	function stop()
	{

	}
	/**
	* @function execute
	**/
	function execute(element)
	{
		if(element.hasAttribute(KEY_DURATION))//first necessary attribute for this library!
		{
			let timer_index=element.getAttribute("data-timer-index");
			let duration=element.getAttribute(KEY_DURATION);
			//Check it be a decimal number.
			duration=parseInt(duration);
			let update=null;
			let done=null;//...
			let finish=null;//...
			let repeat=true;//...
			let delay=TIME_DELAY;//default value
			let mutation=TIME_MUTATION;//default value
			if(element.hasAttribute(KEY_FINISH))
			{
				finish=element.getAttribute(KEY_FINISH);
			}
			if(element.hasAttribute(KEY_DONE))
			{
				done=element.getAttribute(KEY_DONE);
			}
			if(element.hasAttribute(KEY_UPDATE))
			{
				update=element.getAttribute(KEY_UPDATE);
			}
			if(element.hasAttribute(KEY_DELAY))
			{
				delay=element.getAttribute(KEY_DELAY);
				if(typeof parseInt(delay) == "number")
				{
					delay=Math.floor(delay);
					if(delay < 0)//min value is 0
					{
						delay=0;
					}
				}
				else
				{
					delay=TIME_DELAY;
				}
			}
			if(element.hasAttribute(KEY_MUTATION))
			{
				mutation=element.getAttribute(KEY_MUTATION);
				if(typeof parseInt(mutation) == "number")
				{
					mutation=Math.floor(mutation);
					if(mutation < 1)//min value is 1
					{
						mutation=1;
					}
				}
				else
				{
					mutation=TIME_DELAY;
				}
			}
			if(element.hasAttribute(KEY_REPEAT))
			{
				repeat=element.getAttribute(KEY_REPEAT);
				//`true == "true"` is always false and not necessary to use from === operator.
				if(repeat == "true")
				{
					repeat=true;
				}
				else if(repeat == "false")
				{
					repeat=false;//0
				}
				else if(typeof parseInt(repeat) == "number")
				{
					repeat=parseInt(repeat);
					repeat=Math.floor(repeat);//e.g: convert 2.67 to 2
					//if(repeat < 0)
					if(repeat <= 0)
					{
						return;//Stop!
						//repeat=0;
					}
				}
			}
			////////////////////////////////////////////////
			var time = duration;
			var minutes,seconds;
			var index=1;
			function updates()
			{
				if(time < 0)
				{
					if(done)
					{
						eval('window.'+done+'('+timer_index+')');
					}
					//here === operator is necessary!
					if(repeat === true || (typeof repeat == "number" && repeat > index))
					{
						time = duration;
					}
					else
					{
						if(finish)
						{
							eval('window.'+finish+'('+timer_index+')');
						}
						clearInterval(timers[timer_index]);
						//element.textContent = "";
						return;//this is necessary!
					}
					index++;
				}
				minutes = parseInt(time / 60,10)
				seconds = parseInt(time % 60,10);
				minutes = minutes < 10 ? "0" + minutes : minutes;
				seconds = seconds < 10 ? "0" + seconds : seconds;
				if(update)
				{
					eval('window.'+update+"("+timer_index+")");
				}
				element.textContent = minutes + ":" + seconds;
				time-=mutation;
			}
			updates();//Elementary show of time
			timers[timer_index]=setInterval(function()
			{
				updates();
			},delay);
		}
	}
	/**
	* @struct timer
	*
	* @goal : access to public functions
	*
	* @return struct
	**/
	window.timer=
	{
		execute:execute,
		timers:timers,
		stop:stop,
	};
	/**
	* @struct onload
	*
	* @goal : set onclick and events after page load...
	*
	* @return void
	**/
	window.addEventListener("load",function()
	{
		var data_items;
		data_items = document.querySelectorAll("[data-timer-duration]");
		data_items.forEach(function(item,index)
		{
			item.setAttribute(KEY_INDEX,index);
			execute(item);
		});
	},false);
}(window,document));
