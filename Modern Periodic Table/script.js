// Loading all objects according to the path

var x = [
    "Elements html/Period 1/1.hydrogen.html",
    "Elements html/Period 1/2.helium.html",
    "Elements html/Period 2/3.lithium.html",
    "Elements html/Period 2/4.beryllium.html",
    "Elements html/Period 2/5.boron.html",
    "Elements html/Period 2/6.carbon.html",
    "Elements html/Period 2/7.nitrogen.html",
    "Elements html/Period 2/8.oxygen.html",
    "Elements html/Period 2/9.fluorine.html",
    "Elements html/Period 2/10.neon.html",
    "Elements html/Period 3/11.sodium.html",
    "Elements html/Period 3/12.magnesium.html",
    "Elements html/Period 3/13.aluminium.html",
    "Elements html/Period 3/14.silicon.html",
    "Elements html/Period 3/15.phosphorus.html",
    "Elements html/Period 3/16.sulphur.html",
    "Elements html/Period 3/17.chlorine.html",
    "Elements html/Period 3/18.argon.html",
    "Elements html/Period 4/19.potassium.html",
    "Elements html/Period 4/20.calcium.html",
    "Elements html/Period 4/21.scandium.html",
    "Elements html/Period 4/22.titanium.html",
    "Elements html/Period 4/23.vanadium.html",
    "Elements html/Period 4/24.chromium.html",
    "Elements html/Period 4/25.manganese.html",
    "Elements html/Period 4/26.iron.html",
    "Elements html/Period 4/27.cobalt.html",
    "Elements html/Period 4/28.nickel.html",
    "Elements html/Period 4/29.copper.html",
    "Elements html/Period 4/30.zinc.html",
    "Elements html/Period 4/31.gallium.html",
    "Elements html/Period 4/32.germanium.html",
    "Elements html/Period 4/33.arsenic.html",
    "Elements html/Period 4/34.selenium.html",
    "Elements html/Period 4/35.bromine.html",
    "Elements html/Period 4/36.krypton.html",
    "Elements html/Period 5/37.rubidium.html",
    "Elements html/Period 5/38.strontium.html",
    "Elements html/Period 5/39.yttrium.html",
    "Elements html/Period 5/40.zirconium.html",
    "Elements html/Period 5/41.niobium.html",
    "Elements html/Period 5/42.molybdenum.html",
    "Elements html/Period 5/43.technetium.html",
    "Elements html/Period 5/44.ruthenium.html",
    "Elements html/Period 5/45.rhodium.html",
    "Elements html/Period 5/46.palladium.html",
    "Elements html/Period 5/47.silver.html",
    "Elements html/Period 5/48.cadmium.html",
    "Elements html/Period 5/49.indium.html",
    "Elements html/Period 5/50.tin.html",
    "Elements html/Period 5/51.antimony.html",
    "Elements html/Period 5/52.tellurium.html",
    "Elements html/Period 5/53.iodine.html",
    "Elements html/Period 5/54.xenon.html",
    "Elements html/Period 6/55.cesium.html",
    "Elements html/Period 6/56.barium.html",
    "Elements html/Period 6/57.lanthanum.html",
    "Elements html/Period 6/58.cerium.html",
    "Elements html/Period 6/59.praseodymium.html",
    "Elements html/Period 6/60.neodymium.html",
    "Elements html/Period 6/61.promethium.html",
    "Elements html/Period 6/62.samarium.html",
    "Elements html/Period 6/63.europium.html",
    "Elements html/Period 6/64.gadolinium.html",
    "Elements html/Period 6/65.terbium.html",
    "Elements html/Period 6/66.dysprosium.html",
    "Elements html/Period 6/67.holmium.html",
    "Elements html/Period 6/68.erbium.html",
    "Elements html/Period 6/69.thulium.html",
    "Elements html/Period 6/70.ytterbium.html",
    "Elements html/Period 6/71.lutetium.html",
    "Elements html/Period 6/72.hafnium.html",
    "Elements html/Period 6/73.tantalum.html",
    "Elements html/Period 6/74.tungsten.html",
    "Elements html/Period 6/75.rhenium.html",
    "Elements html/Period 6/76.osmium.html",
    "Elements html/Period 6/77.iridium.html",
    "Elements html/Period 6/78.platinum.html",
    "Elements html/Period 6/79.gold.html",
    "Elements html/Period 6/80.mercury.html",
    "Elements html/Period 6/81.thallium.html",
    "Elements html/Period 6/82.lead.html",
    "Elements html/Period 6/83.bismuth.html",
    "Elements html/Period 6/84.polonium.html",
    "Elements html/Period 6/85.astatine.html",
    "Elements html/Period 6/86.radon.html",
    "Elements html/Period 7/87.francium.html",
    "Elements html/Period 7/88.radium.html",
    "Elements html/Period 7/89.actinium.html",
    "Elements html/Period 7/90.thorium.html",
    "Elements html/Period 7/91.protactinium.html",
    "Elements html/Period 7/92.uranium.html",
    "Elements html/Period 7/93.neptunium.html",
    "Elements html/Period 7/94.plutonium.html",
    "Elements html/Period 7/95.americium.html",
    "Elements html/Period 7/96.curium.html",
    "Elements html/Period 7/97.berkelium.html",
    "Elements html/Period 7/98.californium.html",
    "Elements html/Period 7/99.einsteinium.html",
    "Elements html/Period 7/100.fermium.html",
    "Elements html/Period 7/101.mendelevium.html",
    "Elements html/Period 7/102.nobelium.html",
    "Elements html/Period 7/103.lawrencium.html",
    "Elements html/Period 7/104.rutherfordium.html",
    "Elements html/Period 7/105.dubnium.html",
    "Elements html/Period 7/106.seaborgium.html",
    "Elements html/Period 7/107.bohrium.html",
    "Elements html/Period 7/108.hassium.html",
    "Elements html/Period 7/109.meitnerium.html",
    "Elements html/Period 7/110.darmstadtium.html",
    "Elements html/Period 7/111.roentgenium.html",
    "Elements html/Period 7/112.copernicium.html",
    "Elements html/Period 7/113.nihonium.html",
    "Elements html/Period 7/114.flerovium.html",
    "Elements html/Period 7/115.moscovium.html",
    "Elements html/Period 7/116.livermorium.html",
    "Elements html/Period 7/117.tennessine.html",
    "Elements html/Period 7/118.oganesson.html",
]

//variables for each element for the select menu






var hydrogen = document.getElementById("hydrogen")
var helium = document.getElementById("helium")
var lithium = document.getElementById("lithium")
var beryllium = document.getElementById("beryllium")
var boron = document.getElementById("boron")
var carbon = document.getElementById("carbon")
var nitrogen = document.getElementById("nitrogen")
var oxygen = document.getElementById("oxygen")
var fluorine = document.getElementById("fluorine")
var neon = document.getElementById("neon")
var sodium = document.getElementById("sodium")
var magnesium = document.getElementById("magnesium")
var aluminium = document.getElementById("aluminium")
var silicon = document.getElementById("silicon")
var phosphorus = document.getElementById("phosphorus")
var sulphur = document.getElementById("sulphur")
var chlorine = document.getElementById("chlorine")
var argon = document.getElementById("argon")
var potassium = document.getElementById("potassium")
var calcium = document.getElementById("calcium")
var scandium = document.getElementById("scandium")
var titanium = document.getElementById("titanium")
var vanadium = document.getElementById("vanadium")
var chromium = document.getElementById("chromium")
var manganese = document.getElementById("manganese")
var iron = document.getElementById("iron")
var cobalt = document.getElementById("cobalt")
var nickel = document.getElementById("nickel")
var copper = document.getElementById("copper")
var zinc = document.getElementById("zinc")
var gallium = document.getElementById("gallium")
var germanium = document.getElementById("germanium")
var arsenic = document.getElementById("arsenic")
var selenium = document.getElementById("selenium")
var bromine = document.getElementById("bromine")
var krypton = document.getElementById("krypton")
var rubidium = document.getElementById("rubidium")
var strontium = document.getElementById("strontium")
var yttrium = document.getElementById("yttrium")
var zirconium = document.getElementById("zirconium")
var niobium = document.getElementById("niobium")
var molybdenum = document.getElementById("molybdenum")
var technetium = document.getElementById("technetium")
var ruthenium = document.getElementById("ruthenium")
var rhodium = document.getElementById("rhodium")
var palladium = document.getElementById("palladium")
var silver = document.getElementById("silver")
var cadmium = document.getElementById("cadmium")
var indium = document.getElementById("indium")
var tin = document.getElementById("tin")
var antimony = document.getElementById("antimony")
var tellurium = document.getElementById("tellurium")
var iodine = document.getElementById("iodine")
var xenon = document.getElementById("xenon")
var cesium = document.getElementById("cesium")
var barium = document.getElementById("barium")
var lanthanum = document.getElementById("lanthanum")
var cerium = document.getElementById("cerium")
var praseodymium = document.getElementById("praseodymium")
var neodymium = document.getElementById("neodymium")
var promethium = document.getElementById("promethium")
var samarium = document.getElementById("samarium")
var europium = document.getElementById("europium")
var gadolinium = document.getElementById("gadolinium")
var terbium = document.getElementById("terbium")
var dysprosium = document.getElementById("dysprosium")
var holmium = document.getElementById("holmium")
var erbium = document.getElementById("erbium")
var thulium = document.getElementById("thulium")
var ytterbium = document.getElementById("ytterbium")
var lutetium = document.getElementById("lutetium")
var hafnium = document.getElementById("hafnium")
var tantalum = document.getElementById("tantalum")
var tungsten = document.getElementById("tungsten")
var rhenium = document.getElementById("rhenium")
var osmium = document.getElementById("osmium")
var iridium = document.getElementById("iridium")
var platinum = document.getElementById("platinum")
var gold = document.getElementById("gold")
var mercury = document.getElementById("mercury")
var thallium = document.getElementById("thallium")
var lead = document.getElementById("lead")
var bismuth = document.getElementById("bismuth")
var polonium = document.getElementById("polonium")
var astatine = document.getElementById("astatine")
var radon = document.getElementById("radon")
var francium = document.getElementById("francium")


//onclick function to display loaded objects upon function calling
function elem(i){
    document.getElementById("info").src = x[i];
    document.getElementById("info").style.display="block";
}
