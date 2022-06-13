<script>
import Main from "./_Main.svelte";
</script>

<style type="text/scss">
@import "./common";
@import "./details";
</style>

<Main detail>
	<div class="main">
		<div class="details">
			<div>
				<div class="title">
					Position 1
				</div>
				<div class="company">
					Company 1
				</div>
			</div>
			<div>
				<div class="type">
					Contract, on-site
				</div>
				<div class="date">
					Jul '18&ndash;Dec '18
				</div>
			</div>
		</div>
		<div class="intro">
			Lorem ipsum dolor sit amet.
			<br><br>
			...etc...
			<br><br>
			Key projects included:
		</div>
		<div class="projects">
			<div class="table">
				<div>
					Project
				</div>
				<div class="projectName">
					Project 1
				</div>
				<div>
					Details
				</div>
				<div>
					...
				</div>
				<div>
					Outcome
				</div>
				<div>
					...
				</div>
				<div>
					Link
				</div>
				<div>
					<a target="_blank" href="//company-3/feature-1">company-3/feature-1</a>
				</div>
			</div>
			<div class="table">
				<div>
					Project
				</div>
				<div class="projectName">
					Project 2
				</div>
				<div>
					Details
				</div>
				<div>
					...
				</div>
				<div>
					Outcome
				</div>
				<div>
					...
				</div>
				<div>
					Link
				</div>
				<div>
					<a target="_blank" href="//company-3/feature-2">company-3/feature-2</a>
				</div>
			</div>
			<div class="table">
				<div>
					Project
				</div>
				<div class="projectName">
					Project 3
				</div>
				<div>
					Details
				</div>
				<div>
					...
				</div>
				<div>
					Outcome
				</div>
				<div>
					...
				</div>
				<div>
					Link
				</div>
				<div>
					<a target="_blank" href="//company-3/feature-3">company-3/feature-3</a>
				</div>
			</div>
		</div>
		<div class="other">
			<br>
			Tech:
			<div class="tech">
				<div>TypeScript</div>
				<div>Python</div>
				<div>Linux</div>
			</div>
		</div>
	</div>
</Main>
