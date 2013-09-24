#!/usr/bin/env python

import curses, traceback

def main(stdscr):
	global screen
	screen = stdscr.subwin(23, 79, 0, 0)
	screen.box()
	screen.hline(2, 1, curses.ACS_HLINE, 77)
	screen.refresh()

	while 1:
		pass

if __name__=='__main__':
	try:
		# init
		stdscr=curses.initscr()
		curses.noecho()
		curses.cbreak()

		stdscr.keypad(1)
		main(stdscr)
		stdscr.keypad(0)
		curses.echo()
		curses.nocbreak()
		curses.endwin()
	except:
		stdscr.keypad(0)
		curses.echo()
		curses.nocbreak()
		curses.endwin()
		traceback.print_exc()
