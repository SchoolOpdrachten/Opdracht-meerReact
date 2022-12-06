# opdracht week 12: Meer React

## brightspace:
De code hier  is voor een applicatie om reserveringen te doen voor een voorstelling die eens per dag wordt gehouden voor twee weken, in een attractiepark. Het maximum aantal bezoekers per dag is 10. Nadat er is geklikt op de link op de home-pagina om een te boeken, wordt er een lijst getoond van dagen, een invoerveld voor het aantal personen, en een knop om de boeking te doen. De opdracht is om de volgende punten te verbeteren:

* usability, bijvoorbeeld:
    * er is geen client-side validation
        * de gebruiker kan een email invoeren zonder @-teken
        * de gebruiker is niet verplicht een getal in te voeren bij het aantal personen
    * de gebruiker kan dagen aanklikken die al vol zijn, dat moet niet mogelijk zijn.
    * voor het selecteren van de dag bestaan geschiktere UI-elementen
        * maak een dag alleen klikbaar als er iets op die dag vrij is
* security, bijvoorbeeld:
    * er is geen server-side validation
        * geef een correcte HTTP statuscode als de request fout is (email is geen email, het aantal mensen ontbreekt), of als er niet genoeg plaatsen over zijn, of als de reservering gemaakt is
* accessibility, bijvoorbeeld:
    * zorg dat de website goed toegankelijk is voor blinde mensen

De volgende eisen worden gesteld:
* gebruik React voor een SPA en gebruik een ASP.NET Core web-api in de backend.
* gebruik een NPM package om de routing te doen in de frontend
* het gebruik van Redux is optioneel (een goede oefening, maar overkill voor deze website)
* je hoeft geen unit-tests te schrijven
* programmeer 'netjes': de applicatie moet makkelijk uitbreidbaar zijn, introduceer geen code-smells, en houd je aan de SOLID-principes. Bijvoorbeeld:
    * voorkom dat je het maximum aantal reserveringen per dag opslaat in de backend en in de frontend (redudantie leidt mogelijk tot inconsistentie)
    * ontwerp de API 'RESTful'