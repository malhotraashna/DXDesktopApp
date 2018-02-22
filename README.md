# DX DesktopApp

HTML page is rendered on the electron app. Also main and renderer process are able to communicate using IPC.

When the user clicks on "Install" button, a message is sent to the main process using the event listener of the button. The main process is able to print the message on the terminal, and the response is listened by the renderer which it displays in the Dev Tool Console.
