<script lang="ts">
	import TeamTable from "$lib/components/TeamTable.svelte";

	const leadership = [
		{
			name: "Meah Chambers",
			role: "Team Lead",
			contact: "mchamb3@gmu.edu",
		},
		{
			name: "Logan Teyema",
			role: "Ground Team Lead",
			contact: "lteyema@gmu.edu",
		},
		{
			name: "Gagan Manjunatha",
			role: "Software Lead",
			contact: "gmanjuna@gmu.edu",
		},
		{
			name: "Luis Anchundia",
			role: "Electrical Lead",
			contact: "lanchund@gmu.edu",
		},
		{
			name: "Johnathan L Lyles",
			role: "Raytheon Mentor",
			contact: "jlyles@rtx.com",
		},
		{
			name: "Dr. Cameron Nowzari",
			role: "Faculty Advisor",
			contact: "cnowzari@gmu.edu",
		},
		{ name: "Thomas Fletcher", role: "Mascot", contact: "tfletch@gmu.edu" },
	];

	const droneTeam = [
		{ name: "Meah Chambers", role: "Team Lead" },
		{ name: "Luis Anchundia", role: "Electrical Engineer" },
		{ name: "Connor Roberts", role: "Operations Specialist" },
		{ name: "Toan Do", role: "Safety Pilot" },
		{ name: "James Daniel", role: "Team Member" },
		{ name: "Gagan (Adith) Manjunatha", role: "Software Engineer" },
		{ name: "Chris Klevisha", role: "Team Member" },
	];

	const groundTeam = [
		{ name: "Logan Teyema", role: "Ground Team Lead" },
		{ name: "Hassan Youssef", role: "Team Member" },
		{ name: "Konraad Ludwig", role: "Team Member" },
		{ name: "Emma Misevschi", role: "Team Member" },
	];
</script>

<div class="dashboard-grid">
	<div class="column-main">
		<TeamTable title="LEADERSHIP & ADVISORS" members={leadership} />
		<TeamTable title="DRONE TEAM ROSTER" members={droneTeam} />
		<TeamTable title="GROUND TEAM ROSTER" members={groundTeam} />
	</div>

	<div class="column-side">
		<div class="hardware-box">
			<h3>JOIN US & CONTRIBUTE</h3>
			<p>
				Interested in joining the RDC team? We are looking for members
				who are interested and <strong>dedicated</strong> to working with
				us.
			</p>
			<hr />
			<ul style="margin: 5px 0 0 15px; padding: 0;">
				<li>Join our Discord server.</li>
			</ul>
			<a
				href="https://discord.gg/WfKAbJpZFX"
				target="_blank"
				rel="noopener noreferrer"
				style="display: block; width: 100%; text-decoration: none;"
			>
				<button class="save-btn" style="margin-top: 15px; width: 100%;"
					>JOIN DISCORD</button
				>
			</a>
		</div>
	</div>
</div>
