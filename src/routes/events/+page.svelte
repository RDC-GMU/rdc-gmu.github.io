<script lang="ts">
    type Event = {
        date: Date;
        title: string;
        location: string;
        timeStr: string;
        detailsLink?: string;
    };

    const specialEvents: Event[] = [
        {
            date: new Date("2026-03-27T16:30:00"),
            title: "Robotics Outreach Event",
            location: "Research Hall",
            timeStr: "4:30 PM - 7:30 PM",
            detailsLink: "/events/outreach26",
        },
        {
            date: new Date("2026-04-23T00:00:00"), // April 23rd
            title: "Raytheon Autonomous Vehicle Competition - Day 1",
            location: "EagleBank Arena",
            timeStr: "TBD"
        },
        {
            date: new Date("2026-04-24T00:00:00"), // April 24th
            title: "Raytheon Autonomous Vehicle Competition - Day 2",
            location: "EagleBank Arena",
            timeStr: "TBD"
        }
    ];

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const generatedMeetings: Event[] = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() + i);
        const day = d.getDay();

        if (day === 2 || day === 4) {
            generatedMeetings.push({
                date: new Date(new Date(d).setHours(14, 0, 0)),
                title: "Weekly Team Meeting",
                location: "MARC",
                timeStr: "2:00 PM - 4:00 PM",
            });
        } else if (day === 5) {
            generatedMeetings.push({
                date: new Date(new Date(d).setHours(13, 0, 0)),
                title: "Weekly Team Meeting",
                location: "MARC",
                timeStr: "1:00 PM - 4:30 PM",
            });
        }
    }

    const pastEvents = specialEvents
        .filter((e) => e.date < now)
        .sort((a, b) => b.date.getTime() - a.date.getTime());

    const upcomingSpecialEvents = specialEvents.filter((e) => e.date >= now);

    const upcomingEvents = [...upcomingSpecialEvents, ...generatedMeetings].sort(
        (a, b) => a.date.getTime() - b.date.getTime()
    );

    function formatDate(d: Date) {
        return d.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    }
</script>

<div class="super-container">
    <div class="config-category">
        <h2>MEETING SCHEDULE</h2>
        <div class="tables-container">
            <div class="table-wrapper">
                <table class="config-table">
                    <tbody>
                        <tr>
                            <th>TUESDAYS</th>
                            <td>2:00 PM - 4:00 PM</td>
                        </tr>
                        <tr>
                            <th>THURSDAYS</th>
                            <td>2:00 PM - 4:00 PM</td>
                        </tr>
                        <tr>
                            <th>FRIDAYS</th>
                            <td>1:00 PM - 4:30 PM</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="config-category">
        <h2>UPCOMING EVENTS</h2>
        <div class="tables-container">
            <div class="table-wrapper">
                <table class="config-table">
                    <thead>
                        <tr>
                            <th>DATE</th>
                            <th>EVENT</th>
                            <th>LOCATION</th>
                            <th>DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#if upcomingEvents.length === 0}
                            <tr>
                                <td
                                    colspan="4"
                                    class="text-center py-4 text-gray-500"
                                    >No upcoming events scheduled.</td
                                >
                            </tr>
                        {:else}
                            {#each upcomingEvents as event}
                                <tr>
                                    <td>
                                        <strong>{formatDate(event.date)}</strong
                                        ><br />
                                        <span class="text-xs text-[#555]"
                                            >{event.timeStr}</span
                                        >
                                    </td>
                                    <td>{event.title}</td>
                                    <td>{event.location}</td>
                                    <td>
                                        {#if event.detailsLink}
                                            <a href={event.detailsLink}>
                                                <button class="edit-btn"
                                                    >VIEW INFO</button
                                                >
                                            </a>
                                        {/if}
                                    </td>
                                </tr>
                            {/each}
                        {/if}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="config-category">
        <h2>PAST EVENTS</h2>
        <div class="tables-container">
            <div class="table-wrapper">
                <table class="config-table">
                    <thead>
                        <tr>
                            <th>DATE</th>
                            <th>EVENT</th>
                            <th>LOCATION</th>
                            <th>DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#if pastEvents.length === 0}
                            <tr>
                                <td
                                    colspan="4"
                                    class="text-center py-4 text-gray-500"
                                    >No past events.</td
                                >
                            </tr>
                        {:else}
                            {#each pastEvents as event}
                                <tr>
                                    <td>
                                        <strong>{formatDate(event.date)}</strong
                                        ><br />
                                        <span class="text-xs text-[#555]"
                                            >{event.timeStr}</span
                                        >
                                    </td>
                                    <td>{event.title}</td>
                                    <td>{event.location}</td>
                                    <td>
                                        {#if event.detailsLink}
                                            <a href={event.detailsLink}>
                                                <button class="edit-btn"
                                                    >VIEW INFO</button
                                                >
                                            </a>
                                        {/if}
                                    </td>
                                </tr>
                            {/each}
                        {/if}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
