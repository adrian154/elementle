const ELEMENTS = [
    {Z: 1, abbrev: "H", name: "Hydrogen"},
    {Z: 2, abbrev: "He", name: "Helium"},
    {Z: 3, abbrev: "Li", name: "Lithium"},
    {Z: 4, abbrev: "Be", name: "Beryllium"},
    {Z: 5, abbrev: "B", name: "Boron"},
    {Z: 6, abbrev: "C", name: "Carbon"},
    {Z: 7, abbrev: "N", name: "Nitrogen"},
    {Z: 8, abbrev: "O", name: "Oxygen"},
    {Z: 9, abbrev: "F", name: "Fluorine"},
    {Z: 10, abbrev: "Ne", name: "Neon"},
    {Z: 11, abbrev: "Na", name: "Sodium"},
    {Z: 12, abbrev: "Mg", name: "Magnesium"},
    {Z: 13, abbrev: "Al", name: "Aluminum"},
    {Z: 14, abbrev: "Si", name: "Silicon"},
    {Z: 15, abbrev: "P", name: "Phosphorus"},
    {Z: 16, abbrev: "S", name: "Sulfur"},
    {Z: 17, abbrev: "Cl", name: "Chlorine"},
    {Z: 18, abbrev: "Ar", name: "Argon"},
    {Z: 19, abbrev: "K", name: "Potassium"},
    {Z: 20, abbrev: "Ca", name: "Calcium"},
    {Z: 21, abbrev: "Sc", name: "Scandium"},
    {Z: 22, abbrev: "Ti", name: "Titanium"},
    {Z: 23, abbrev: "V", name: "Vanadium"},
    {Z: 24, abbrev: "Cr", name: "Chromium"},
    {Z: 25, abbrev: "Mn", name: "Manganese"},
    {Z: 26, abbrev: "Fe", name: "Iron"},
    {Z: 27, abbrev: "Co", name: "Cobalt"},
    {Z: 28, abbrev: "Ni", name: "Nickel"},
    {Z: 29, abbrev: "Cu", name: "Copper"},
    {Z: 30, abbrev: "Zn", name: "Zinc"},
    {Z: 31, abbrev: "Ga", name: "Gallium"},
    {Z: 32, abbrev: "Ge", name: "Germanium"},
    {Z: 33, abbrev: "As", name: "Arsenic"},
    {Z: 34, abbrev: "Se", name: "Selenium"},
    {Z: 35, abbrev: "Br", name: "Bromine"},
    {Z: 36, abbrev: "Kr", name: "Krypton"},
    {Z: 37, abbrev: "Rb", name: "Rubidium"},
    {Z: 38, abbrev: "Sr", name: "Strontium"},
    {Z: 39, abbrev: "Y", name: "Yttrium"},
    {Z: 40, abbrev: "Zr", name: "Zirconium"},
    {Z: 41, abbrev: "Nb", name: "Niobium"},
    {Z: 42, abbrev: "Mo", name: "Molybdenum"},
    {Z: 43, abbrev: "Tc", name: "Technetium"},
    {Z: 44, abbrev: "Ru", name: "Ruthenium"},
    {Z: 45, abbrev: "Rh", name: "Rhodium"},
    {Z: 46, abbrev: "Pd", name: "Palladium"},
    {Z: 47, abbrev: "Ag", name: "Silver"},
    {Z: 48, abbrev: "Cd", name: "Cadmium"},
    {Z: 49, abbrev: "In", name: "Indium"},
    {Z: 50, abbrev: "Sn", name: "Tin"},
    {Z: 51, abbrev: "Sb", name: "Antimony"},
    {Z: 52, abbrev: "Te", name: "Tellurium"},
    {Z: 53, abbrev: "I", name: "Iodine"},
    {Z: 54, abbrev: "Xe", name: "Xenon"},
    {Z: 55, abbrev: "Cs", name: "Cesium"},
    {Z: 56, abbrev: "Ba", name: "Barium"},
    {Z: 57, abbrev: "La", name: "Lanthanum"},
    {Z: 58, abbrev: "Ce", name: "Cerium"},
    {Z: 59, abbrev: "Pr", name: "Praseodymium"},
    {Z: 60, abbrev: "Nd", name: "Neodymium"},
    {Z: 61, abbrev: "Pm", name: "Promethium"},
    {Z: 62, abbrev: "Sm", name: "Samarium"},
    {Z: 63, abbrev: "Eu", name: "Europium"},
    {Z: 64, abbrev: "Gd", name: "Gadolinium"},
    {Z: 65, abbrev: "Tb", name: "Terbium"},
    {Z: 66, abbrev: "Dy", name: "Dysprosium"},
    {Z: 67, abbrev: "Ho", name: "Holmium"},
    {Z: 68, abbrev: "Er", name: "Erbium"},
    {Z: 69, abbrev: "Tm", name: "Thulium"},
    {Z: 70, abbrev: "Yb", name: "Ytterbium"},
    {Z: 71, abbrev: "Lu", name: "Lutetium"},
    {Z: 72, abbrev: "Hf", name: "Hafnium"},
    {Z: 73, abbrev: "Ta", name: "Tantalum"},
    {Z: 74, abbrev: "W", name: "Tungsten"},
    {Z: 75, abbrev: "Re", name: "Rhenium"},
    {Z: 76, abbrev: "Os", name: "Osmium"},
    {Z: 77, abbrev: "Ir", name: "Iridium"},
    {Z: 78, abbrev: "Pt", name: "Platinum"},
    {Z: 79, abbrev: "Au", name: "Gold"},
    {Z: 80, abbrev: "Hg", name: "Mercury"},
    {Z: 81, abbrev: "Tl", name: "Thallium"},
    {Z: 82, abbrev: "Pb", name: "Lead"},
    {Z: 83, abbrev: "Bi", name: "Bismuth"},
    {Z: 84, abbrev: "Po", name: "Polonium"},
    {Z: 85, abbrev: "At", name: "Astatine"},
    {Z: 86, abbrev: "Rn", name: "Radon"},
    {Z: 87, abbrev: "Fr", name: "Francium"},
    {Z: 88, abbrev: "Ra", name: "Radium"},
    {Z: 89, abbrev: "Ac", name: "Actinium"},
    {Z: 90, abbrev: "Th", name: "Thorium"},
    {Z: 91, abbrev: "Pa", name: "Protactinium"},
    {Z: 92, abbrev: "U", name: "Uranium"},
    {Z: 93, abbrev: "Np", name: "Neptunium"},
    {Z: 94, abbrev: "Pu", name: "Plutonium"},
    {Z: 95, abbrev: "Am", name: "Americium"},
    {Z: 96, abbrev: "Cm", name: "Curium"},
    {Z: 97, abbrev: "Bk", name: "Berkelium"},
    {Z: 98, abbrev: "Cf", name: "Californium"},
    {Z: 99, abbrev: "Es", name: "Einsteinium"},
    {Z: 100, abbrev: "Fm", name: "Fermium"},
    {Z: 101, abbrev: "Md", name: "Mendelevium"},
    {Z: 102, abbrev: "No", name: "Nobelium"},
    {Z: 103, abbrev: "Lr", name: "Lawrencium"},
    {Z: 104, abbrev: "Rf", name: "Rutherfordium"},
    {Z: 105, abbrev: "Db", name: "Dubnium"},
    {Z: 106, abbrev: "Sg", name: "Seaborgium"},
    {Z: 107, abbrev: "Bh", name: "Bohrium"},
    {Z: 108, abbrev: "Hs", name: "Hassium"},
    {Z: 109, abbrev: "Mt", name: "Meitnerium"},
    {Z: 110, abbrev: "Ds", name: "Darmstadtium"},
    {Z: 111, abbrev: "Rg", name: "Roentgenium"},
    {Z: 112, abbrev: "Cn", name: "Copernicium"},
    {Z: 113, abbrev: "Nh", name: "Nihonium"},
    {Z: 114, abbrev: "Fl", name: "Flerovium"},
    {Z: 115, abbrev: "Mc", name: "Moscovium"},
    {Z: 116, abbrev: "Lv", name: "Livermorium"},
    {Z: 117, abbrev: "Ts", name: "Tennessine"},
    {Z: 118, abbrev: "Og", name: "Oganesson"}
];

const createElement = element => {

    const box = document.createElement("div");
    box.classList.add("element");
    
    const abbrev = document.createElement("span");
    abbrev.classList.add("abbrev");
    abbrev.textContent = element.abbrev;
    box.append(abbrev);

    const atomicNumber = document.createElement("span");
    atomicNumber.classList.add("atomic-number");
    atomicNumber.textContent = element.Z;
    box.append(atomicNumber);

    const name = document.createElement("span");
    name.classList.add("name");
    name.textContent = element.name;
    box.append(name);

    return box;

};

const isLanthanideOrActinide = Z => Z >= 57 && Z <= 70 || Z >= 89 && Z <= 102;

// this code is super scuffed
const makeTable = () => {
    
    const table = document.getElementById("periodic-table");

    // main table
    let col = 1, row = 1;
    for(const element of ELEMENTS) {

        // skip lanthanides and actinides
        if(isLanthanideOrActinide(element.Z)) {
            continue;
        }

        const box = createElement(element);
        box.style.gridRowStart = row;
        box.style.gridColumnStart = col;
        table.append(box);

        if(element.Z == 1) {
            col += 18;
        } else if(element.Z == 4 || element.Z == 12) {
            col += 12;
        } else if(element.Z == 20 || element.Z == 38 || element.Z == 56 || element.Z == 88) { 
            col += 2;
        } else {
            col++;
        }

        if(col == 20) {
            col = 1;
            row++;
        }

    }

    // lanthanides, actinides
    col = 4;
    row = 9;
    for(const element of ELEMENTS) {

        // ignore main table elements
        if(!isLanthanideOrActinide(element.Z)) {
            continue;
        }

        const box = createElement(element);
        box.style.gridRowStart = row;
        box.style.gridColumnStart = col;
        table.append(box);

        col++;
        if(col == 18) {
            col = 4;
            row++;
        }

    }
    
    // insert spacer
    const spacer = document.createElement("div");
    spacer.style.gridRowStart = 8;
    spacer.style.gridColumnStart = 3;
    spacer.id = "spacer";
    table.append(spacer);

};

makeTable();