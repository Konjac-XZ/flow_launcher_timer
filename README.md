# Timer Plugin for Flow Launcher

This is a plugin for [Flow Launcher](https://www.flowlauncher.com) that uses [hourglass](https://github.com/i2van/hourglass) to set timers.

![timer1](https://github.com/pivotiiii/flow_launcher_timer/assets/17112987/695834f1-2eae-4614-92bc-b257314f1ef1)

## Installation

This plugin can be installed using the Flow Launcher Plugin Store or directly from the Flow Launcher search bar by entering

`pm install Timer`

## Usage

The default keyword is `timer`. Times can be entered in many different ways, including but not limited to:

| Input              | Result                                                                 |
| ------------------ | ---------------------------------------------------------------------- |
| 5                  | count down for 5 minutes                                               |
| 5:30 pizza         | count down for 5 minutes 30 seconds and set the timer title to 'pizza' |
| 7:30:00            | count down for 7 hours 30 minutes                                      |
| 5min               | count down for 5 minutes                                               |
| 7 hours 30 minutes | count down for 7 hours 30 minutes                                      |
| 01/01/25 \*        | count down until January 1, 2025                                       |
| 01/01/2025 \*      | count down until January 1, 2025                                       |
| January 1, 2025 \* | count down until January 1, 2025                                       |
| Jan1 birthday      | count down until January 1 and set the timer title to 'birthday'       |
| 2 pm               | count down until 2 pm                                                  |
| until 5            | count down until 5 am/pm (12hr) or 5 am (24hr)                         |
| noon               | count down until noon                                                  |
| midnight           | count down until midnight                                              |
| Friday             | count down until midnight Friday                                       |

\* The order of the day, month, and year depends on your system settings.

All time values are case insensitive. Timer titles are optional and cannot contain any spaces.

![timer2](https://github.com/pivotiiii/flow_launcher_timer/assets/17112987/2e5a1d16-0f5a-4fab-9f39-c4c8cbe52668)

Timers can be paused/resumed with `pause` and `resume`.

Any invalid inputs also show an option that displays a help site.

#### What formats are supported when entering a duration or date and time?

**Minutes** – To start a timer for a specified number of minutes, enter the number of minutes:

- 1 – count down for 1 minute
- 5 – count down for 5 minutes
- 10 – count down for 10 minutes

**Specifying units** – To start a timer specifying the units, enter a number followed by one of the supported units: seconds, minutes, hours, days, weeks, months, and years are supported:

- 30 seconds – count down for 30 seconds
- 5 minutes – count down for 5 minutes
- 7 hours – count down for 7 hours
- 3 days – count down for 3 days
- 25 weeks – count down for 25 weeks
- 6 months – count down for 6 months
- 2 years – count down for 2 years

You can also use the short form of the supported units: s, m, h, d, w, mo, and y:

- 30s – count down for 30 seconds
- 5m – count down for 5 minutes
- 7h – count down for 7 hours
- 3d – count down for 3 days
- 25w – count down for 25 weeks
- 6mo – count down for 6 months
- 2y – count down for 2 years

**Combining units** – To start a timer using a combination of units, simply concatenate the units:

- 5 minutes 30 seconds – count down for 5 minutes 30 seconds
- 5m30s – count down for 5 minutes 30 seconds
- 7 hours 15 minutes – count down for 7 hours 15 minutes
- 7h15m – count down for 7 hours 15 minutes

**Decimal notation** – To start a timer specifying a duration that is not a whole number, use decimal notation:

- 5.5 minutes – count down for 5 minutes 30 seconds
- 1.5 hours – count down for 1 hour 30 minutes
- 0.5 years – count down for 6 months

**Short form duration** – To start a timer for a specified duration, you can alternatively use the short form m:ss or h:mm:ss formats:

- 5:30 – count down for 5 minutes 30 seconds
- 7:15:00 – count down for 7 hours 15 minutes

You can use . instead of : as the separator if you prefer:

- 5.30 – count down for 5 minutes 30 seconds
- 7.15.00 – count down for 7 hours 15 minutes

**Until time of day** – To start a timer until a specified time of day, enter the time of day in the h am/pm, h:mm am/pm, or h:mm:ss am/pm formats:

- 2 pm – count down until 2:00:00 pm
- 2:30 pm – count down until 2:30:00 pm
- 2:30:15 pm – count down until 2:30:15 pm

You can use . instead of : as the separator if you prefer:

- 2.30 pm – count down until 2:30:00 pm
- 2.30.15 pm – count down until 2:30:15 pm

If the specified time of day has already passed today, the timer will count down until the specified time of day tomorrow.

**Until date** – To start a timer until a specified date, enter the date in the month day, day month, month day, year, or day month year formats:

- January 1 – count down until midnight January 1
- 1 January – count down until midnight January 1
- January 1, 2019 – count down until midnight January 1, 2019
- 1 January, 2019 – count down until midnight January 1, 2019

You can use the full month name: January, February, March, April, May, June, July, August, September, October, November, or December. Or you can use the short form of the month name: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, or Dec:

- Jan 1 – count down until midnight January 1
- 1 Jan – count down until midnight January 1
- Jan 1, 2019 – count down until midnight January 1, 2019
- 1 Jan, 2019 – count down until midnight January 1, 2019

Or you can use the month number instead, or a two-digit year, if you prefer:

- 1/1 – count down until midnight January 1
- 01/01 – count down until midnight January 1
- 1/1/19 – count down until midnight January 1, 2019
- 01/01/19 – count down until midnight January 1, 2019
- 1/1/2019 – count down until midnight January 1, 2019
- 01/01/2019 – count down until midnight January 1, 2019

Note that the order of the day, month, and year depends on your system settings in some cases.

**Until weekday** – To start a timer until a specified weekday, enter Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday:

- Monday – count down until midnight Monday
- Wednesday – count down until midnight Wednesday
- Saturday – count down until midnight Saturday

You can also use the short form of the weekday: Mon, Tue, Wed, Thu, Fri, Sat, or Sun:

- Mon – count down until midnight Monday
- Wed – count down until midnight Wednesday
- Sat – count down until midnight Saturday

To specify a day next week rather than this week, append next week. To specify the weekday after next, append next or after next:

- Wednesday next week – count down until midnight Wednesday next week
- Wednesday next – count down until midnight the Wednesday after next Wednesday
- Wednesday after next – count down until midnight the Wednesday after next Wednesday
- Thu next week – count down until midnight Thursday next week
- Thu next – count down until midnight the Thursday after next Thursday
- Thu after next – count down until midnight the Thursday after next Thursday

**Tomorrow** – To start a timer until the next day, enter tomorrow:

- tomorrow – count down until midnight tomorrow

**Combining date and time** – To start a timer until a specified date, specified weekday, or tomorrow and specified time of day, join the date, weekday, or tomorrow and the time of day and separate them with at or on as appropriate:

- January 1, 2019 at 2 pm – count down until 2 pm on January 1, 2019
- 2 pm on January 1, 2019 – count down until 2 pm on January 1, 2019
- 01/01/2019 at 2 pm – count down until 2 pm on January 1, 2019
- 2 pm on 01/01/2019 – count down until 2 pm on January 1, 2019
- Wednesday at 2 pm – count down until 2 pm on Wednesday
- 2 pm on Wednesday – count down until 2 pm on Wednesday
- tomorrow at 2 pm – count down until 2 pm tomorrow
- 2 pm tomorrow – count down until 2 pm tomorrow

You can omit the at or on separating the date, weekday, or tomorrow and the time of day in most cases:

- January 1, 2019 2 pm – count down until 2 pm on January 1, 2019
- 2 pm January 1, 2019 – count down until 2 pm on January 1, 2019
- 01/01/2019 2 pm – count down until 2 pm on January 1, 2019
- 2 pm 01/01/2019 – count down until 2 pm on January 1, 2019
- Wednesday 2 pm – count down until 2 pm on Wednesday
- 2 pm Wednesday – count down until 2 pm on Wednesday
- tomorrow 2 pm – count down until 2 pm tomorrow
- 2 pm tomorrow – count down until 2 pm tomorrow
