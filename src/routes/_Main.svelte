<script>
import {goto} from "$app/navigation";
import Gap from "$components/utils/Gap.svelte";
import {name, email, phone} from "../config";

export let detail = false;
</script>

<style lang="scss">
@import "./common";

.hide {
	display: none !important;
}

#main {
	max-width: 9in;
	margin: 0 auto;
	padding: 1.5em;
}

.top {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-bottom: 1.5em;
}

#name {
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 8px;
}

#subtitle {
	text-transform: uppercase;
	font-size: 13px;
}

#email {
	text-align: right;
	font-size: 14px;
	margin-bottom: 8px;
}

#phone {
	text-align: right;
	font-size: 14px;
}

#location {
	text-transform: uppercase;
	color: var(--faded);
	font-size: 14px;
}

#intro {
	font-size: 15px;
	gap: 2.5em;
	margin-bottom: 1.5em;
	
	.header {
		margin-bottom: 16px;
	}
}

#cols {
	display: grid;
	grid-template-columns: 8fr 5fr;
	gap: 2.5em;
	margin-bottom: 1em;
}

.header {
	font-size: 13px;
	font-weight: bold;
	margin-bottom: 8px;
	border-bottom: 1px solid gray;
	padding-bottom: 2px;
}

.position, .project {
	border-bottom: 1px solid #dfdfdf;
	padding: 12px 0;
	
	.title {
		font-weight: bold;
	}
	
	.highlight {
		font-size: 15px;
	}
}

.position {
	color: inherit;
	text-decoration: none;
	display: block;
	//cursor: pointer;
	
	&:hover {
		//background: #00000005;
	}
	
	a {
		//font-weight: bold;
	}
	
	&:hover a {
		font-weight: bold;
	}
	
	.details {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: 1em;
	}
	
	.title {
		font-size: 16px;
		margin-bottom: 3px;
	}
	
	.company {
		text-transform: uppercase;
		font-size: 13px;
	}
	
	.type, .date {
		text-align: right;
	}
	
	.type {
		color: var(--faded);
		font-size: 13px;
		margin-bottom: 2px;
	}
	
	.date {
		//color: var(--faded);
		//text-transform: uppercase;
		font-size: 13px;
	}
	
	.highlight {
		margin-bottom: 1em;
	}
}

.project {
	a {
		font-weight: bold;
	}
	
	.highlight:not(:last-child) {
		margin-bottom: 8px;
	}
}

ul {
	font-size: 15px;
}

code {
	font-size: 14px;
	background: #f0f0f0;
}

#modalBackground {
	position: fixed;
	z-index: 100;
	display: flex;
	flex-direction: column;
	align-items: center;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 1em;
	overflow-y: auto;
	background: #00000020;
}

#modal {
	width: 50%;
	margin: 5em 0 2em;
	padding: 1.6em 1.3em;
	box-shadow: 0 4px 10px 1px #0000003b;
	background: white;
	
	@media(min-width: 42em) {
		min-width: 40em;
	}
	
	@media(max-width: 42em) {
		width: 100%;
	}
}

a.more {
	text-decoration: none;
	font-size: 13px;
	opacity: .8;
}

#misc {
	font-size: .9em;
	text-align: right;
}

.pdf {
	display: none;
}

@media print {
	.web {
		display: none;
	}
	
	.pdf {
		display: initial;
	}
}
</style>

<div class:hide={!detail} id="modalBackground" on:click={() => goto("/")}>
	<div id="modal" on:click|stopPropagation={() => {}}>
		<slot/>
	</div>
</div>

<div id="main">
	<div class="top">
		<div>
			<div id="name">
				{name}
			</div>
			<div id="subtitle">
				Software Engineer
			</div>
		</div>
		<div>
			<div id="email">
				<a href={"mailto:" + email}>{email}</a>
			</div>
			<div id="phone">
				{phone}
			</div>
		</div>
	</div>
	<div id="intro">
		<div class="header">
			Background
		</div>
		Introduce yourself here.
	</div>
	<div id="cols">
		<div>
			<div class="header">
				Recently held positions (click for more details)
			</div>
			<a class="position" href="/company-1">
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
							Contract, remote
						</div>
						<div class="date">
							Jan '21&ndash;Jul '21
						</div>
					</div>
				</div>
				<div class="highlight">
					Worked on foo, bar, and baz.
				</div>
				<div class="tech">
					<div>Svelte</div>
					<div>SCSS</div>
				</div>
			</a>
			<a class="position" href="/company-2">
				<div class="details">
					<div>
						<div class="title">
							Position 2
						</div>
						<div class="company">
							Company 2
						</div>
					</div>
					<div>
						<div class="type">
							Startup
						</div>
						<div class="date">
							Jun '19&ndash;Jan '21
						</div>
					</div>
				</div>
				<div class="highlight">
					Created startup for xyz.
				</div>
				<div class="tech">
					<div>JavaScript</div>
					<div>MySQL</div>
					<div>PWA</div>
				</div>
			</a>
			<a class="position" href="/company-3">
				<div class="details">
					<div>
						<div class="title">
							Position 3
						</div>
						<div class="company">
							Company 3
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
				<div class="highlight">
					Worked on foo, bar, and baz.
				</div>
				<div class="tech">
					<div>TypeScript</div>
					<div>Python</div>
					<div>Linux</div>
				</div>
			</a>
		</div>
		
		<div id="projects">
			<div class="header">
				Core skills
			</div>
			<Gap height={8}/>
			<ul style="font-size: 15px">
				<li> Skill 1
				<li> Skill 2
				<li> Skill 3
			</ul>
			<Gap height={20}/>
			<div class="header">
				Projects, writing, and code samples
			</div>
			<div class="project">
				<div class="highlight">
					<a target="_blank" href="//project-1">Project 1</a>, a tool for xyz.
				</div>
				<div class="tech">
					<div>JavaScript</div>
					<div>HTML</div>
					<div>CSS</div>
				</div>
			</div>
			<div class="project">
				<div class="highlight">
					<a target="_blank" href="//project-2">Project 2</a>, a tool for xyz.
				</div>
				<div class="tech">
					<div>JavaScript</div>
					<div>HTML</div>
					<div>CSS</div>
				</div>
			</div>
			<div class="project">
				<div class="highlight">
					<a target="_blank" href="//project-3">Project 3</a>, a tool for xyz.
				</div>
				<div class="tech">
					<div>JavaScript</div>
					<div>HTML</div>
					<div>CSS</div>
				</div>
			</div>
			<div class="project">
				<div class="highlight">
					<a target="_blank" href="//post-1">Blog post 1</a>, on abc.
				</div>
			</div>
			<div class="project">
				<div class="highlight">
					<a target="_blank" href="//post-2">Blog post 2</a>, on abc.
				</div>
			</div>
			
			<Gap heightEm={1}/>
			
			<div id="misc">
				<span class="pdf">
					<a href="/">View online</a>
				</span>
				<span class="web">
					<a href={"/" + name + ".pdf"}>View PDF</a>
				</span>
			</div>
		</div>
	</div>
</div>
