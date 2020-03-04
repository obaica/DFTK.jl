var documenterSearchIndex = {"docs":
[{"location":"#DFTK.jl:-The-density-functional-toolkit.-1","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"","category":"section"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"DFTK is a julia package of for playing with plane-wave density-functional theory algorithms.","category":"page"},{"location":"#Terminology-and-Definitions-1","page":"DFTK.jl: The density-functional toolkit.","title":"Terminology and Definitions","text":"","category":"section"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"The general terminology used throughout the documentation of the plane-wave aspects of the code.","category":"page"},{"location":"#Lattices-1","page":"DFTK.jl: The density-functional toolkit.","title":"Lattices","text":"","category":"section"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"Usually we denote with A the matrix containing all lattice vectors as columns and with","category":"page"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"textbfB = 2pi textbfA^-T","category":"page"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"the matrix containing the reciprocal lattice vectors as columns.","category":"page"},{"location":"#Units-1","page":"DFTK.jl: The density-functional toolkit.","title":"Units","text":"","category":"section"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"Unless otherwise stated the code and documentation uses atomic units and fractional or integer coordinates for k-Points and wave vectors G. The equivalent Vectors in cartesian coordiates will be denoted as k^c or G^c, i.e.","category":"page"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"k^c = textbfB k quad G^c = textbfB G","category":"page"},{"location":"#Plane-wave-basis-functions-1","page":"DFTK.jl: The density-functional toolkit.","title":"Plane wave basis functions","text":"","category":"section"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"At the moment the code works exclusively with orthonormal plane waves. In other words our bases consist of functions","category":"page"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"e_G^c = 1sqrtOmega e^i G^c cdot x","category":"page"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"where Omega is the unit cell volume and G^c is a wave vector in cartesian coordiates.","category":"page"},{"location":"#Basis-sets-1","page":"DFTK.jl: The density-functional toolkit.","title":"Basis sets","text":"","category":"section"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"The wave-function basis B_k, consisting of all plane-wave basis functions below the desired energy cutoff E_textcut for each k-point:\nB_k =  e_G^c  12 G^c + k^c^2  E_textcut\nGeometrically the corresponding wave vectors G^c form a ball of radius sqrt2 E_textcut centred at k^c. This makes the corresponding set of G-vectors\n G  textbfB (G + k)  2 sqrtE_textcut \nin integer coordinates an ellipsoid.\nThe potential or density basis B_rho, consisting of all plane waves on which a potential needs to be known in order to be consistent with the union of all B_k for all k. This means that it is the set\nB_rho =  e_G^c - e_tildeG^c  e_G^c e_tildeG^c in B_k \nThis is equivalent to the alternative definition\nB_rho =  e_G^c  12 G^c^2  α^2 E_textcut \nfor a supersampling factor alpha = 2. Geometrically this is again a ball in cartesian coordinates and an ellipsoid in integer coordinates.\nIn practice we do not use B_rho in the code, since fast-fourier transforms (FFT) operate on rectangular grids instead. For this reason the code determines C_rho, the smallest rectangular grid in integer coordinates which contains all G-vectors corresponding to the plane waves of B_rho. For this we take\nC_rho =  G = (G_1 G_2 G_3)^T  G_i  N_i \nwhere the bounds N_i are determined as follows. Since G = textbfB^-1 G^c one can employ Cauchy-Schwartz to get\nN_i = max_G^c^2  2 α^2 E_textcut(textbfB^-1i  cdot G^c)\n     textbfB^-1i  sqrt2 α^2 E_textcut\nWith textbfB^-1 = frac12pi textbfA^T therefore\nN_i  textbfA i fracsqrt2 α^2 E_textcut2π\nwhere e.g. textbfA i denotes the i-th column of textbfA. Notice, that this makes C_rho is a rectangular shape in integer coordinates, but a parallelepiped in cartesian coordinates.","category":"page"},{"location":"#TODO-not-yet-properly-updated-from-here-1","page":"DFTK.jl: The density-functional toolkit.","title":"TODO not yet properly updated from here","text":"","category":"section"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"The XC basis B_textXC, which is used for computing the application of the exchange-correlation potential operator to the density rho, represented in the basis B_rho, that is\nB_textXC  = e_G  12 G_textmax^2  β E_textcut \nSince the exchange-correlation potential might involve arbitrary powers of the density ρ, a numerically exact computation of the integral\nlangle e_G  V_textXC(ρ) e_G rangle qquad textwith qquad e_G e_G  B_Ψk\nrequires the exchange-correlation supersampling factor beta to be infinite. In practice, beta =4 is usually chosen, such that B_textXC = B_rho.","category":"page"},{"location":"#Real-space-grids-1","page":"DFTK.jl: The density-functional toolkit.","title":"Real-space grids","text":"","category":"section"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"Due to the Fourier-duality of reciprocal-space and real-space lattice, the above basis sets define corresponding real-space grids as well:","category":"page"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"The grid B_rho^ast, the potential integration grid, which is the grid used for convolutions of a potential with the discretized representation of a DFT orbital. It is simply the iFFT-dual real-space grid of B_rho.\nThe grid B^ast_textXC, the exchange-correlation integration grid, i.e. the grid used for convolutions of the exchange-correlation functional terms with the density or derivatives of it. It is the iFFT-dual of B_textXC.","category":"page"},{"location":"#Core-1","page":"DFTK.jl: The density-functional toolkit.","title":"Core","text":"","category":"section"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"PlaneWaveBasis\nset_kpoints!\nbasis_ρ\nDFTK.G_to_r!\nDFTK.r_to_G!\nPotLocal\nPotNonLocal\nKinetic\nHamiltonian\napply_hamiltonian!\nDFTK.apply_fourier!\nDFTK.apply_real!\nDFTK.update_potential!\nDFTK.update_energies_potential!\nDFTK.empty_potential\nPreconditionerKinetic\nDFTK.lobpcg\nDFTK.lobpcg_qr\nDFTK.lobpcg_scipy\nDFTK.lobpcg_itsolve\nDFTK.occupation_zero_temperature\nself_consistent_field\nDFTK.scf_nlsolve\nDFTK.scf_damped\nPspHgh\neval_psp_projection_radial\neval_psp_local_real\neval_psp_local_fourier\ncompute_density","category":"page"},{"location":"#DFTK.PlaneWaveBasis","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.PlaneWaveBasis","text":"TODO docme\n\nfft_size is now Fourier grid size kcoords is vector of Vec3\n\n\n\n\n\n","category":"type"},{"location":"#DFTK.G_to_r!","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.G_to_r!","text":"G_to_r!(f_real, pw::PlaneWaveBasis, [kpt::Kpoint, ], f_fourier)\n\nPerform an iFFT to translate between f_fourier, a fourier representation of a function either on B_k (if kpt is given) or on C_ρ (if not), and f_real. The function will destroy all data in f_real.\n\n\n\n\n\n","category":"function"},{"location":"#DFTK.r_to_G!","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.r_to_G!","text":"r_to_G!(f_fourier, pw::PlaneWaveBasis, [kpt::Kpoint, ], f_real)\n\nPerform an FFT to translate between f_real, a function represented on C_ρ^ast and its fourier representation. Truncatate the fourier coefficients to B_k (if kpt is given). Note: If kpt is given, all data in f_real will be distroyed as well.\n\n\n\n\n\n","category":"function"},{"location":"#DFTK.Hamiltonian","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.Hamiltonian","text":"Initialise a one-particle Hamiltonian from a model and optionally a density.\n\n\n\n\n\n","category":"type"},{"location":"#DFTK.lobpcg_scipy","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.lobpcg_scipy","text":"lobpcg_scipy(A, X0; prec=nothing, tol=nothing, largest=false, kwargs...)\n\nCall scipy's version of LOBPCG for finding the eigenpairs of a Hermitian matrix A. X0 is the set of guess vectors, also determining the number of eigenpairs to be sought.\n\n\n\n\n\n","category":"function"},{"location":"#DFTK.self_consistent_field","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.self_consistent_field","text":"Solve the KS equations with a SCF algorithm, starting at ham\n\n\n\n\n\n","category":"function"},{"location":"#DFTK.PspHgh","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.PspHgh","text":"PspHgh(Zion::Number, rloc::Number, cloc::Vector, rp::Vector, h::Vector;\n       identifier=\"\", description=\"\")\n\nConstruct a Hartwigsen, Goedecker, Teter, Hutter separable dual-space Gaussian pseudopotential (1998). The required parameters are the ionic charge Zion (total charge - valence electrons), the range for the local Gaussian charge distribution rloc, the coefficients for the local part cloc, the projector radius rp (one per AM channel) and the non-local coupling coefficients between the projectors h (one matrix per AM channel).\n\n\n\n\n\n","category":"type"},{"location":"#DFTK.eval_psp_projection_radial","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.eval_psp_projection_radial","text":"eval_psp_projection_radial(psp::PspHgh, i, l, qsq::Number)\n\nEvaluate the radial part of the i-th projector for angular momentum l at the reciprocal vector with modulus squared qsq.\n\np(qsq) = ∫{R+} r^2 p(r) jl(q r) dr\n\nHGH98 except they do it with plane waves normalized by 1/sqrt(Ω).\n\n\n\n\n\n","category":"function"},{"location":"#DFTK.eval_psp_local_real","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.eval_psp_local_real","text":"eval_psp_local_real(psp, r)\n\nEvaluate the local part of the pseudopotential in real space. The vector r should be given in cartesian coordinates.\n\nGTH98\n\n\n\n\n\n","category":"function"},{"location":"#DFTK.eval_psp_local_fourier","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.eval_psp_local_fourier","text":"eval_psp_local_fourier(psp, ΔG)\n\nEvaluate the local part of the pseudopotential in reciprocal space.\n\nThis function computes V(q) = ∫R^3 Vloc(r) e^{-iqr} dr      = 4π ∫{R+} sin(qr)/q r e^{-iqr} dr\n\nGTH98 except they do it with plane waves normalized by 1/sqrt(Ω).\n\n\n\n\n\n","category":"function"},{"location":"#DFTK.compute_density","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.compute_density","text":"compute_density(pw::PlaneWaveBasis, Psi::AbstractVector, occupation::AbstractVector)\n\nCompute the density for a wave function Psi discretised on the plane-wave grid pw, where the individual k-Points are occupied according to occupation. Psi should be one coefficient matrix per k-Point.\n\n\n\n\n\n","category":"function"},{"location":"#Utilities-1","page":"DFTK.jl: The density-functional toolkit.","title":"Utilities","text":"","category":"section"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"Element\ndetermine_grid_size\nbuild_local_potential\nbuild_nonlocal_projectors\nkblock_as_matrix\nload_psp\nguess_density\nguess_hcore","category":"page"},{"location":"#DFTK.determine_grid_size","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.determine_grid_size","text":"determine_grid_size(lattice, Ecut; supersampling=2)\n\nDetermine the minimal grid size for the fourier grid C_ρ subject to the kinetic energy cutoff Ecut for the wave function and a density  supersampling factor. Optimise the grid afterwards for the FFT procedure by ensuring factorisation into small primes. The function will determine the smallest cube C_ρ containing the basis B_ρ, i.e. the wave vectors G^22 leq E_textcut  textsupersampling^2. For an exact representation of the density resulting from wave functions represented in the basis B_k = G  G + k^22 leq E_textcut, supersampling should be at least 2.\n\n\n\n\n\n","category":"function"},{"location":"#DFTK.load_psp","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.load_psp","text":"load_psp(identifier; datadir_psp)\n\nLoad a pseudopotential file from the library of pseudopotentials. The file is searched in the directory datadir_psp and by the identifier. If the identifier is a path to a valid file, the extension is used to determine the type of the pseudopotential file format and a respective class is returned.\n\n\n\n\n\n","category":"function"},{"location":"#DFTK.guess_density","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.guess_density","text":"guess_density(basis)\n\nBuild a superposition of atomic densities (SAD) guess density.\n\nWe take for the guess density a gaussian centered around the atom, of length specified by atom_decay_length, normalized to get the right number of electrons\n\nhatρ(G) = Z expleft(-(2π textlength G)^2right)\n\n\n\n\n\n","category":"function"},{"location":"#Definition-of-builder-functions-1","page":"DFTK.jl: The density-functional toolkit.","title":"Definition of builder functions","text":"","category":"section"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"Definition of builder functions\n   builder(basis::PlaneWaveBasis, energy::Ref, potential; ρ=nothing, Ψ=nothing, kwargs...)\n       energy       nothing or reference\n       potential    nothing or Array or data structure\n\n   energy !== nothing\n       Reference updates with new energy value\n   potential !== nothing\n       Potential array update with new potential values\n       or data structure to use for updating potential data\n   energy !== nothing and potential !== nothing\n       compute potential values and energies and return energy, potential\n       May reuse the storage of the `potential` object\n\nNote: - It is *not* required nor guaranteed that the returned `potential` is an array.\n        E.g. for the non-local pseudopotential term it will be a PotNonLocal datastructure.\n        The returned energy value, however, is always a scalar.\n      - The arguments `ρ` or `Ψ` are not required for calling the function, but the\n        function might throw if they are for the requested computations.","category":"page"},{"location":"#","page":"DFTK.jl: The density-functional toolkit.","title":"DFTK.jl: The density-functional toolkit.","text":"Because we do not explicitly make sure the Fourier representation of an analytic potential is a real fucntion in real space only the real part of the real-space representation of a potential is physically meaningful.","category":"page"}]
}
