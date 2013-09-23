For generating latex image snippets the latex package [Standalone](http://mirrors.ctan.org/install/macros/latex/contrib/standalone.tds.zip) can be used.

### Example latex file

	\documentclass[preview]{standalone}
	\begin{document}
	Hello. This is a test.
	\begin{equation}
	L = 2
	\end{equation}
	\end{document}

Then to generate a PNG do `pdflatex file` and then `convert -density 300 file.pdf -quality 90 file.png`
