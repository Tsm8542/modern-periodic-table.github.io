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

var css = ["CSS for select/default.css","CSS for select/block-wise.css","CSS for select/group-wise.css","CSS for select/period-wise.css"]
function xet(){
    let x = document.getElementById("select").value
    if(x==="Default"){
        document.getElementById("selcss").href=css[0]
    }
    else if(x==="Block-wise"){
        document.getElementById("selcss").href=css[1]   
    }
    else if(x==="Group-wise"){
        document.getElementById("selcss").href=css[2]   
    }
    else if(x==="Period-wise"){
        document.getElementById("selcss").href=css[3]   
    }
    else if(x==="Electronegativity"){
        document.getElementById("hydrogen").innerHTML+="<br>2.20"
        document.getElementById("helium").innerHTML+="<br>-"
        document.getElementById("lithium").innerHTML+="<br>0.98"
        document.getElementById("beryllium").innerHTML+="<br>1.57"
        document.getElementById("boron").innerHTML+="<br>2.04"
        document.getElementById("carbon").innerHTML+="<br>2.55"
        document.getElementById("nitrogen").innerHTML+="<br>3.04"
        document.getElementById("oxygen").innerHTML+="<br>3.44"
        document.getElementById("fluorine").innerHTML+="<br>3.98"
        document.getElementById("neon").innerHTML+="<br>-"
        document.getElementById("sodium").innerHTML+="<br>0.93"
        document.getElementById("magnesium").innerHTML+="<br>1.31"
        document.getElementById("aluminium").innerHTML+="<br>1.61"
        document.getElementById("silicon").innerHTML+="<br>1.90"
        document.getElementById("phosphorus").innerHTML+="<br>2.19"
        document.getElementById("sulphur").innerHTML+="<br>2.58"
        document.getElementById("chlorine").innerHTML+="<br>3.16"
        document.getElementById("argon").innerHTML+="<br>-"
        document.getElementById("potassium").innerHTML+="<br>0.82"
        document.getElementById("calcium").innerHTML+="<br>1.00"
        document.getElementById("scandium").innerHTML+="<br>1.36"
        document.getElementById("titanium").innerHTML+="<br>1.54"
        document.getElementById("vanadium").innerHTML+="<br>1.63"
        document.getElementById("chromium").innerHTML+="<br>1.66"
        document.getElementById("manganese").innerHTML+="<br>1.55"
        document.getElementById("iron").innerHTML+="<br>1.83"
        document.getElementById("cobalt").innerHTML+="<br>1.88"
        document.getElementById("nickel").innerHTML+="<br>1.91"
        document.getElementById("copper").innerHTML+="<br>1.90"
        document.getElementById("zinc").innerHTML+="<br>1.65"
        document.getElementById("gallium").innerHTML+="<br>1.81"
        document.getElementById("germanium").innerHTML+="<br>2.01"
        document.getElementById("arsenic").innerHTML+="<br>2.18"
        document.getElementById("selenium").innerHTML+="<br>2.55"
        document.getElementById("bromine").innerHTML+="<br>2.96"
        document.getElementById("krypton").innerHTML+="<br>3.00"
        document.getElementById("rubidium").innerHTML+="<br>0.82"
        document.getElementById("strontium").innerHTML+="<br>0.95"
        document.getElementById("yttrium").innerHTML+="<br>1.22"
        document.getElementById("zirconium").innerHTML+="<br>1.33"
        document.getElementById("niobium").innerHTML+="<br>1.6"
        document.getElementById("molybdenum").innerHTML+="<br>2.16"
        document.getElementById("technetium").innerHTML+="<br>1.9"
        document.getElementById("ruthenium").innerHTML+="<br>2.2"
        document.getElementById("rhodium").innerHTML+="<br>2.28"
        document.getElementById("palladium").innerHTML+="<br>2.20"
        document.getElementById("silver").innerHTML+="<br>1.93"
        document.getElementById("cadmium").innerHTML+="<br>1.69"
        document.getElementById("indium").innerHTML+="<br>1.78"
        document.getElementById("tin").innerHTML+="<br>1.96"
        document.getElementById("antimony").innerHTML+="<br>2.05"
        document.getElementById("tellurium").innerHTML+="<br>2.1"
        document.getElementById("iodine").innerHTML+="<br>2.66"
        document.getElementById("xenon").innerHTML+="<br>2.60"
        document.getElementById("cesium").innerHTML+="<br>0.79"
        document.getElementById("barium").innerHTML+="<br>0.89"
        document.getElementById("lanthanum").innerHTML+="<br>1.1"
        document.getElementById("cerium").innerHTML+="<br>1.12"
        document.getElementById("praseodymium").innerHTML+="<br>1.13"
        document.getElementById("neodymium").innerHTML+="<br>1.14"
        document.getElementById("promethium").innerHTML+="<br>1.13"
        document.getElementById("samarium").innerHTML+="<br>1.17"
        document.getElementById("europium").innerHTML+="<br>1.2"
        document.getElementById("gadolinium").innerHTML+="<br>1.2"
        document.getElementById("terbium").innerHTML+="<br>1.1"
        document.getElementById("dysprosium").innerHTML+="<br>1.22"
        document.getElementById("holmium").innerHTML+="<br>1.23"
        document.getElementById("erbium").innerHTML+="<br>1.24"
        document.getElementById("thulium").innerHTML+="<br>1.25"
        document.getElementById("ytterbium").innerHTML+="<br>1.1"
        document.getElementById("lutetium").innerHTML+="<br>1.27"
        document.getElementById("hafnium").innerHTML+="<br>1.3"
        document.getElementById("tantalum").innerHTML+="<br>1.5"
        document.getElementById("tungsten").innerHTML+="<br>2.36"
        document.getElementById("rhenium").innerHTML+="<br>1.9"
        document.getElementById("osmium").innerHTML+="<br>2.2"
        document.getElementById("iridium").innerHTML+="<br>2.20"
        document.getElementById("platinum").innerHTML+="<br>2.28"
        document.getElementById("gold").innerHTML+="<br>2.54"
        document.getElementById("mercury").innerHTML+="<br>2.00"
        document.getElementById("thallium").innerHTML+="<br>1.62"
        document.getElementById("lead").innerHTML+="<br>2.33"
        document.getElementById("bismuth").innerHTML+="<br>2.02"
        document.getElementById("polonium").innerHTML+="<br>2.0"
        document.getElementById("astatine").innerHTML+="<br>2.2"
        document.getElementById("radon").innerHTML+="<br>2.2"
        document.getElementById("francium").innerHTML+="<br>>0.79"
        document.getElementById("radium").innerHTML+="<br>0.9"
        document.getElementById("actinium").innerHTML+="<br>1.1"
        document.getElementById("thorium").innerHTML+="<br>1.3"
        document.getElementById("protactinium").innerHTML+="<br>1.5"
        document.getElementById("uranium").innerHTML+="<br>1.38"
        document.getElementById("neptunium").innerHTML+="<br>1.36"
        document.getElementById("plutonium").innerHTML+="<br>1.28"
        document.getElementById("americium").innerHTML+="<br>1.13"
        document.getElementById("curium").innerHTML+="<br>1.28"
        document.getElementById("berkelium").innerHTML+="<br>1.3"
        document.getElementById("californium").innerHTML+="<br>1.3"
        document.getElementById("einsteinium").innerHTML+="<br>1.3"
        document.getElementById("fermium").innerHTML+="<br>1.3"
        document.getElementById("mendelevium").innerHTML+="<br>1.3"
        document.getElementById("nobelium").innerHTML+="<br>1.3"
        document.getElementById("lawrencium").innerHTML+="<br>1.3"
        document.getElementById("rutherfordium").innerHTML+="<br>-"
        document.getElementById("dubnium").innerHTML+="<br>-"
        document.getElementById("seaborgium").innerHTML+="<br>-"
        document.getElementById("bohrium").innerHTML+="<br>-"
        document.getElementById("hassium").innerHTML+="<br>-"
        document.getElementById("meitnerium").innerHTML+="<br>-"
        document.getElementById("darmstadtium").innerHTML+="<br>-"
        document.getElementById("roentgenium").innerHTML+="<br>-"
        document.getElementById("copernicium").innerHTML+="<br>-"
        document.getElementById("nihonium").innerHTML+="<br>-"
        document.getElementById("flerovium").innerHTML+="<br>-"
        document.getElementById("moscovium").innerHTML+="<br>-"
        document.getElementById("livermorium").innerHTML+="<br>-"
        document.getElementById("tennessine").innerHTML+="<br>-"
        document.getElementById("oganesson").innerHTML+="<br>-"
    }
    else if(x==="Ionization enthalpy"){
        document.getElementById("hydrogen").innerHTML+="<br>1312.0"
        document.getElementById("helium").innerHTML+="<br>2372.3"
        document.getElementById("lithium").innerHTML+="<br>520.2"
        document.getElementById("beryllium").innerHTML+="<br>899.5"
        document.getElementById("boron").innerHTML+="<br>800.6"
        document.getElementById("carbon").innerHTML+="<br>1086.5"
        document.getElementById("nitrogen").innerHTML+="<br>1402.3"
        document.getElementById("oxygen").innerHTML+="<br>1313.9"
        document.getElementById("fluorine").innerHTML+="<br>1681.0"
        document.getElementById("neon").innerHTML+="<br>2080.7"
        document.getElementById("sodium").innerHTML+="<br>495.8"
        document.getElementById("magnesium").innerHTML+="<br>737.7"
        document.getElementById("aluminium").innerHTML+="<br>577.5"
        document.getElementById("silicon").innerHTML+="<br>786.5"
        document.getElementById("phosphorus").innerHTML+="<br>1011.8"
        document.getElementById("sulphur").innerHTML+="<br>999.6"
        document.getElementById("chlorine").innerHTML+="<br>1251.2"
        document.getElementById("argon").innerHTML+="<br>1520.6"
        document.getElementById("potassium").innerHTML+="<br>418.8"
        document.getElementById("calcium").innerHTML+="<br>589.8"
        document.getElementById("scandium").innerHTML+="<br>633.1"
        document.getElementById("titanium").innerHTML+="<br>658.8"
        document.getElementById("vanadium").innerHTML+="<br>650.9"
        document.getElementById("chromium").innerHTML+="<br>652.9"
        document.getElementById("manganese").innerHTML+="<br>717.3"
        document.getElementById("iron").innerHTML+="<br>762.5"
        document.getElementById("cobalt").innerHTML+="<br>760.4"
        document.getElementById("nickel").innerHTML+="<br>737.1"
        document.getElementById("copper").innerHTML+="<br>745.5"
        document.getElementById("zinc").innerHTML+="<br>906.4"
        document.getElementById("gallium").innerHTML+="<br>578.8"
        document.getElementById("germanium").innerHTML+="<br>762"
        document.getElementById("arsenic").innerHTML+="<br>947"
        document.getElementById("selenium").innerHTML+="<br>941"
        document.getElementById("bromine").innerHTML+="<br>1139.9"
        document.getElementById("krypton").innerHTML+="<br>1350.8"
        document.getElementById("rubidium").innerHTML+="<br>403.0"
        document.getElementById("strontium").innerHTML+="<br>549.5"
        document.getElementById("yttrium").innerHTML+="<br>600"
        document.getElementById("zirconium").innerHTML+="<br>640.1"
        document.getElementById("niobium").innerHTML+="<br>652.1"
        document.getElementById("molybdenum").innerHTML+="<br>684.3"
        document.getElementById("technetium").innerHTML+="<br>702"
        document.getElementById("ruthenium").innerHTML+="<br>710.2"
        document.getElementById("rhodium").innerHTML+="<br>719.7"
        document.getElementById("palladium").innerHTML+="<br>804.4"
        document.getElementById("silver").innerHTML+="<br>731"
        document.getElementById("cadmium").innerHTML+="<br>867.8"
        document.getElementById("indium").innerHTML+="<br>558.3"
        document.getElementById("tin").innerHTML+="<br>708.6"
        document.getElementById("antimony").innerHTML+="<br>834"
        document.getElementById("tellurium").innerHTML+="<br>869.3"
        document.getElementById("iodine").innerHTML+="<br>1008.4"
        document.getElementById("xenon").innerHTML+="<br>1170.4"
        document.getElementById("cesium").innerHTML+="<br>375.7"
        document.getElementById("barium").innerHTML+="<br>502.9"
        document.getElementById("lanthanum").innerHTML+="<br>538.1"
        document.getElementById("cerium").innerHTML+="<br>534.4"
        document.getElementById("praseodymium").innerHTML+="<br>527"
        document.getElementById("neodymium").innerHTML+="<br>533.1"
        document.getElementById("promethium").innerHTML+="<br>540"
        document.getElementById("samarium").innerHTML+="<br>544.5"
        document.getElementById("europium").innerHTML+="<br>547.1"
        document.getElementById("gadolinium").innerHTML+="<br>593.4"
        document.getElementById("terbium").innerHTML+="<br>565.8"
        document.getElementById("dysprosium").innerHTML+="<br>573.0"
        document.getElementById("holmium").innerHTML+="<br>581.0"
        document.getElementById("erbium").innerHTML+="<br>589.3"
        document.getElementById("thulium").innerHTML+="<br>596.7"
        document.getElementById("ytterbium").innerHTML+="<br>603.4"
        document.getElementById("lutetium").innerHTML+="<br>523.5"
        document.getElementById("hafnium").innerHTML+="<br>658.5"
        document.getElementById("tantalum").innerHTML+="<br>761"
        document.getElementById("tungsten").innerHTML+="<br>770"
        document.getElementById("rhenium").innerHTML+="<br>760"
        document.getElementById("osmium").innerHTML+="<br>840"
        document.getElementById("iridium").innerHTML+="<br>880"
        document.getElementById("platinum").innerHTML+="<br>870"
        document.getElementById("gold").innerHTML+="<br>890.1"
        document.getElementById("mercury").innerHTML+="<br>1007.1"
        document.getElementById("thallium").innerHTML+="<br>589.4"
        document.getElementById("lead").innerHTML+="<br>715.6"
        document.getElementById("bismuth").innerHTML+="<br>703"
        document.getElementById("polonium").innerHTML+="<br>812.1"
        document.getElementById("astatine").innerHTML+="<br>899.003"
        document.getElementById("radon").innerHTML+="<br>1037"
        document.getElementById("francium").innerHTML+="<br>380"
        document.getElementById("radium").innerHTML+="<br>509.3"
        document.getElementById("actinium").innerHTML+="<br>499"
        document.getElementById("thorium").innerHTML+="<br>587"
        document.getElementById("protactinium").innerHTML+="<br>568"
        document.getElementById("uranium").innerHTML+="<br>597.6"
        document.getElementById("neptunium").innerHTML+="<br>604.5"
        document.getElementById("plutonium").innerHTML+="<br>584.7"
        document.getElementById("americium").innerHTML+="<br>578"
        document.getElementById("curium").innerHTML+="<br>581"
        document.getElementById("berkelium").innerHTML+="<br>601"
        document.getElementById("californium").innerHTML+="<br>608"
        document.getElementById("einsteinium").innerHTML+="<br>619"
        document.getElementById("fermium").innerHTML+="<br>627"
        document.getElementById("mendelevium").innerHTML+="<br>635"
        document.getElementById("nobelium").innerHTML+="<br>642"
        document.getElementById("lawrencium").innerHTML+="<br>470"
        document.getElementById("rutherfordium").innerHTML+="<br>580"
        document.getElementById("dubnium").innerHTML+="<br>665"
        document.getElementById("seaborgium").innerHTML+="<br>757"
        document.getElementById("bohrium").innerHTML+="<br>740"
        document.getElementById("hassium").innerHTML+="<br>730"
        document.getElementById("meitnerium").innerHTML+="<br>800"
        document.getElementById("darmstadtium").innerHTML+="<br>960"
        document.getElementById("roentgenium").innerHTML+="<br>1020"
        document.getElementById("copernicium").innerHTML+="<br>1155"
        document.getElementById("nihonium").innerHTML+="<br>707.2"
        document.getElementById("flerovium").innerHTML+="<br>832.2"
        document.getElementById("moscovium").innerHTML+="<br>538.3"
        document.getElementById("livermorium").innerHTML+="<br>663.9"
        document.getElementById("tennessine").innerHTML+="<br>736.9"
        document.getElementById("oganesson").innerHTML+="<br>860.1"
    }
    else if(x==="Electron gain enthalpy"){
        document.getElementById("hydrogen").innerHTML+="<br>72.7"
        document.getElementById("helium").innerHTML+="<br>-48"
        document.getElementById("lithium").innerHTML+="<br>59.632"
        document.getElementById("beryllium").innerHTML+="<br>-48"
        document.getElementById("boron").innerHTML+="<br>26.989"
        document.getElementById("carbon").innerHTML+="<br>121.7"
        document.getElementById("nitrogen").innerHTML+="<br>-6.8"
        document.getElementById("oxygen").innerHTML+="<br>140.97"
        document.getElementById("fluorine").innerHTML+="<br>328.164"
        document.getElementById("neon").innerHTML+="<br>-116"
        document.getElementById("sodium").innerHTML+="<br>52.867"
        document.getElementById("magnesium").innerHTML+="<br>-40"
        document.getElementById("aluminium").innerHTML+="<br>41.762"
        document.getElementById("silicon").innerHTML+="<br>134.068"
        document.getElementById("phosphorus").innerHTML+="<br>72.037"
        document.getElementById("sulphur").innerHTML+="<br>200.410"
        document.getElementById("chlorine").innerHTML+="<br>348.575"
        document.getElementById("argon").innerHTML+="<br>-96"
        document.getElementById("potassium").innerHTML+="<br>48.383"
        document.getElementById("calcium").innerHTML+="<br>2.37"
        document.getElementById("scandium").innerHTML+="<br>18"
        document.getElementById("titanium").innerHTML+="<br>7.289"
        document.getElementById("vanadium").innerHTML+="<br>50.911"
        document.getElementById("chromium").innerHTML+="<br>65.21"
        document.getElementById("manganese").innerHTML+="<br>-50"
        document.getElementById("iron").innerHTML+="<br>14.785"
        document.getElementById("cobalt").innerHTML+="<br>63.898"
        document.getElementById("nickel").innerHTML+="<br>111.65"
        document.getElementById("copper").innerHTML+="<br>119.235"
        document.getElementById("zinc").innerHTML+="<br>-58"
        document.getElementById("gallium").innerHTML+="<br>29.061"
        document.getElementById("germanium").innerHTML+="<br>118.935"
        document.getElementById("arsenic").innerHTML+="<br>77.65"
        document.getElementById("selenium").innerHTML+="<br>194.958"
        document.getElementById("bromine").innerHTML+="<br>324.536"
        document.getElementById("krypton").innerHTML+="<br>-96"
        document.getElementById("rubidium").innerHTML+="<br>46.884"
        document.getElementById("strontium").innerHTML+="<br>5.023"
        document.getElementById("yttrium").innerHTML+="<br>29.6"
        document.getElementById("zirconium").innerHTML+="<br>41.806"
        document.getElementById("niobium").innerHTML+="<br>88.516"
        document.getElementById("molybdenum").innerHTML+="<br>72.10"
        document.getElementById("technetium").innerHTML+="<br>53"
        document.getElementById("ruthenium").innerHTML+="<br>100.96"
        document.getElementById("rhodium").innerHTML+="<br>110.27"
        document.getElementById("palladium").innerHTML+="<br>54.24"
        document.getElementById("silver").innerHTML+="<br>125.862"
        document.getElementById("cadmium").innerHTML+="<br>-68"
        document.getElementById("indium").innerHTML+="<br>37.043"
        document.getElementById("tin").innerHTML+="<br>107.298"
        document.getElementById("antimony").innerHTML+="<br>101.059"
        document.getElementById("tellurium").innerHTML+="<br>190.161"
        document.getElementById("iodine").innerHTML+="<br>295.15"
        document.getElementById("xenon").innerHTML+="<br>-77"
        document.getElementById("cesium").innerHTML+="<br>45.505"
        document.getElementById("barium").innerHTML+="<br>13.954"
        document.getElementById("lanthanum").innerHTML+="<br>53.795"
        document.getElementById("cerium").innerHTML+="<br>55"
        document.getElementById("praseodymium").innerHTML+="<br>10.539"
        document.getElementById("neodymium").innerHTML+="<br>9.406"
        document.getElementById("promethium").innerHTML+="<br>12.45"
        document.getElementById("samarium").innerHTML+="<br>15.63"
        document.getElementById("europium").innerHTML+="<br>11.2"
        document.getElementById("gadolinium").innerHTML+="<br>13.22"
        document.getElementById("terbium").innerHTML+="<br>12.670"
        document.getElementById("dysprosium").innerHTML+="<br>33.96"
        document.getElementById("holmium").innerHTML+="<br>32.61"
        document.getElementById("erbium").innerHTML+="<br>30.10"
        document.getElementById("thulium").innerHTML+="<br>99"
        document.getElementById("ytterbium").innerHTML+="<br>-1.93"
        document.getElementById("lutetium").innerHTML+="<br>23.04"
        document.getElementById("hafnium").innerHTML+="<br>17.18"
        document.getElementById("tantalum").innerHTML+="<br>31"
        document.getElementById("tungsten").innerHTML+="<br>78.76"
        document.getElementById("rhenium").innerHTML+="<br>5.827"
        document.getElementById("osmium").innerHTML+="<br>103.99"
        document.getElementById("iridium").innerHTML+="<br>150.908"
        document.getElementById("platinum").innerHTML+="<br>205.041"
        document.getElementById("gold").innerHTML+="<br>222.747"
        document.getElementById("mercury").innerHTML+="<br>-48"
        document.getElementById("thallium").innerHTML+="<br>30.880"
        document.getElementById("lead").innerHTML+="<br>34.418"
        document.getElementById("bismuth").innerHTML+="<br>90.924"
        document.getElementById("polonium").innerHTML+="<br>136"
        document.getElementById("astatine").innerHTML+="<br>233.087"
        document.getElementById("radon").innerHTML+="<br>-68"
        document.getElementById("francium").innerHTML+="<br>46.89"
        document.getElementById("radium").innerHTML+="<br>9.648"
        document.getElementById("actinium").innerHTML+="<br>33.77"
        document.getElementById("thorium").innerHTML+="<br>58.633"
        document.getElementById("protactinium").innerHTML+="<br>53.03"
        document.getElementById("uranium").innerHTML+="<br>30.390"
        document.getElementById("neptunium").innerHTML+="<br>45.85"
        document.getElementById("plutonium").innerHTML+="<br>-48.33"
        document.getElementById("americium").innerHTML+="<br>9.93"
        document.getElementById("curium").innerHTML+="<br>27.17"
        document.getElementById("berkelium").innerHTML+="<br>-165.24"
        document.getElementById("californium").innerHTML+="<br>-97.31"
        document.getElementById("einsteinium").innerHTML+="<br>-28.60"
        document.getElementById("fermium").innerHTML+="<br>33.96"
        document.getElementById("mendelevium").innerHTML+="<br>93.91"
        document.getElementById("nobelium").innerHTML+="<br>-223.22"
        document.getElementById("lawrencium").innerHTML+="<br>-30.04"
        document.getElementById("rutherfordium").innerHTML+="<br>-"
        document.getElementById("dubnium").innerHTML+="<br>-"
        document.getElementById("seaborgium").innerHTML+="<br>-"
        document.getElementById("bohrium").innerHTML+="<br>-"
        document.getElementById("hassium").innerHTML+="<br>-"
        document.getElementById("meitnerium").innerHTML+="<br>-"
        document.getElementById("darmstadtium").innerHTML+="<br>-"
        document.getElementById("roentgenium").innerHTML+="<br>151.0"
        document.getElementById("copernicium").innerHTML+="<br>-"
        document.getElementById("nihonium").innerHTML+="<br>66.6"
        document.getElementById("flerovium").innerHTML+="<br>-"
        document.getElementById("moscovium").innerHTML+="<br>35.3"
        document.getElementById("livermorium").innerHTML+="<br>74.9"
        document.getElementById("tennessine").innerHTML+="<br>165.9"
        document.getElementById("oganesson").innerHTML+="<br>5.403"
    }
}