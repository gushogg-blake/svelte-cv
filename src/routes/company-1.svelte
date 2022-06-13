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
					Contract
				</div>
				<div class="date">
					Jan '21&ndash;Jul '21
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
					<a target="_blank" href="//company-1/feature-1">company-1/feature-1</a>
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
					<a target="_blank" href="//company-1/feature-2">company-1/feature-2</a>
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
					<a target="_blank" href="//company-1/feature-3">company-1/feature-3</a>
				</div>
			</div>
		</div>
		<div class="other">
			<br>
			Methodologies:
			<div class="methodologies">
				<div>Agile</div>
				<div>Microservices</div>
			</div>
			<br>
			Tech:
			<div class="tech">
				<div>Svelte</div>
				<div>SCSS</div>
			</div>
		</div>
	</div>
</Main>
