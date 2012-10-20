<!doctype.html>
<html>
	<head>
		<title>mitigator</title>
		<link rel="stylesheet" href="default.css">
	</head>
	<body onload="initialize()">
		<script src="mitigator.js"></script>
		
		<div id="header">
			<div class="content-bubble" style="padding: 1em;">
				<h3>~ mitigator ~</h3>
				<hr>
				Sort by: <a class="sort" onclick="updateCollections()">name</a>
				<a class="sort" onclick="updateTasks()">due date</a>
			</div>
		</div>

		<div id="container">
			<div id="center" class="column">
				<div class="column-bubble">
					<b>task pool</b>
					<hr>
					<div id="pool">
					<!-- space for task summaries -->

					<!-- template task summary -->
					<div id="mock_summary" class="content-bubble">
						<table style="width: 100%;"><tr>
							<td><div class="task-info">
								<table>
									<tr>
										<td>name:</td>
										<td id="name"> </td>
									</tr>
									<tr>
										<td>due date:</td>
										<td id="due"> </td>
									</tr>
								</table>
							</div></td>
							<td valign=top><div id="desc" class="task-description">
								 
							</div></td>
						</tr></table>
					</div>
					</div>
				</div>
			</div>
			
			<div id="left" class="column">
				<div class="column-bubble">
					<b>collections</b>
					<hr>
					<div id="collections">
						<p id="mock_collection" class="collection">rawr</p>
					</div>
				</div>
			</div>
			
			<div id="right" class="column">
				<div class="column-bubble">
					<b>details</b>
					<hr>
				</div>
			</div>

		</div>

		<div id="footer"></div>
	</body>
</html>
