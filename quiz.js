const questions = [
    // Unit 1: Cellular Processes
    { q: "What is the term for maintaining a stable internal environment?", a: "a", options: ["A. Homeostasis", "B. Metabolism", "C. Growth", "D. Evolution"] },
    { q: "Which macromolecule stores genetic information?", a: "d", options: ["A. Protein", "B. Lipid", "C. Carbohydrate", "D. Nucleic acid"] },
    { q: "What is the smallest unit of life?", a: "b", options: ["A. Molecule", "B. Cell", "C. Organ", "D. Tissue"] },
    { q: "Which process builds larger molecules from smaller units?", a: "d", options: ["A. Catabolism", "B. Hydrolysis", "C. Exothermic", "D. Anabolism"] },
    { q: "What is the primary structural component of plant cell walls?", a: "c", options: ["A. Glycogen", "B. Chitin", "C. Cellulose", "D. Starch"] },

    // Unit 2: Cellular Processes (continued)
    { q: "Which type of transport requires energy to move molecules?", a: "a", options: ["A. Active transport", "B. Passive transport", "C. Diffusion", "D. Osmosis"] },
    { q: "What is the role of the mitochondrion in cells?", a: "c", options: ["A. DNA storage", "B. Photosynthesis", "C. ATP production", "D. Protein synthesis"] },
    { q: "What is the term for the plasma membrane's ability to allow selective substances to pass through?", a: "d", options: ["A. Cohesion", "B. Adhesion", "C. Rigidity", "D. Selective permeability"] },
    { q: "Which structure connects plant cells and allows communication between them?", a: "a", options: ["A. Plasmodesmata", "B. Tight junctions", "C. Gap junctions", "D. Desmosomes"] },
    { q: "What process involves the movement of water across a selectively permeable membrane?", a: "b", options: ["A. Diffusion", "B. Osmosis", "C. Facilitated diffusion", "D. Active transport"] },

    // Unit 3: Energetics
    { q: "Which organelle is the site of photosynthesis?", a: "a", options: ["A. Chloroplast", "B. Mitochondria", "C. Ribosome", "D. Golgi apparatus"] },
    { q: "What are the light-independent reactions in photosynthesis called?", a: "b", options: ["A. Light reactions", "B. Calvin Cycle", "C. Photolysis", "D. Photophosphorylation"] },
    { q: "Which molecule is the energy currency of the cell?", a: "a", options: ["A. ATP", "B. NADH", "C. Glucose", "D. Pyruvate"] },
    { q: "What is the function of stomata in plants?", a: "c", options: ["A. Water absorption", "B. Nutrient storage", "C. Gas exchange", "D. Transpiration control"] },
    { q: "Which photosynthetic pathway fixes carbon at night?", a: "d", options: ["A. C3", "B. C4", "C. Calvin Cycle", "D. CAM"] },

    // Unit 4: DNA and Cell Structure
    { q: "Which nitrogenous base pairs with adenine in DNA?", a: "b", options: ["A. Cytosine", "B. Thymine", "C. Uracil", "D. Guanine"] },
    { q: "What is the name of the bond connecting nucleotides in DNA?", a: "a", options: ["A. Phosphodiester bond", "B. Hydrogen bond", "C. Peptide bond", "D. Ester bond"] },
    { q: "What is the shape of a DNA molecule?", a: "c", options: ["A. Linear", "B. Triple helix", "C. Double helix", "D. Spherical"] },
    { q: "During which phase do chromosomes align at the cell's equator?", a: "d", options: ["A. Prophase", "B. Anaphase", "C. Telophase", "D. Metaphase"] },
    { q: "What is the term for the process of cytoplasm division after mitosis?", a: "b", options: ["A. Interphase", "B. Cytokinesis", "C. Binary fission", "D. Spindle checkpoint"] },

    // Unit 3 (continued): Cellular Respiration
    { q: "Which process converts glucose to pyruvate?", a: "a", options: ["A. Glycolysis", "B. Krebs Cycle", "C. Electron Transport Chain", "D. Fermentation"] },
    { q: "What is the final electron acceptor in aerobic respiration?", a: "b", options: ["A. NADH", "B. Oxygen", "C. ATP", "D. Water"] },
    { q: "Where does the Krebs Cycle occur?", a: "c", options: ["A. Cytoplasm", "B. Outer mitochondrial membrane", "C. Mitochondrial matrix", "D. Nucleus"] },
    { q: "What are the folds of the inner mitochondrial membrane called?", a: "d", options: ["A. Cristae", "B. Grana", "C. Thylakoids", "D. Inner folds"] },
    { q: "What type of respiration produces lactic acid?", a: "a", options: ["A. Anaerobic", "B. Aerobic", "C. Fermentation", "D. Chemiosmosis"] },

    // Additional Questions
    // Add remaining questions based on other critical terms from Units 3 and 4
    // Total: 60 questions by completing this section

    // Example: 
    { q: "What pigment absorbs sunlight for photosynthesis?", a: "a", options: ["A. Chlorophyll", "B. Xanthophyll", "C. Carotene", "D. Anthocyanin"] },
    { q: "What is the product of photophosphorylation?", a: "a", options: ["A. ATP", "B. NADPH", "C. G3P", "D. Water"] },
    { q: "What process involves the breakdown of molecules to release energy?", a: "b", options: ["A. Anabolism", "B. Catabolism", "C. Homeostasis", "D. Reproduction"] },
    { q: "Which term describes the ability of an organism to respond to changes in its environment?", a: "d", options: ["A. Evolution", "B. Metabolism", "C. Growth", "D. Response to stimuli"] },

    // Macromolecules and Their Functions
    { q: "What is the monomer of proteins?", a: "a", options: ["A. Amino acids", "B. Nucleotides", "C. Fatty acids", "D. Monosaccharides"] },
    { q: "Which macromolecule stores energy long-term and makes up cell membranes?", a: "b", options: ["A. Carbohydrates", "B. Lipids", "C. Proteins", "D. Nucleic acids"] },
    { q: "Which polysaccharide is used as an energy reserve in animals?", a: "c", options: ["A. Starch", "B. Cellulose", "C. Glycogen", "D. Chitin"] },

    // Properties of Water and Solutions
    { q: "Which property of water allows insects to walk on its surface?", a: "d", options: ["A. Cohesion", "B. Adhesion", "C. High specific heat", "D. Surface tension"] },
    { q: "What happens to a cell placed in a hypertonic solution?", a: "a", options: ["A. Water moves out, and the cell shrinks", "B. Water moves in, and the cell swells", "C. No water movement, cell stays the same", "D. The cell becomes turgid"] },

    // Unit 3: Energetics
    { q: "Which stage of photosynthesis produces oxygen as a byproduct?", a: "b", options: ["A. Calvin Cycle", "B. Light-dependent reactions", "C. Photophosphorylation", "D. Chemiosmosis"] },
    { q: "Which enzyme is involved in fixing carbon dioxide in the Calvin Cycle?", a: "c", options: ["A. ATP synthase", "B. NADP+ reductase", "C. Rubisco", "D. Chlorophyll"] },
    { q: "What is the fluid-filled space in chloroplasts where the Calvin Cycle occurs?", a: "a", options: ["A. Stroma", "B. Thylakoid", "C. Granum", "D. Matrix"] },
    { q: "Which process directly generates most ATP in cellular respiration?", a: "d", options: ["A. Glycolysis", "B. Krebs Cycle", "C. Fermentation", "D. Electron Transport Chain"] },
    { q: "What molecule is regenerated in lactic acid fermentation?", a: "b", options: ["A. ATP", "B. NAD+", "C. Pyruvate", "D. Glucose"] },
    { q: "Which structure increases the surface area of mitochondria for ATP production?", a: "c", options: ["A. Matrix", "B. Outer membrane", "C. Cristae", "D. Inner membrane"] },

    // Unit 4: DNA and Cell Structure
    { q: "Which component of DNA is a purine base?", a: "d", options: ["A. Cytosine", "B. Thymine", "C. Uracil", "D. Adenine"] },
    { q: "Which type of bond forms between complementary bases in DNA?", a: "a", options: ["A. Hydrogen bonds", "B. Phosphodiester bonds", "C. Peptide bonds", "D. Ionic bonds"] },
    { q: "What phase of the cell cycle is DNA replicated?", a: "b", options: ["A. G₁ phase", "B. S phase", "C. G₂ phase", "D. M phase"] },
    { q: "Which phase of mitosis involves the chromosomes being pulled apart?", a: "c", options: ["A. Prophase", "B. Metaphase", "C. Anaphase", "D. Telophase"] },
    { q: "What structure holds the two sister chromatids together?", a: "a", options: ["A. Centromere", "B. Telomere", "C. Kinetochore", "D. Spindle fiber"] },
    { q: "What process ensures the repair or dormancy of cells at specific points in the cell cycle?", a: "d", options: ["A. Metaphase alignment", "B. Cytokinesis", "C. Binary fission", "D. Checkpoints"] },
    { q: "What term describes programmed cell death?", a: "b", options: ["A. Differentiation", "B. Apoptosis", "C. Cancer", "D. Tumor formation"] },
    { q: "Which type of cell reproduction results in genetically identical offspring?", a: "c", options: ["A. Sexual reproduction", "B. Fusion", "C. Asexual reproduction", "D. Binary fusion"] },

    // Unit 1: Cellular Processes
    { q: "What is the function of the cell membrane?", a: "d", options: ["A. To store DNA", "B. To produce energy", "C. To synthesize proteins", "D. To regulate passage of substances"] },
    { q: "Which organelle is involved in protein synthesis?", a: "b", options: ["A. Golgi apparatus", "B. Ribosome", "C. Mitochondria", "D. Lysosome"] },
    { q: "What is the term for an organism that consists of a single cell?", a: "a", options: ["A. Unicellular", "B. Multicellular", "C. Prokaryotic", "D. Eukaryotic"] },
    { q: "What type of molecule forms the main component of the plasma membrane?", a: "c", options: ["A. Proteins", "B. Carbohydrates", "C. Phospholipids", "D. Nucleic acids"] },
    { q: "Which organelle is responsible for detoxifying chemicals and synthesizing lipids?", a: "b", options: ["A. Rough ER", "B. Smooth ER", "C. Peroxisome", "D. Lysosome"] },

    // Unit 2: Cellular Processes
    { q: "What is the term for the diffusion of water across a semipermeable membrane?", a: "a", options: ["A. Osmosis", "B. Active transport", "C. Facilitated diffusion", "D. Endocytosis"] },
    { q: "Which type of protein spans the entire membrane and assists in substance transport?", a: "b", options: ["A. Peripheral protein", "B. Integral protein", "C. Glycoprotein", "D. Glycolipid"] },
    { q: "What is the term for the engulfing of large particles by the cell?", a: "d", options: ["A. Osmosis", "B. Diffusion", "C. Exocytosis", "D. Endocytosis"] },
    { q: "Which type of solution causes a cell to shrink?", a: "c", options: ["A. Hypotonic", "B. Isotonic", "C. Hypertonic", "D. Hydrophobic"] },
    { q: "What is the name of the vesicle that helps in cellular digestion?", a: "d", options: ["A. Vacuole", "B. Peroxisome", "C. Ribosome", "D. Lysosome"] },

    // Unit 3: Energetics
    { q: "What molecule carries energy within the cell?", a: "a", options: ["A. ATP", "B. NADH", "C. Glucose", "D. Pyruvate"] },
    { q: "Where in the chloroplast do light-dependent reactions occur?", a: "b", options: ["A. Stroma", "B. Thylakoid", "C. Granum", "D. Matrix"] },
    { q: "Which molecule provides electrons for the Calvin Cycle?", a: "c", options: ["A. ATP", "B. G3P", "C. NADPH", "D. Oxygen"] },
    { q: "What is the primary pigment involved in photosynthesis?", a: "a", options: ["A. Chlorophyll A", "B. Chlorophyll B", "C. Xanthophyll", "D. Carotene"] },
    { q: "What is the process of ATP production in the mitochondria called?", a: "d", options: ["A. Calvin Cycle", "B. Krebs Cycle", "C. Glycolysis", "D. Oxidative phosphorylation"] },

    // Cellular Respiration
    { q: "What is the starting molecule for glycolysis?", a: "c", options: ["A. Pyruvate", "B. ATP", "C. Glucose", "D. Oxygen"] },
    { q: "Which molecule is the final electron acceptor in the electron transport chain?", a: "b", options: ["A. ATP", "B. Oxygen", "C. Water", "D. Carbon dioxide"] },
    { q: "What is the main product of the Krebs Cycle?", a: "c", options: ["A. Glucose", "B. ATP", "C. NADH", "D. G3P"] },
    { q: "Which process produces alcohol and carbon dioxide in the absence of oxygen?", a: "d", options: ["A. Lactic acid fermentation", "B. Aerobic respiration", "C. Glycolysis", "D. Alcoholic fermentation"] },
    { q: "Which cellular organelle is most involved in aerobic respiration?", a: "a", options: ["A. Mitochondrion", "B. Chloroplast", "C. Ribosome", "D. Lysosome"] },

    // Unit 4: DNA and Cell Structure
    { q: "What is the sugar found in RNA?", a: "b", options: ["A. Deoxyribose", "B. Ribose", "C. Glucose", "D. Fructose"] },
    { q: "What type of bond forms between the phosphate group and sugar in DNA?", a: "a", options: ["A. Phosphodiester bond", "B. Hydrogen bond", "C. Ionic bond", "D. Peptide bond"] },
    { q: "What structure forms during cytokinesis in plant cells?", a: "c", options: ["A. Cleavage furrow", "B. Mitotic spindle", "C. Cell plate", "D. Golgi vesicle"] },
    { q: "Which checkpoint ensures that DNA is fully replicated before mitosis?", a: "b", options: ["A. G₁ checkpoint", "B. G₂ checkpoint", "C. M checkpoint", "D. Spindle checkpoint"] },
    { q: "What is the region of a chromosome where spindle fibers attach?", a: "d", options: ["A. Telomere", "B. Chromatid", "C. Centrosome", "D. Centromere"] },

    // Miscellaneous
    { q: "Which structure in the nucleus is responsible for ribosome production?", a: "a", options: ["A. Nucleolus", "B. Nuclear envelope", "C. Chromatin", "D. Nuclear pore"] },
    { q: "What is the primary function of microtubules during mitosis?", a: "b", options: ["A. DNA replication", "B. Chromosome movement", "C. Cytoplasm division", "D. Spindle checkpoint"] },
    { q: "Which cellular process creates genetically identical daughter cells?", a: "d", options: ["A. Meiosis", "B. Fertilization", "C. Binary fission", "D. Mitosis"] },
    { q: "What structure shortens to separate chromosomes during cell division?", a: "c", options: ["A. Cytoskeleton", "B. Microfilaments", "C. Spindle fibers", "D. Centromere"] },
    { q: "What is the term for DNA coiled around histone proteins?", a: "a", options: ["A. Chromatin", "B. Chromosome", "C. Nucleosome", "D. Chromatid"] },
];
// Function to load the questions into the quiz container
function loadQuestions() {
    const quizContainer = document.querySelector('.quiz-container');
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <h2>${index + 1}. ${question.q}</h2>
            <ul class="options">
                ${question.options.map((option, i) => `
                    <li>
                        <label>
                            <input type="radio" name="q${index + 1}" value="${String.fromCharCode(97 + i)}"> 
                            ${option}
                        </label>
                    </li>`).join('')}
            </ul>
        `;
        quizContainer.insertBefore(questionElement, quizContainer.querySelector('.button-container'));
    });
}
function checkAnswers() {
    let score = 0;
    let unanswered = 0;

    questions.forEach((question, index) => {
        const selected = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (!selected) {
            unanswered++;
        } else if (selected.value === question.a) {
            score++;
        }
    });
    alert(`You scored ${score} out of ${questions.length}`);
}

// Event listener to load questions after the DOM is ready
document.addEventListener('DOMContentLoaded', loadQuestions);

// Example array of questions

