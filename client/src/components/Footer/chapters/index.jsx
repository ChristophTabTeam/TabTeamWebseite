import React, { useEffect, useState } from 'react'
import '../../../styles/Footer.scss'
import '../../../styles/Footer-Chapters.scss'
import { Designer, DesignerDetails, FrontEndDeveloper, FrontEndDeveloperDetails } from './Jobs'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import $ from 'jquery'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, animateScroll as scroll } from "react-scroll";

function Chapters() {
  return
}

export default Chapters

export const Media = () => {
    return (
        <div>

        </div>
    )
}

export const Jobs = () => {
    const [activeJob, setActiveJob] = useState()
    const [filter, setFilter] = useState()
    const [filterMenu, setFilterMenu] = useState()
    const [windowWidth, setWindowWidth] = useState()
    const width = window.innerWidth

    useEffect(() => {
        setWindowWidth(width)
        if (width < 1700) {
            setFilterMenu(false)
        } else {
            setFilterMenu(true)
        }
    }, [])

    return (
        <div className='footer__content'>
            <h1 className='footer__content__headline'>unsere Stellenanzeigen</h1>
            <div className='footer__content__filter-container'>
                {(width < 1700) ? <h2 className='footer__content__filter' onClick={() => {
                    setFilterMenu(true)
                }} onMouseLeave={() => {
                    setFilterMenu(false)
                }}>{(windowWidth < 1700) ? <MenuIcon/> : null} Filter</h2> : <h2 className='footer__content__filter'>Filter</h2>}
                {filterMenu ? 
                    <div className='footer__content__filter-items-container'>
                        <span className='footer__content__filter-name design-filter' onClick={() => {
                            setFilter('design')
                        }}>Design</span>
                        <span className='footer__content__filter-name dev-filter' onClick={() => {
                            setFilter('dev')
                        }}>Development</span>
                        <span className='footer__content__filter-name marketing-filter' onClick={() => {
                            setFilter('marketing')
                        }}>Marketing</span>
                        <span className='footer__content__filter-name verwaltung-filter' onClick={() => {
                            setFilter('verwaltung')
                        }}>Verwaltung</span>
                    </div> : null}
            </div>
            <div className='footer__joblist'>
                <div className='footer__joblist-item design'>
                    {(activeJob === 'designer') ? <DesignerDetails/> : <Designer/>}
                    <button onClick={() => {
                        if (activeJob === 'designer') {
                            setActiveJob('')
                        } else {
                            setActiveJob('designer')
                        }
                        
                    }} className={(activeJob === 'designer') ? 'arrow up' : 'arrow'}>
                        <ArrowDropDownIcon sx={{ fontSize: 40}}/>
                    </button>
                </div>
                <div className='footer__joblist-item dev'>
                    {(activeJob === 'frontenddev') ? <FrontEndDeveloperDetails/> : <FrontEndDeveloper/>}
                    <button onClick={() => {
                        if (activeJob === 'frontenddev') {
                            setActiveJob('')
                        } else {
                            setActiveJob('frontenddev')
                        }
                    }} className={(activeJob === 'frontenddev') ? 'arrow up' : 'arrow'}>
                        <ArrowDropDownIcon sx={{ fontSize: 40}}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export const Bewerbung = () => {
    return (
        <div>

        </div>
    )
}

export const Agb = () => {
    return (
        <div className='footer__content'>
            <h1 className='footer__content__headline' id="geltungsbereich">Allgemeine Geschäftsbedingungen</h1>
            <h2 className='footer__content__chapter-headline'>Geltungsbereich</h2>
            <p className='footer__content__text'>Für alle Lieferungen von DemoShop e.K. (nachfolgend DemoShop) an Verbraucher gelten diese Allgemeinen Geschäftsbedingungen (AGB).<br/>
            Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu einem Zwecke abschließt, der überwiegend weder ihrer gewerblichen noch ihrer selbstständigen beruflichen Tätigkeit zugerechnet werden kann.</p>
            
            <h2 className='footer__content__chapter-headline' id="vertragspartner">Vertragspartner</h2>
            <p className='footer__content__text'>Der Kaufvertrag kommt zustande mit DemoShop e.K., Inhaber: Max Muster, Demostr. 1, 12345 Demostadt, Handelsregister: Amtsgericht Demostadt, HRA 12345.</p>
            <h2 className='footer__content__chapter-headline' id="vertragsschluss">Vertragsschluss</h2>
                <ul className='footer__content__ul'>
                    <li className='footer__content__li'>
                        Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern nur eine Aufforderung zur Bestellung dar.
                    </li>
                    <li className='footer__content__li'>
                    Durch Anklicken des Buttons [Kaufen/kostenpflichtig bestellen] geben Sie eine verbindliche Bestellung der auf der Bestellseite aufgelisteten Waren ab. Ihr Kaufvertrag kommt zustande, wenn wir Ihre Bestellung durch eine Auftragsbestätigung per E-Mail unmittelbar nach dem Erhalt Ihrer Bestellung annehmen.
                    </li>
                </ul>
            
            <h2 className='footer__content__chapter-headline' id="widerrufsrecht">Widerrufsrecht</h2>
            <ul className='footer__content__ul'>
                <li className='footer__content__li'>
                    Wenn Sie Verbraucher sind (also eine natürliche Person, die die Bestellung zu einem Zweck abgibt, der weder Ihrer gewerblichen oder selbständigen beruflichen Tätigkeit zugerechnet werden kann), steht Ihnen nach Maßgabe der gesetzlichen Bestimmungen ein Widerrufsrecht zu.
                </li>
                <li className='footer__content__li'>
                    Machen Sie als Verbraucher von Ihrem Widerrufsrecht nach Ziffer 4.1 Gebrauch, so haben Sie die regelmäßigen Kosten der Rücksendung zu tragen.
                </li>
                <li className='footer__content__li'>
                    Im Übrigen gelten für das Widerrufsrecht die Regelungen, die im Einzelnen wiedergegeben sind in der folgenden
                </li>
            </ul>
            
            <h3 className='footer__content__sub-chapter-headline'>Start der Widerrufsbelehrung¹</h3>

            <h4 className='footer__content__sub-sub-chapter-headline'>Widerrufsrecht</h4>

            <p className='footer__content__text'>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>

            <p className='footer__content__text'>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.</p>

            <p className='footer__content__text'>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns [Name des Unternehmers, Anschrift und, soweit verfügbar Telefonnummer, Telefaxnummer und E-Mail Adresse eintragen] mittels einer eindeutigen Erklärung (zB ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Sie können das Muster- Widerrufsformular oder eine andere eindeutige Erklärung auch auf unserer Webseite (Internet-Adresse einfügen) elektronisch ausfüllen und übermitteln. Machen Sie von dieser Möglichkeit Gebrauch, so werden wir Ihnen unverzüglich (zB per E-Mail) eine Bestätigung über den Eingang eines solchen Widerrufs übermitteln.</p>

            <p className='footer__content__text'>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>

            <h4 className='footer__content__sub-sub-chapter-headline'>Folgen des Widerrufs</h4>

            <p className='footer__content__text'>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet. Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.</p>

            <p className='footer__content__text'>Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrages unterrichten, an uns oder an (hier sind gegebenenfalls der Name und die Anschrift der von Ihnen zur Entgegennahme der Ware ermächtigten Person einzufügen) zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.</p>

            <p className='footer__content__text'>Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.</p>

            <p className='footer__content__text'>Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.</p>

            <h3 className='footer__content__sub-chapter-headline'>Ende der Widerrufsbelehrung</h3>

            <p className='footer__content__text-mini'>¹ Diese Widerrufsbelehrung gilt nicht für die getrennte Lieferung von Waren.</p>
            
            <h2 className='footer__content__chapter-headline' id="preise-und-versandkosten">Preise und Versandkosten</h2> 
            <ul className='footer__content__ul'>
                <li className='footer__content__li'>
                    Die auf den Produktseiten genannten Preise enthalten die gesetzliche Mehrwertsteuer und sonstige Preisbestandteile.
                </li>
                <li className='footer__content__li'>
                    Zusätzlich zu den angegebenen Preisen berechnen wir für die Lieferung innerhalb Deutschlands pauschal 6,90 Euro pro Bestellung. Die Versandkosten werden Ihnen auf den Produktseiten, im Warenkorbsystem und auf der Bestellseite nochmals deutlich mitgeteilt.
                </li>
                <li className='footer__content__li'>
                    Bei Zahlung per Nachnahme wird zusätzlich eine Gebühr in Höhe von 2.- Euro fällig, die der Zusteller vor Ort erhebt. Weitere Steuern oder Kosten fallen nicht an.
                </li>
            </ul>

            <h2 className='footer__content__chapter-headline' id="lieferung">Lieferung</h2>
            <ul className='footer__content__ul'>
                <li className='footer__content__li'>
                    Die Lieferung erfolgt nur innerhalb Deutschlands mit DHL.
                </li>
                <li className='footer__content__li'>
                    Die Lieferzeit beträgt bis zu 3 Tage. Auf eventuell abweichende Lieferzeiten weisen wir auf der jeweiligen Produktseite hin.
                </li>
            </ul>
            <h2 className='footer__content__chapter-headline' id="zahlung">Zahlung</h2>
            <ul className='footer__content__ul'>
                <li className='footer__content__li'>
                    Die Zahlung erfolgt wahlweise per Vorkasse oder Nachnahme.
                </li>
                <li className='footer__content__li'>
                    Bei Auswahl der Zahlungsart Vorkasse nennen wir Ihnen unsere Bankverbindung in der Auftragsbestätigung und liefern die Ware nach Zahlungseingang.
                </li>
            </ul>
            <h2 className='footer__content__chapter-headline' id="eigentumsvorbehalt">Eigentumsvorbehalt</h2>
            <p className='footer__content__text'>Bis zur vollständigen Zahlung bleibt die Ware unser Eigentum.</p>
            
            <h2 className='footer__content__chapter-headline' id="streitbeteiligung">Streitbeilegung</h2>
            
            <p className='footer__content__text'>Die EU-Kommission hat eine Internetplattform zur Online-Beilegung von Streitigkeiten geschaffen. Die Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten betreffend vertragliche Verpflichtungen, die aus Online-Kaufverträgen erwachsen. Nähere Informationen sind unter dem folgenden Link verfügbar: http://ec.europa.eu/consumers/odr. Wir sind zur Beilegung von Streitigkeiten mit Verbrauchern zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle bereit oder gemäß XXX (Angabe der Rechtsnorm oder der vertraglichen Vereinbarung) verpflichtet. Die zuständige Verbraucherschlichtungsstelle ist: Universalschlichtungsstelle des Bundes Zentrum für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl am Rhein, www.verbraucher-schlichter.de. Zur Beilegung der genannten Streitigkeiten werden wir in einem Streitbeilegungsverfahren vor dieser Stelle teilnehmen.</p>

            <h4 className='footer__content__sub-sub-chapter-headline'>Alternativ:</h4>
            <p className='footer__content__text'>Die EU-Kommission hat eine Internetplattform zur Online-Beilegung von Streitigkeiten geschaffen. Die Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten betreffend vertragliche Verpflichtungen, die aus Online-Kaufverträgen erwachsen. Nähere Informationen sind unter dem folgenden Link verfügbar: http://ec.europa.eu/consumers/odr. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir weder bereit noch verpflichtet.</p>
        </div>
    )
}

export const Datenschutz = () => {
    return (
        <div className='footer__content'>
            <h1 className='footer__content__headline' id='datenschutz'>Datenschutzerklärung</h1>

            <p className='footer__content__text'>Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung der TabTeam. Eine Nutzung der Internetseiten der TabTeam ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht für eine solche Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.</p>

            <p className='footer__content__text'>Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen Person, erfolgt stets im Einklang mit der Datenschutz-Grundverordnung und in Übereinstimmung mit den für die TabTeam geltenden landesspezifischen Datenschutzbestimmungen. Mittels dieser Datenschutzerklärung möchte unser Unternehmen die Öffentlichkeit über Art, Umfang und Zweck der von uns erhobenen, genutzten und verarbeiteten personenbezogenen Daten informieren. Ferner werden betroffene Personen mittels dieser Datenschutzerklärung über die ihnen zustehenden Rechte aufgeklärt.</p>

            <p className='footer__content__text'>Die TabTeam hat als für die Verarbeitung Verantwortlicher zahlreiche technische und organisatorische Maßnahmen umgesetzt, um einen möglichst lückenlosen Schutz der über diese Internetseite verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch können Internetbasierte Datenübertragungen grundsätzlich Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht gewährleistet werden kann. Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene Daten auch auf alternativen Wegen, beispielsweise telefonisch, an uns zu übermitteln.</p>

            <h2 className='footer__content__chapter-headline' id='datenschutz1'>1. Begriffsbestimmungen</h2>
            <p className='footer__content__text'>Die Datenschutzerklärung der TabTeam beruht auf den Begrifflichkeiten, die durch den Europäischen Richtlinien- und Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung (DS-GVO) verwendet wurden. Unsere Datenschutzerklärung soll sowohl für die Öffentlichkeit als auch für unsere Kunden und Geschäftspartner einfach lesbar und verständlich sein. Um dies zu gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten erläutern.</p>

            <p className='footer__content__text'>Wir verwenden in dieser Datenschutzerklärung unter anderem die folgenden Begriffe:</p>

            <ul className='footer__content__ul'>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>a)    personenbezogene Daten</h3>
            <p className='footer__content__text'>Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen. Als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann.</p>
            </li>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>b)    betroffene Person</h3>
            <p className='footer__content__text'>Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene Daten von dem für die Verarbeitung Verantwortlichen verarbeitet werden.</p>
            </li>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>c)    Verarbeitung</h3>
            <p className='footer__content__text'>Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.</p>
            </li>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>d)    Einschränkung der Verarbeitung</h3>
            <p className='footer__content__text'>Einschränkung der Verarbeitung ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken.</p>
            </li>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>e)    Profiling</h3>
            <p className='footer__content__text'>Profiling ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere, um Aspekte bezüglich Arbeitsleistung, wirtschaftlicher Lage, Gesundheit, persönlicher Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.</p>
            </li>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>f)     Pseudonymisierung</h3>
            <p className='footer__content__text'>Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf welche die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden.</p>
            </li>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>g)    Verantwortlicher oder für die Verarbeitung Verantwortlicher</h3>
            <p className='footer__content__text'>Verantwortlicher oder für die Verarbeitung Verantwortlicher ist die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet. Sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.</p>
            </li>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>h)    Auftragsverarbeiter</h3>
            <p className='footer__content__text'>Auftragsverarbeiter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.</p>
            </li>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>i)      Empfänger</h3>
            <p className='footer__content__text'>Empfänger ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, der personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten jedoch nicht als Empfänger.</p>
            </li>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>j)      Dritter</h3>
            <p className='footer__content__text'>Dritter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle außer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu verarbeiten.</p>
            </li>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>k)    Einwilligung</h3>
            <p className='footer__content__text'>Einwilligung ist jede von der betroffenen Person freiwillig für den bestimmten Fall in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.</p>
            </li>
            </ul>

            <h2 className='footer__content__chapter-headline' id='datenschutz2'>2. Name und Anschrift des für die Verarbeitung Verantwortlichen</h2>
            <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten der Europäischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem Charakter ist die:</p>

            <p className='footer__content__text'>TabTeam</p>
            <p className='footer__content__text'>Ödwieser Weg 7</p>
            <p className='footer__content__text'>84082 Laberweinting</p>
            <p className='footer__content__text'>Deutschland</p>
            <p className='footer__content__text'>Tel.: +4915678215800</p>
            <p className='footer__content__text'>E-Mail: info@tabteam.media</p>
            <p className='footer__content__text'>Website: https://tabteam.media</p>

            <h2 className='footer__content__chapter-headline' id='datenschutz3'>3. Cookies</h2>
            <p className='footer__content__text'>Die Internetseiten der TabTeam verwenden Cookies. Cookies sind Textdateien, welche über einen Internetbrowser auf einem Computersystem abgelegt und gespeichert werden.</p>

            <p className='footer__content__text'>Zahlreiche Internetseiten und Server verwenden Cookies. Viele Cookies enthalten eine sogenannte Cookie-ID. Eine Cookie-ID ist eine eindeutige Kennung des Cookies. Sie besteht aus einer Zeichenfolge, durch welche Internetseiten und Server dem konkreten Internetbrowser zugeordnet werden können, in dem das Cookie gespeichert wurde. Dies ermöglicht es den besuchten Internetseiten und Servern, den individuellen Browser der betroffenen Person von anderen Internetbrowsern, die andere Cookies enthalten, zu unterscheiden. Ein bestimmter Internetbrowser kann über die eindeutige Cookie-ID wiedererkannt und identifiziert werden.</p>

            <p className='footer__content__text'>Durch den Einsatz von Cookies kann die TabTeam den Nutzern dieser Internetseite nutzerfreundlichere Services bereitstellen, die ohne die Cookie-Setzung nicht möglich wären.</p>

            <p className='footer__content__text'>Mittels eines Cookies können die Informationen und Angebote auf unserer Internetseite im Sinne des Benutzers optimiert werden. Cookies ermöglichen uns, wie bereits erwähnt, die Benutzer unserer Internetseite wiederzuerkennen. Zweck dieser Wiedererkennung ist es, den Nutzern die Verwendung unserer Internetseite zu erleichtern. Der Benutzer einer Internetseite, die Cookies verwendet, muss beispielsweise nicht bei jedem Besuch der Internetseite erneut seine Zugangsdaten eingeben, weil dies von der Internetseite und dem auf dem Computersystem des Benutzers abgelegten Cookie übernommen wird. Ein weiteres Beispiel ist das Cookie eines Warenkorbes im Online-Shop. Der Online-Shop merkt sich die Artikel, die ein Kunde in den virtuellen Warenkorb gelegt hat, über ein Cookie.</p>

            <p className='footer__content__text'>Die betroffene Person kann die Setzung von Cookies durch unsere Internetseite jederzeit mittels einer entsprechenden Einstellung des genutzten Internetbrowsers verhindern und damit der Setzung von Cookies dauerhaft widersprechen. Ferner können bereits gesetzte Cookies jederzeit über einen Internetbrowser oder andere Softwareprogramme gelöscht werden. Dies ist in allen gängigen Internetbrowsern möglich. Deaktiviert die betroffene Person die Setzung von Cookies in dem genutzten Internetbrowser, sind unter Umständen nicht alle Funktionen unserer Internetseite vollumfänglich nutzbar.</p>

            <h2 className='footer__content__chapter-headline' id='datenschutz4'>4. Erfassung von allgemeinen Daten und Informationen</h2>
            <p className='footer__content__text'>Die Internetseite der TabTeam erfasst mit jedem Aufruf der Internetseite durch eine betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert. Erfasst werden können die (1) verwendeten Browsertypen und Versionen, (2) das vom zugreifenden System verwendete Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche über ein zugreifendes System auf unserer Internetseite angesteuert werden, (5) das Datum und die Uhrzeit eines Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse (IP-Adresse), (7) der Internet-Service-Provider des zugreifenden Systems und (8) sonstige ähnliche Daten und Informationen, die der Gefahrenabwehr im Falle von Angriffen auf unsere informationstechnologischen Systeme dienen.</p>

            <p className='footer__content__text'>Bei der Nutzung dieser allgemeinen Daten und Informationen zieht die TabTeam keine Rückschlüsse auf die betroffene Person. Diese Informationen werden vielmehr benötigt, um (1) die Inhalte unserer Internetseite korrekt auszuliefern, (2) die Inhalte unserer Internetseite sowie die Werbung für diese zu optimieren, (3) die dauerhafte Funktionsfähigkeit unserer informationstechnologischen Systeme und der Technik unserer Internetseite zu gewährleisten sowie (4) um Strafverfolgungsbehörden im Falle eines Cyberangriffes die zur Strafverfolgung notwendigen Informationen bereitzustellen. Diese anonym erhobenen Daten und Informationen werden durch die TabTeam daher einerseits statistisch und ferner mit dem Ziel ausgewertet, den Datenschutz und die Datensicherheit in unserem Unternehmen zu erhöhen, um letztlich ein optimales Schutzniveau für die von uns verarbeiteten personenbezogenen Daten sicherzustellen. Die anonymen Daten der Server-Logfiles werden getrennt von allen durch eine betroffene Person angegebenen personenbezogenen Daten gespeichert.</p>

            <h2 className='footer__content__chapter-headline' id='datenschutz5'>5. Kontaktmöglichkeit über die Internetseite</h2>
            <p className='footer__content__text'>Die Internetseite der TabTeam enthält aufgrund von gesetzlichen Vorschriften Angaben, die eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen sowie eine unmittelbare Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine Adresse der sogenannten elektronischen Post (E-Mail-Adresse) umfasst. Sofern eine betroffene Person per E-Mail oder über ein Kontaktformular den Kontakt mit dem für die Verarbeitung Verantwortlichen aufnimmt, werden die von der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert. Solche auf freiwilliger Basis von einer betroffenen Person an den für die Verarbeitung Verantwortlichen übermittelten personenbezogenen Daten werden für Zwecke der Bearbeitung oder der Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt keine Weitergabe dieser personenbezogenen Daten an Dritte.</p>

            <h2 className='footer__content__chapter-headline' id='datenschutz6'>6. Routinemäßige Löschung und Sperrung von personenbezogenen Daten</h2>
            <p className='footer__content__text'>Der für die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten der betroffenen Person nur für den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist oder sofern dies durch den Europäischen Richtlinien- und Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder Vorschriften, welchen der für die Verarbeitung Verantwortliche unterliegt, vorgesehen wurde.</p>

            <p className='footer__content__text'>Entfällt der Speicherungszweck oder läuft eine vom Europäischen Richtlinien- und Verordnungsgeber oder einem anderen zuständigen Gesetzgeber vorgeschriebene Speicherfrist ab, werden die personenbezogenen Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.</p>

            <h2 className='footer__content__chapter-headline' id='datenschutz7'>7. Rechte der betroffenen Person</h2>
            <ul className='footer__content__ul'>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>a)    Recht auf Bestätigung</h3>
            <p className='footer__content__text'>Jede betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber eingeräumte Recht, von dem für die Verarbeitung Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden. Möchte eine betroffene Person dieses Bestätigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p>
            </li>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>b)    Recht auf Auskunft</h3>
            <p className='footer__content__text'>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, jederzeit von dem für die Verarbeitung Verantwortlichen unentgeltliche Auskunft über die zu seiner Person gespeicherten personenbezogenen Daten und eine Kopie dieser Auskunft zu erhalten. Ferner hat der Europäische Richtlinien- und Verordnungsgeber der betroffenen Person Auskunft über folgende Informationen zugestanden:</p>

            <ul className='footer__content__ul'>
            <li className='no-list'>die Verarbeitungszwecke</li>
            <li className='no-list'>die Kategorien personenbezogener Daten, die verarbeitet werden</li>
            <li className='no-list'>die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empfängern in Drittländern oder bei internationalen Organisationen</li>
            <li className='no-list'>falls möglich die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer</li>
            <li className='no-list'>das Bestehen eines Rechts auf Berichtigung oder Löschung der sie betreffenden personenbezogenen Daten oder auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung</li>
            <li className='no-list'>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde</li>
            <li className='no-list'>wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden: Alle verfügbaren Informationen über die Herkunft der Daten</li>
            <li className='no-list'>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Artikel 22 Abs.1 und 4 DS-GVO und — zumindest in diesen Fällen — aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person</li>

            </ul>
            <p className='footer__content__text'>Ferner steht der betroffenen Person ein Auskunftsrecht darüber zu, ob personenbezogene Daten an ein Drittland oder an eine internationale Organisation übermittelt wurden. Sofern dies der Fall ist, so steht der betroffenen Person im Übrigen das Recht zu, Auskunft über die geeigneten Garantien im Zusammenhang mit der Übermittlung zu erhalten.</p>

            <p className='footer__content__text'>Möchte eine betroffene Person dieses Auskunftsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p>
            </li>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>c)    Recht auf Berichtigung</h3>
            <p className='footer__content__text'>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, die unverzügliche Berichtigung sie betreffender unrichtiger personenbezogener Daten zu verlangen. Ferner steht der betroffenen Person das Recht zu, unter Berücksichtigung der Zwecke der Verarbeitung, die Vervollständigung unvollständiger personenbezogener Daten — auch mittels einer ergänzenden Erklärung — zu verlangen.</p>

            <p className='footer__content__text'>Möchte eine betroffene Person dieses Berichtigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p></li>
            <li className='no-list'>
            <h3 className='footer__content__sub-chapter-headline'>d)    Recht auf Löschung (Recht auf Vergessen werden)</h3>
            <p className='footer__content__text'>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen zu verlangen, dass die sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, sofern einer der folgenden Gründe zutrifft und soweit die Verarbeitung nicht erforderlich ist:</p>

            <ul className='footer__content__ul'>
            <li className='no-list'>Die personenbezogenen Daten wurden für solche Zwecke erhoben oder auf sonstige Weise verarbeitet, für welche sie nicht mehr notwendig sind.</li>
            <li className='no-list'>Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
            <li className='no-list'>Die betroffene Person legt gemäß Art. 21 Abs. 1 DS-GVO Widerspruch gegen die Verarbeitung ein, und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder die betroffene Person legt gemäß Art. 21 Abs. 2 DS-GVO Widerspruch gegen die Verarbeitung ein.</li>
            <li className='no-list'>Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
            <li className='no-list'>Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.</li>
            <li className='no-list'>Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DS-GVO erhoben.</li>

            </ul>
            <p className='footer__content__text'>Sofern einer der oben genannten Gründe zutrifft und eine betroffene Person die Löschung von personenbezogenen Daten, die bei der TabTeam gespeichert sind, veranlassen möchte, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der TabTeam wird veranlassen, dass dem Löschverlangen unverzüglich nachgekommen wird.</p>

            <p className='footer__content__text'>Wurden die personenbezogenen Daten von der TabTeam öffentlich gemacht und ist unser Unternehmen als Verantwortlicher gemäß Art. 17 Abs. 1 DS-GVO zur Löschung der personenbezogenen Daten verpflichtet, so trifft die TabTeam unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um andere für die Datenverarbeitung Verantwortliche, welche die veröffentlichten personenbezogenen Daten verarbeiten, darüber in Kenntnis zu setzen, dass die betroffene Person von diesen anderen für die Datenverarbeitung Verantwortlichen die Löschung sämtlicher Links zu diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt hat, soweit die Verarbeitung nicht erforderlich ist. Der Mitarbeiter der TabTeam wird im Einzelfall das Notwendige veranlassen.</p>
            </li>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>e)    Recht auf Einschränkung der Verarbeitung</h3>
            <p className='footer__content__text'>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:</p>

            <ul className='footer__content__ul'>
            <li className='no-list'>Die Richtigkeit der personenbezogenen Daten wird von der betroffenen Person bestritten, und zwar für eine Dauer, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen.</li>
            <li className='no-list'>Die Verarbeitung ist unrechtmäßig, die betroffene Person lehnt die Löschung der personenbezogenen Daten ab und verlangt stattdessen die Einschränkung der Nutzung der personenbezogenen Daten.</li>
            <li className='no-list'>Der Verantwortliche benötigt die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger, die betroffene Person benötigt sie jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
            <li className='no-list'>Die betroffene Person hat Widerspruch gegen die Verarbeitung gem. Art. 21 Abs. 1 DS-GVO eingelegt und es steht noch nicht fest, ob die berechtigten Gründe des Verantwortlichen gegenüber denen der betroffenen Person überwiegen.</li>

            </ul>
            <p className='footer__content__text'>Sofern eine der oben genannten Voraussetzungen gegeben ist und eine betroffene Person die Einschränkung von personenbezogenen Daten, die bei der TabTeam gespeichert sind, verlangen möchte, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der TabTeam wird die Einschränkung der Verarbeitung veranlassen.</p>
            </li>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>f)     Recht auf Datenübertragbarkeit</h3>
            <p className='footer__content__text'>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, die sie betreffenden personenbezogenen Daten, welche durch die betroffene Person einem Verantwortlichen bereitgestellt wurden, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Sie hat außerdem das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern die Verarbeitung auf der Einwilligung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO oder auf einem Vertrag gemäß Art. 6 Abs. 1 Buchstabe b DS-GVO beruht und die Verarbeitung mithilfe automatisierter Verfahren erfolgt, sofern die Verarbeitung nicht für die Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, welche dem Verantwortlichen übertragen wurde.</p>

            <p className='footer__content__text'>Ferner hat die betroffene Person bei der Ausübung ihres Rechts auf Datenübertragbarkeit gemäß Art. 20 Abs. 1 DS-GVO das Recht, zu erwirken, dass die personenbezogenen Daten direkt von einem Verantwortlichen an einen anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist und sofern hiervon nicht die Rechte und Freiheiten anderer Personen beeinträchtigt werden.</p>

            <p className='footer__content__text'>Zur Geltendmachung des Rechts auf Datenübertragbarkeit kann sich die betroffene Person jederzeit an einen Mitarbeiter der TabTeam wenden.</p>

            </li>
            <li className='no-list'>
            <h3 className='footer__content__sub-chapter-headline'>g)    Recht auf Widerspruch</h3>
            <p className='footer__content__text'>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 Buchstaben e oder f DS-GVO erfolgt, Widerspruch einzulegen. Dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.</p>

            <p className='footer__content__text'>Die TabTeam verarbeitet die personenbezogenen Daten im Falle des Widerspruchs nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die den Interessen, Rechten und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>

            <p className='footer__content__text'>Verarbeitet die TabTeam personenbezogene Daten, um Direktwerbung zu betreiben, so hat die betroffene Person das Recht, jederzeit Widerspruch gegen die Verarbeitung der personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen. Dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Widerspricht die betroffene Person gegenüber der TabTeam der Verarbeitung für Zwecke der Direktwerbung, so wird die TabTeam die personenbezogenen Daten nicht mehr für diese Zwecke verarbeiten.</p>

            <p className='footer__content__text'>Zudem hat die betroffene Person das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, gegen die sie betreffende Verarbeitung personenbezogener Daten, die bei der TabTeam zu wissenschaftlichen oder historischen Forschungszwecken oder zu statistischen Zwecken gemäß Art. 89 Abs. 1 DS-GVO erfolgen, Widerspruch einzulegen, es sei denn, eine solche Verarbeitung ist zur Erfüllung einer im öffentlichen Interesse liegenden Aufgabe erforderlich.</p>

            <p className='footer__content__text'>Zur Ausübung des Rechts auf Widerspruch kann sich die betroffene Person direkt an jeden Mitarbeiter der TabTeam oder einen anderen Mitarbeiter wenden. Der betroffenen Person steht es ferner frei, im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft, ungeachtet der Richtlinie 2002/58/EG, ihr Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen technische Spezifikationen verwendet werden.</p>
            </li>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>h)    Automatisierte Entscheidungen im Einzelfall einschließlich Profiling</h3>
            <p className='footer__content__text'>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden, die ihr gegenüber rechtliche Wirkung entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt, sofern die Entscheidung (1) nicht für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich ist, oder (2) aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung der Rechte und Freiheiten sowie der berechtigten Interessen der betroffenen Person enthalten oder (3) mit ausdrücklicher Einwilligung der betroffenen Person erfolgt.</p>

            <p className='footer__content__text'>Ist die Entscheidung (1) für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich oder (2) erfolgt sie mit ausdrücklicher Einwilligung der betroffenen Person, trifft die TabTeam angemessene Maßnahmen, um die Rechte und Freiheiten sowie die berechtigten Interessen der betroffenen Person zu wahren, wozu mindestens das Recht auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung gehört.</p>

            <p className='footer__content__text'>Möchte die betroffene Person Rechte mit Bezug auf automatisierte Entscheidungen geltend machen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p>

            </li>
            <li className='no-list'><h3 className='footer__content__sub-chapter-headline'>i)      Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</h3>
            <p className='footer__content__text'>Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte Recht, eine Einwilligung zur Verarbeitung personenbezogener Daten jederzeit zu widerrufen.</p>

            <p className='footer__content__text'>Möchte die betroffene Person ihr Recht auf Widerruf einer Einwilligung geltend machen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.</p>

            </li>
            </ul>
            <h2 className='footer__content__chapter-headline' id='datenschutz8'>8. Datenschutz bei Bewerbungen und im Bewerbungsverfahren</h2>
            <p className='footer__content__text'>Der für die Verarbeitung Verantwortliche erhebt und verarbeitet die personenbezogenen Daten von Bewerbern zum Zwecke der Abwicklung des Bewerbungsverfahrens. Die Verarbeitung kann auch auf elektronischem Wege erfolgen. Dies ist insbesondere dann der Fall, wenn ein Bewerber entsprechende Bewerbungsunterlagen auf dem elektronischen Wege, beispielsweise per E-Mail oder über ein auf der Internetseite befindliches Webformular, an den für die Verarbeitung Verantwortlichen übermittelt. Schließt der für die Verarbeitung Verantwortliche einen Anstellungsvertrag mit einem Bewerber, werden die übermittelten Daten zum Zwecke der Abwicklung des Beschäftigungsverhältnisses unter Beachtung der gesetzlichen Vorschriften gespeichert. Wird von dem für die Verarbeitung Verantwortlichen kein Anstellungsvertrag mit dem Bewerber geschlossen, so werden die Bewerbungsunterlagen zwei Monate nach Bekanntgabe der Absageentscheidung automatisch gelöscht, sofern einer Löschung keine sonstigen berechtigten Interessen des für die Verarbeitung Verantwortlichen entgegenstehen. Sonstiges berechtigtes Interesse in diesem Sinne ist beispielsweise eine Beweispflicht in einem Verfahren nach dem Allgemeinen Gleichbehandlungsgesetz (AGG).</p>

            <h2 className='footer__content__chapter-headline' id='datenschutz9'>9. Datenschutzbestimmungen zu Einsatz und Verwendung von Facebook</h2>
            <p className='footer__content__text'>Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite Komponenten des Unternehmens Facebook integriert. Facebook ist ein soziales Netzwerk.</p>

            <p className='footer__content__text'>Ein soziales Netzwerk ist ein im Internet betriebener sozialer Treffpunkt, eine Online-Gemeinschaft, die es den Nutzern in der Regel ermöglicht, untereinander zu kommunizieren und im virtuellen Raum zu interagieren. Ein soziales Netzwerk kann als Plattform zum Austausch von Meinungen und Erfahrungen dienen oder ermöglicht es der Internetgemeinschaft, persönliche oder unternehmensbezogene Informationen bereitzustellen. Facebook ermöglicht den Nutzern des sozialen Netzwerkes unter anderem die Erstellung von privaten Profilen, den Upload von Fotos und eine Vernetzung über Freundschaftsanfragen.</p>

            <p className='footer__content__text'>Betreibergesellschaft von Facebook ist die Facebook, Inc., 1 Hacker Way, Menlo Park, CA 94025, USA. Für die Verarbeitung personenbezogener Daten Verantwortlicher ist, wenn eine betroffene Person außerhalb der USA oder Kanada lebt, die Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland.</p>

            <p className='footer__content__text'>Durch jeden Aufruf einer der Einzelseiten dieser Internetseite, die durch den für die Verarbeitung Verantwortlichen betrieben wird und auf welcher eine Facebook-Komponente (Facebook-Plug-In) integriert wurde, wird der Internetbrowser auf dem informationstechnologischen System der betroffenen Person automatisch durch die jeweilige Facebook-Komponente veranlasst, eine Darstellung der entsprechenden Facebook-Komponente von Facebook herunterzuladen. Eine Gesamtübersicht über alle Facebook-Plug-Ins kann unter https://developers.facebook.com/docs/plugins/?locale=de_DE abgerufen werden. Im Rahmen dieses technischen Verfahrens erhält Facebook Kenntnis darüber, welche konkrete Unterseite unserer Internetseite durch die betroffene Person besucht wird.</p>

            <p className='footer__content__text'>Sofern die betroffene Person gleichzeitig bei Facebook eingeloggt ist, erkennt Facebook mit jedem Aufruf unserer Internetseite durch die betroffene Person und während der gesamten Dauer des jeweiligen Aufenthaltes auf unserer Internetseite, welche konkrete Unterseite unserer Internetseite die betroffene Person besucht. Diese Informationen werden durch die Facebook-Komponente gesammelt und durch Facebook dem jeweiligen Facebook-Account der betroffenen Person zugeordnet. Betätigt die betroffene Person einen der auf unserer Internetseite integrierten Facebook-Buttons, beispielsweise den „Gefällt mir“-Button, oder gibt die betroffene Person einen Kommentar ab, ordnet Facebook diese Information dem persönlichen Facebook-Benutzerkonto der betroffenen Person zu und speichert diese personenbezogenen Daten.</p>

            <p className='footer__content__text'>Facebook erhält über die Facebook-Komponente immer dann eine Information darüber, dass die betroffene Person unsere Internetseite besucht hat, wenn die betroffene Person zum Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei Facebook eingeloggt ist; dies findet unabhängig davon statt, ob die betroffene Person die Facebook-Komponente anklickt oder nicht. Ist eine derartige Übermittlung dieser Informationen an Facebook von der betroffenen Person nicht gewollt, kann diese die Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf unserer Internetseite aus ihrem Facebook-Account ausloggt.</p>

            <p className='footer__content__text'>Die von Facebook veröffentlichte Datenrichtlinie, die unter https://de-de.facebook.com/about/privacy/ abrufbar ist, gibt Aufschluss über die Erhebung, Verarbeitung und Nutzung personenbezogener Daten durch Facebook. Ferner wird dort erläutert, welche Einstellungsmöglichkeiten Facebook zum Schutz der Privatsphäre der betroffenen Person bietet. Zudem sind unterschiedliche Applikationen erhältlich, die es ermöglichen, eine Datenübermittlung an Facebook zu unterdrücken. Solche Applikationen können durch die betroffene Person genutzt werden, um eine Datenübermittlung an Facebook zu unterdrücken.</p>

            <h2 className='footer__content__chapter-headline' id='datenschutz10'>10. Datenschutzbestimmungen zu Einsatz und Verwendung von Google AdSense</h2>
            <p className='footer__content__text'>Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite Google AdSense integriert. Google AdSense ist ein Online-Dienst, über welchen eine Vermittlung von Werbung auf Drittseiten ermöglicht wird. Google AdSense beruht auf einem Algorithmus, welcher die auf Drittseiten angezeigten Werbeanzeigen passend zu den Inhalten der jeweiligen Drittseite auswählt. Google AdSense gestattet ein interessenbezogenes Targeting des Internetnutzers, welches mittels Generierung von individuellen Benutzerprofilen umgesetzt wird.</p>

            <p className='footer__content__text'>Betreibergesellschaft der Google-AdSense-Komponente ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin, D04 E5W5, Ireland.</p>

            <p className='footer__content__text'>Der Zweck der Google-AdSense-Komponente ist die Einbindung von Werbeanzeigen auf unserer Internetseite. Google-AdSense setzt ein Cookie auf dem informationstechnologischen System der betroffenen Person. Was Cookies sind, wurde oben bereits erläutert. Mit der Setzung des Cookies wird der Alphabet Inc. eine Analyse der Benutzung unserer Internetseite ermöglicht. Durch jeden Aufruf einer der Einzelseiten dieser Internetseite, die durch den für die Verarbeitung Verantwortlichen betrieben wird und auf welcher eine Google-AdSense-Komponente integriert wurde, wird der Internetbrowser auf dem informationstechnologischen System der betroffenen Person automatisch durch die jeweilige Google-AdSense-Komponente veranlasst, Daten zum Zwecke der Online-Werbung und der Abrechnung von Provisionen an die Alphabet Inc. zu übermitteln. Im Rahmen dieses technischen Verfahrens erhält die Alphabet Inc. Kenntnis über personenbezogene Daten, wie der IP-Adresse der betroffenen Person, die der Alphabet Inc. unter anderem dazu dienen, die Herkunft der Besucher und Klicks nachzuvollziehen und in der Folge Provisionsabrechnungen zu ermöglichen.</p>

            <p className='footer__content__text'>Die betroffene Person kann die Setzung von Cookies durch unsere Internetseite, wie oben bereits dargestellt, jederzeit mittels einer entsprechenden Einstellung des genutzten Internetbrowsers verhindern und damit der Setzung von Cookies dauerhaft widersprechen. Eine solche Einstellung des genutzten Internetbrowsers würde auch verhindern, dass die Alphabet Inc. ein Cookie auf dem informationstechnologischen System der betroffenen Person setzt. Zudem kann ein von der Alphabet Inc. bereits gesetzter Cookie jederzeit über den Internetbrowser oder andere Softwareprogramme gelöscht werden.</p>

            <p className='footer__content__text'>Google AdSense verwendet zudem sogenannte Zählpixel. Ein Zählpixel ist eine Miniaturgrafik, die in Internetseiten eingebettet wird, um eine Logdatei-Aufzeichnung und eine Logdatei-Analyse zu ermöglichen, wodurch eine statistische Auswertung durchgeführt werden kann. Anhand des eingebetteten Zählpixels kann die Alphabet Inc. erkennen, ob und wann eine Internetseite von einer betroffenen Person geöffnet wurde und welche Links von der betroffenen Person angeklickt wurden. Zählpixel dienen unter anderem dazu, den Besucherfluss einer Internetseite auszuwerten.</p>

            <p className='footer__content__text'>Über Google AdSense werden personenbezogene Daten und Informationen, was auch die IP-Adresse umfasst und zur Erfassung und Abrechnung der angezeigten Werbeanzeigen notwendig ist, an die Alphabet Inc. in die Vereinigten Staaten von Amerika übertragen. Diese personenbezogenen Daten werden in den Vereinigten Staaten von Amerika gespeichert und verarbeitet. Die Alphabet Inc. gibt diese über das technische Verfahren erhobenen personenbezogenen Daten unter Umständen an Dritte weiter.</p>

            <p className='footer__content__text'>Google-AdSense wird unter diesem Link https://www.google.de/intl/de/adsense/start/ genauer erläutert.</p>

            <h2 className='footer__content__chapter-headline' id='datenschutz11'>11. Datenschutzbestimmungen zu Einsatz und Verwendung von Google Analytics (mit Anonymisierungsfunktion)</h2>
            <p className='footer__content__text'>Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite die Komponente Google Analytics (mit Anonymisierungsfunktion) integriert. Google Analytics ist ein Web-Analyse-Dienst. Web-Analyse ist die Erhebung, Sammlung und Auswertung von Daten über das Verhalten von Besuchern von Internetseiten. Ein Web-Analyse-Dienst erfasst unter anderem Daten darüber, von welcher Internetseite eine betroffene Person auf eine Internetseite gekommen ist (sogenannte Referrer), auf welche Unterseiten der Internetseite zugegriffen oder wie oft und für welche Verweildauer eine Unterseite betrachtet wurde. Eine Web-Analyse wird überwiegend zur Optimierung einer Internetseite und zur Kosten-Nutzen-Analyse von Internetwerbung eingesetzt.</p>

            <p className='footer__content__text'>Betreibergesellschaft der Google-Analytics-Komponente ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin, D04 E5W5, Ireland.</p>

            <p className='footer__content__text'>Der für die Verarbeitung Verantwortliche verwendet für die Web-Analyse über Google Analytics den Zusatz "_gat._anonymizeIp". Mittels dieses Zusatzes wird die IP-Adresse des Internetanschlusses der betroffenen Person von Google gekürzt und anonymisiert, wenn der Zugriff auf unsere Internetseiten aus einem Mitgliedstaat der Europäischen Union oder aus einem anderen Vertragsstaat des Abkommens über den Europäischen Wirtschaftsraum erfolgt.</p>

            <p className='footer__content__text'>Der Zweck der Google-Analytics-Komponente ist die Analyse der Besucherströme auf unserer Internetseite. Google nutzt die gewonnenen Daten und Informationen unter anderem dazu, die Nutzung unserer Internetseite auszuwerten, um für uns Online-Reports, welche die Aktivitäten auf unseren Internetseiten aufzeigen, zusammenzustellen, und um weitere mit der Nutzung unserer Internetseite in Verbindung stehende Dienstleistungen zu erbringen.</p>

            <p className='footer__content__text'>Google Analytics setzt ein Cookie auf dem informationstechnologischen System der betroffenen Person. Was Cookies sind, wurde oben bereits erläutert. Mit Setzung des Cookies wird Google eine Analyse der Benutzung unserer Internetseite ermöglicht. Durch jeden Aufruf einer der Einzelseiten dieser Internetseite, die durch den für die Verarbeitung Verantwortlichen betrieben wird und auf welcher eine Google-Analytics-Komponente integriert wurde, wird der Internetbrowser auf dem informationstechnologischen System der betroffenen Person automatisch durch die jeweilige Google-Analytics-Komponente veranlasst, Daten zum Zwecke der Online-Analyse an Google zu übermitteln. Im Rahmen dieses technischen Verfahrens erhält Google Kenntnis über personenbezogene Daten, wie der IP-Adresse der betroffenen Person, die Google unter anderem dazu dienen, die Herkunft der Besucher und Klicks nachzuvollziehen und in der Folge Provisionsabrechnungen zu ermöglichen.</p>

            <p className='footer__content__text'>Mittels des Cookies werden personenbezogene Informationen, beispielsweise die Zugriffszeit, der Ort, von welchem ein Zugriff ausging und die Häufigkeit der Besuche unserer Internetseite durch die betroffene Person, gespeichert. Bei jedem Besuch unserer Internetseiten werden diese personenbezogenen Daten, einschließlich der IP-Adresse des von der betroffenen Person genutzten Internetanschlusses, an Google in den Vereinigten Staaten von Amerika übertragen. Diese personenbezogenen Daten werden durch Google in den Vereinigten Staaten von Amerika gespeichert. Google gibt diese über das technische Verfahren erhobenen personenbezogenen Daten unter Umständen an Dritte weiter.</p>

            <p className='footer__content__text'>Die betroffene Person kann die Setzung von Cookies durch unsere Internetseite, wie oben bereits dargestellt, jederzeit mittels einer entsprechenden Einstellung des genutzten Internetbrowsers verhindern und damit der Setzung von Cookies dauerhaft widersprechen. Eine solche Einstellung des genutzten Internetbrowsers würde auch verhindern, dass Google ein Cookie auf dem informationstechnologischen System der betroffenen Person setzt. Zudem kann ein von Google Analytics bereits gesetzter Cookie jederzeit über den Internetbrowser oder andere Softwareprogramme gelöscht werden.</p>

            <p className='footer__content__text'>Ferner besteht für die betroffene Person die Möglichkeit, einer Erfassung der durch Google Analytics erzeugten, auf eine Nutzung dieser Internetseite bezogenen Daten sowie der Verarbeitung dieser Daten durch Google zu widersprechen und eine solche zu verhindern. Hierzu muss die betroffene Person ein Browser-Add-On unter dem Link https://tools.google.com/dlpage/gaoptout herunterladen und installieren. Dieses Browser-Add-On teilt Google Analytics über JavaScript mit, dass keine Daten und Informationen zu den Besuchen von Internetseiten an Google Analytics übermittelt werden dürfen. Die Installation des Browser-Add-Ons wird von Google als Widerspruch gewertet. Wird das informationstechnologische System der betroffenen Person zu einem späteren Zeitpunkt gelöscht, formatiert oder neu installiert, muss durch die betroffene Person eine erneute Installation des Browser-Add-Ons erfolgen, um Google Analytics zu deaktivieren. Sofern das Browser-Add-On durch die betroffene Person oder einer anderen Person, die ihrem Machtbereich zuzurechnen ist, deinstalliert oder deaktiviert wird, besteht die Möglichkeit der Neuinstallation oder der erneuten Aktivierung des Browser-Add-Ons.</p>

            <p className='footer__content__text'>Weitere Informationen und die geltenden Datenschutzbestimmungen von Google können unter https://www.google.de/intl/de/policies/privacy/ und unter http://www.google.com/analytics/terms/de.html abgerufen werden. Google Analytics wird unter diesem Link https://www.google.com/intl/de_de/analytics/ genauer erläutert.</p>

            <h2 className='footer__content__chapter-headline' id='datenschutz12'>12. Datenschutzbestimmungen zu Einsatz und Verwendung von Instagram</h2>
            <p className='footer__content__text'>Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite Komponenten des Dienstes Instagram integriert. Instagram ist ein Dienst, der als audiovisuelle Plattform zu qualifizieren ist und den Nutzern das Teilen von Fotos und Videos und zudem eine Weiterverbreitung solcher Daten in anderen sozialen Netzwerken ermöglicht.</p>

            <p className='footer__content__text'>Betreibergesellschaft der Dienste von Instagram ist die Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2 Ireland.</p>

            <p className='footer__content__text'>Durch jeden Aufruf einer der Einzelseiten dieser Internetseite, die durch den für die Verarbeitung Verantwortlichen betrieben wird und auf welcher eine Instagram-Komponente (Insta-Button) integriert wurde, wird der Internetbrowser auf dem informationstechnologischen System der betroffenen Person automatisch durch die jeweilige Instagram-Komponente veranlasst, eine Darstellung der entsprechenden Komponente von Instagram herunterzuladen. Im Rahmen dieses technischen Verfahrens erhält Instagram Kenntnis darüber, welche konkrete Unterseite unserer Internetseite durch die betroffene Person besucht wird.</p>

            <p className='footer__content__text'>Sofern die betroffene Person gleichzeitig bei Instagram eingeloggt ist, erkennt Instagram mit jedem Aufruf unserer Internetseite durch die betroffene Person und während der gesamten Dauer des jeweiligen Aufenthaltes auf unserer Internetseite, welche konkrete Unterseite die betroffene Person besucht. Diese Informationen werden durch die Instagram-Komponente gesammelt und durch Instagram dem jeweiligen Instagram-Account der betroffenen Person zugeordnet. Betätigt die betroffene Person einen der auf unserer Internetseite integrierten Instagram-Buttons, werden die damit übertragenen Daten und Informationen dem persönlichen Instagram-Benutzerkonto der betroffenen Person zugeordnet und von Instagram gespeichert und verarbeitet.</p>

            <p className='footer__content__text'>Instagram erhält über die Instagram-Komponente immer dann eine Information darüber, dass die betroffene Person unsere Internetseite besucht hat, wenn die betroffene Person zum Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei Instagram eingeloggt ist; dies findet unabhängig davon statt, ob die betroffene Person die Instagram-Komponente anklickt oder nicht. Ist eine derartige Übermittlung dieser Informationen an Instagram von der betroffenen Person nicht gewollt, kann diese die Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf unserer Internetseite aus ihrem Instagram-Account ausloggt.</p>

            <p className='footer__content__text'>Weitere Informationen und die geltenden Datenschutzbestimmungen von Instagram können unter https://help.instagram.com/155833707900388 und https://www.instagram.com/about/legal/privacy/ abgerufen werden.</p>

            <h2 className='footer__content__chapter-headline' id='datenschutz13'>13. Datenschutzbestimmungen zu Einsatz und Verwendung von LinkedIn</h2>
            <p className='footer__content__text'>Der für die Verarbeitung Verantwortliche hat auf dieser Internetseite Komponenten der LinkedIn Corporation integriert. LinkedIn ist ein Internetbasiertes soziales Netzwerk, das eine Konnektierung der Nutzer mit bestehenden Geschäftskontakten sowie das Knüpfen von neuen Businesskontakten ermöglicht. Über 400 Millionen registrierte Personen nutzen LinkedIn in mehr als 200 Ländern. Damit ist LinkedIn derzeit die größte Plattform für Businesskontakte und eine der meistbesuchten Internetseiten der Welt.</p>

            <p className='footer__content__text'>Betreibergesellschaft von LinkedIn ist die LinkedIn Corporation, 2029 Stierlin Court Mountain View, CA 94043, USA. Für Datenschutzangelegenheiten außerhalb der USA ist LinkedIn Ireland, Privacy Policy Issues, Wilton Plaza, Wilton Place, Dublin 2, Ireland, zuständig.</p>

            <p className='footer__content__text'>Bei jedem einzelnen Abruf unserer Internetseite, die mit einer LinkedIn-Komponente (LinkedIn-Plug-In) ausgestattet ist, veranlasst diese Komponente, dass der von der betroffenen Person verwendete Browser eine entsprechende Darstellung der Komponente von LinkedIn herunterlädt. Weitere Informationen zu den LinkedIn-Plug-Ins können unter https://developer.linkedin.com/plugins abgerufen werden. Im Rahmen dieses technischen Verfahrens erhält LinkedIn Kenntnis darüber, welche konkrete Unterseite unserer Internetseite durch die betroffene Person besucht wird.</p>

            <p className='footer__content__text'>Sofern die betroffene Person gleichzeitig bei LinkedIn eingeloggt ist, erkennt LinkedIn mit jedem Aufruf unserer Internetseite durch die betroffene Person und während der gesamten Dauer des jeweiligen Aufenthaltes auf unserer Internetseite, welche konkrete Unterseite unserer Internetseite die betroffene Person besucht. Diese Informationen werden durch die LinkedIn-Komponente gesammelt und durch LinkedIn dem jeweiligen LinkedIn-Account der betroffenen Person zugeordnet. Betätigt die betroffene Person einen auf unserer Internetseite integrierten LinkedIn-Button, ordnet LinkedIn diese Information dem persönlichen LinkedIn-Benutzerkonto der betroffenen Person zu und speichert diese personenbezogenen Daten.</p>

            <p className='footer__content__text'>LinkedIn erhält über die LinkedIn-Komponente immer dann eine Information darüber, dass die betroffene Person unsere Internetseite besucht hat, wenn die betroffene Person zum Zeitpunkt des Aufrufes unserer Internetseite gleichzeitig bei LinkedIn eingeloggt ist; dies findet unabhängig davon statt, ob die betroffene Person die LinkedIn-Komponente anklickt oder nicht. Ist eine derartige Übermittlung dieser Informationen an LinkedIn von der betroffenen Person nicht gewollt, kann diese die Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf unserer Internetseite aus ihrem LinkedIn-Account ausloggt.</p>

            <p className='footer__content__text'>LinkedIn bietet unter https://www.linkedin.com/psettings/guest-controls die Möglichkeit, E-Mail-Nachrichten, SMS-Nachrichten und zielgerichtete Anzeigen abzubestellen sowie Anzeigen-Einstellungen zu verwalten. LinkedIn nutzt ferner Partner wie Quantcast, Google Analytics, BlueKai, DoubleClick, Nielsen, Comscore, Eloqua und Lotame, die Cookies setzen können. Solche Cookies können unter https://www.linkedin.com/legal/cookie-policy abgelehnt werden. Die geltenden Datenschutzbestimmungen von LinkedIn sind unter https://www.linkedin.com/legal/privacy-policy abrufbar. Die Cookie-Richtlinie von LinkedIn ist unter https://www.linkedin.com/legal/cookie-policy abrufbar.</p>

            <h2 className='footer__content__chapter-headline' id='datenschutz14'>14. Rechtsgrundlage der Verarbeitung</h2>
            <p className='footer__content__text'>Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage für Verarbeitungsvorgänge, bei denen wir eine Einwilligung für einen bestimmten Verarbeitungszweck einholen. Ist die Verarbeitung personenbezogener Daten zur Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, erforderlich, wie dies beispielsweise bei Verarbeitungsvorgängen der Fall ist, die für eine Lieferung von Waren oder die Erbringung einer sonstigen Leistung oder Gegenleistung notwendig sind, so beruht die Verarbeitung auf Art. 6 I lit. b DS-GVO. Gleiches gilt für solche Verarbeitungsvorgänge die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind, etwa in Fällen von Anfragen zur unseren Produkten oder Leistungen. Unterliegt unser Unternehmen einer rechtlichen Verpflichtung durch welche eine Verarbeitung von personenbezogenen Daten erforderlich wird, wie beispielsweise zur Erfüllung steuerlicher Pflichten, so basiert die Verarbeitung auf Art. 6 I lit. c DS-GVO. In seltenen Fällen könnte die Verarbeitung von personenbezogenen Daten erforderlich werden, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen. Dies wäre beispielsweise der Fall, wenn ein Besucher in unserem Betrieb verletzt werden würde und daraufhin sein Name, sein Alter, seine Krankenkassendaten oder sonstige lebenswichtige Informationen an einen Arzt, ein Krankenhaus oder sonstige Dritte weitergegeben werden müssten. Dann würde die Verarbeitung auf Art. 6 I lit. d DS-GVO beruhen.
            Letztlich könnten Verarbeitungsvorgänge auf Art. 6 I lit. f DS-GVO beruhen. Auf dieser Rechtsgrundlage basieren Verarbeitungsvorgänge, die von keiner der vorgenannten Rechtsgrundlagen erfasst werden, wenn die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich ist, sofern die Interessen, Grundrechte und Grundfreiheiten des Betroffenen nicht überwiegen. Solche Verarbeitungsvorgänge sind uns insbesondere deshalb gestattet, weil sie durch den Europäischen Gesetzgeber besonders erwähnt wurden. Er vertrat insoweit die Auffassung, dass ein berechtigtes Interesse anzunehmen sein könnte, wenn die betroffene Person ein Kunde des Verantwortlichen ist (Erwägungsgrund 47 Satz 2 DS-GVO).
            </p>

            <h2 className='footer__content__chapter-headline' id='datenschutz15'>15. Berechtigte Interessen an der Verarbeitung, die von dem Verantwortlichen oder einem Dritten verfolgt werden</h2>
            <p className='footer__content__text'>Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I lit. f DS-GVO ist unser berechtigtes Interesse die Durchführung unserer Geschäftstätigkeit zugunsten des Wohlergehens all unserer Mitarbeiter und unserer Anteilseigner.</p>

            <h2 className='footer__content__chapter-headline' id='datenschutz16'>16. Dauer, für die die personenbezogenen Daten gespeichert werden</h2>
            <p className='footer__content__text'>Das Kriterium für die Dauer der Speicherung von personenbezogenen Daten ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist werden die entsprechenden Daten routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind.</p>

            <h2 className='footer__content__chapter-headline' id='datenschutz17'>17. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der personenbezogenen Daten; Erforderlichkeit für den Vertragsabschluss; Verpflichtung der betroffenen Person, die personenbezogenen Daten bereitzustellen; mögliche Folgen der Nichtbereitstellung</h2>
            <p className='footer__content__text'>Wir klären Sie darüber auf, dass die Bereitstellung personenbezogener Daten zum Teil gesetzlich vorgeschrieben ist (z.B. Steuervorschriften) oder sich auch aus vertraglichen Regelungen (z.B. Angaben zum Vertragspartner) ergeben kann.
            Mitunter kann es zu einem Vertragsschluss erforderlich sein, dass eine betroffene Person uns personenbezogene Daten zur Verfügung stellt, die in der Folge durch uns verarbeitet werden müssen. Die betroffene Person ist beispielsweise verpflichtet uns personenbezogene Daten bereitzustellen, wenn unser Unternehmen mit ihr einen Vertrag abschließt. Eine Nichtbereitstellung der personenbezogenen Daten hätte zur Folge, dass der Vertrag mit dem Betroffenen nicht geschlossen werden könnte.
            Vor einer Bereitstellung personenbezogener Daten durch den Betroffenen muss sich der Betroffene an einen unserer Mitarbeiter wenden. Unser Mitarbeiter klärt den Betroffenen einzelfallbezogen darüber auf, ob die Bereitstellung der personenbezogenen Daten gesetzlich oder vertraglich vorgeschrieben oder für den Vertragsabschluss erforderlich ist, ob eine Verpflichtung besteht, die personenbezogenen Daten bereitzustellen, und welche Folgen die Nichtbereitstellung der personenbezogenen Daten hätte.
            </p>

            <h2 className='footer__content__chapter-headline' id='datenschutz18'>18. Bestehen einer automatisierten Entscheidungsfindung</h2>
            <p className='footer__content__text'>Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische Entscheidungsfindung oder ein Profiling.</p>

            <p className='footer__content__text'>Developed by the specialists for <a href="https://willing-able.com/">LegalTech</a> at Willing & Able that also developed the system for <a href="https://abletorecords.com/">dpia assessment</a>. The legal texts contained in our privacy policy generator have been provided and published by <a href="https://dg-datenschutz.de/">Prof. Dr. h.c. Heiko Jonny Maniero</a> from the German Association for Data Protection and <a href="https://www.wbs-law.de/" rel="nofollow">Christian Solmecke</a> from WBS law.</p>
        </div>
    )
}

export const Impressum = () => {
    return (
        <div className='footer__content'>
            <h1 className='footer__content__headline'>Impressum</h1>
            <h2 className='footer__content__chapter-headline'>Angaben gemäß § 5 TMG:</h2>
            
            <p className='footer__content__text'>TabTeam GbR</p>
            
            <p className='footer__content__text'>Ödwieser Weg 7<br/>84082 Laberweinting</p>

            <p className='footer__content__text'><b>Vertreten durch</b><br/>
            Christoph Labestin<br/>
            Sascha Frank<br/>
            Alexander Diermeyer</p>

            <p className='footer__content__text'>
                UST-ID: DE310637717<br/>
                Amtsgericht Straubing<br/>
                Sitz der Gesellschaft ist Laberweinting<br/>
            </p>
            <h2 className='footer__content__chapter-headline'>Kontakt</h2>
            <p className='footer__content__text'>
                Telefon: <a href='callto:+4915678215800'>+49 156 78215800</a><br/>
                E-Mail: <a href='mailto:impressum@tabteam.media'>impressum@tabteam.media</a><br/>
            </p>
            <h2 className='footer__content__chapter-headline'>EU-Streitschlichtung</h2>
            <p className='footer__content__text'>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<a href='https://ec.europa.eu/consumers/odr/'>https://ec.europa.eu/consumers/odr/</a>.<br/>Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <h2 className='footer__content__chapter-headline'>Verbraucherstreitbeteiligung/Universalschlichtungsstelle</h2>
            <p className='footer__content__text'>
            Wir nehmen an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil. Zuständig istdie Universalschlichtungsstelle des Zentrums für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl amRhein (<a href='https://www.verbraucher-schlichter.de'>https://www.verbraucher-schlichter.de</a>).
            </p>
        </div>
    )
}

export const AgbChapters = () => {
    return (
        <ul className='footer__list'>
            <a href='#geltungsbereich'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Geltungsbereich</span>
                </li>
            </a>
            <a href='#vertragspartner'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Vertragspartner</span>
                </li>
            </a>
            <a href='#vertragsschluss'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Vertragsschluss</span>
                </li>
            </a>
            <a href='#widerrufsrecht'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Widerrufsrecht</span>
                </li>
            </a>
            <a href='#preise-und-versandkosten'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Preise und Versandkosten</span>
                </li>
            </a>
            <a href='#lieferung'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Lieferung</span>
                </li>
            </a>
            <a href='#zahlung'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Zahlung</span>
                </li>
            </a>
            <a href='#eigentumsvorbehalt'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Eigentumsvorbehalt</span>
                </li>
            </a>
            <a href='#streitbeteiligung'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Streitbeteiligung</span>
                </li>
            </a>
        </ul>
    )
}

export const DatenschutzChapter = () => {
    return (
        <ul className='footer__list'>
            <a href='#datenschutz'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Datenschutzerklärung</span>
                </li>
            </a>
            <a href='#datenschutz1'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Begriffsbestimmungen</span>
                </li>
            </a>
            <a href='#datenschutz2'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Name und Anschrift</span>
                </li>
            </a>
            <a href='#datenschutz3'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Cookies</span>
                </li>
            </a>
            <a href='#datenschutz4'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Erfassung von Daten</span>
                </li>
            </a>
            <a href='#datenschutz5'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Kontaktmöglichkeit</span>
                </li>
            </a>
            <a href='#datenschutz6'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Löschung und Sperrung</span>
                </li>
            </a>
            <a href='#datenschutz7'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Rechte der betroffenen Personen</span>
                </li>
            </a>
            <a href='#datenschutz8'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>bei Bewerbungen</span>
                </li>
            </a>
            <a href='#datenschutz9'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Verwendung von Facebook</span>
                </li>
            </a>
            <a href='#datenschutz10'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Verwendung von Google AdSense</span>
                </li>
            </a>
            <a href='#datenschutz11'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Verwendung von Google Analytics</span>
                </li>
            </a>
            <a href='#datenschutz12'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Verwendung von Instagram</span>
                </li>
            </a>
            <a href='#datenschutz13'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Verwendung von LinkedIn</span>
                </li>
            </a>
            <a href='#datenschutz14'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Rechtsgrundlage der Verarbeitung</span>
                </li>
            </a>
            <a href='#datenschutz15'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Interessen an der Verarbeitung</span>
                </li>
            </a>
            <a href='#datenschutz16'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Dauer der Speicherung von Daten</span>
                </li>
            </a>
            <a href='#datenschutz17'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>Vorschriften zur Bereitstellung</span>
                </li>
            </a>
            <a href='#datenschutz18'>
                <li className='footer__list-item'>
                    <span className='footer__list-item-name'>automatisierte Entscheidungsfindung</span>
                </li>
            </a>
        </ul>
    )
}