# Where-its-at
Externa bibliotek 

För att få väl godkänt skulle vi själva välja tre externa bibliotek som inte behandlats i undervisningen. Jag valde tre stycken som jag tyckte kändes både rimliga och användbara för en sån här applikation. Här är de jag valde och varför:

1. uuid

Det här biblioteket används för att skapa unika ID:n, vilket jag behövde när jag genererade biljetter. Ursprungligen fanns det en manuell funktion för att slumpa ID, men uuid är både säkrare och smidigare. Det gör att varje biljett får en egen unik kod utan att man behöver tänka på att något ska krocka eller bli dubbelt.

Användning: I useStore.js när biljetterna skapas i generateTickets().

2. react-icons

Detta bibliotek använder jag i bottennavigeringen (Navbar) för att lägga till ikoner för Home, Events och Tickets. Istället för att ladda ner egna bilder eller svg-filer kunde jag snabbt lägga in snygga och enhetliga ikoner direkt i koden. Det hjälpte mig att få ett mer proffsigt gränssnitt utan så mycket extra jobb.

Användning: I Navbar.jsx med ikonerna FaHome, FaCalendarAlt och FaTicketAlt.

3. react-confetti

Jag ville göra biljettsidan lite roligare, så jag la till en konfettianimation när man slutfört sitt köp. Det ger lite mer känsla av att man faktiskt "vunnit" något och avslutar flödet med en visuell bekräftelse. Biblioteket var enkelt att använda och passade in perfekt på sidan.

Användning: I TicketPage.jsx för att visa konfetti när biljetterna visas.

