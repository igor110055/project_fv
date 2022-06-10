import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../containers/footer";
import Article from "../components/research_article";

import { ReactComponent as Twitter } from "../assets/svg/link_twitter.svg";
import { ReactComponent as Facebook } from "../assets/svg/link_facebook.svg";
import { ReactComponent as Discord } from "../assets/svg/link_discord.svg";
import { ReactComponent as Telegram } from "../assets/svg/link_telegram.svg";
import { ReactComponent as Mail } from "../assets/svg/link_email.svg";
import { ReactComponent as Share } from "../assets/svg/link_share.svg";

import { ReactComponent as Back } from "../assets/svg/icn_back.svg";
import { ReactComponent as Arrow } from "../assets/svg/main_article_arrow.svg";
import { ReactComponent as Back2Top } from "../assets/svg/icn_back2top.svg";


import image0 from "../assets/images/research_detail/image_0.png";
import image1_1 from "../assets/images/research_detail/image_1_1.png";
import image1_2 from "../assets/images/research_detail/image_1_2.png";
import image2_1 from "../assets/images/research_detail/image_2_1.png";
import image2_2 from "../assets/images/research_detail/image_2_2.png";
import image4_1 from "../assets/images/research_detail/image_4_1.png";
import image4_2 from "../assets/images/research_detail/image_4_2.png";
import image6 from "../assets/images/research_detail/image_6.png";

import { articles } from "../assets/data/articles";
import "./ResearchDetail.css";

export default function ResearchDetail() {
    const previous = articles[0];
    const next = articles[2];

    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div className="rd_main_wrapper">
                <div className="rd_main_content">

                    <div className="rd_title_wrapper">
                        <div className="rd_title_content">
                            <h2 className="rd_title_text">zk, zkVM, zkEVM and their Future</h2>
                            <p className="rd_title_subtext">by msfew - 5 May 2022</p>
                            <div className="rd_title_links">
                                <div className="rd_links_back" onClick={() => navigate(-1)}>
                                    <Back />
                                    <h4>Back</h4>
                                </div>
                                <div className="rd_links_sm">
                                    <span className="tooltip" tooltip-data="Share via Twitter"><Twitter /></span>
                                    <span className="tooltip" tooltip-data="Share via Facebook"><Facebook /></span>
                                    <span className="tooltip" tooltip-data="Share via Discord"><Discord /></span>
                                    <span className="tooltip" tooltip-data="Share via Telegram"><Telegram /></span>
                                    <span className="tooltip" tooltip-data="Share via Email"><Mail /></span>
                                    <span className="tooltip" tooltip-data="Copy Link"><Share /></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rd_article_content">
                        <h5>TL;DR</h5>
                        <ul>
                            <li>Zero-knowledge proof, which can guarantee computational integrity, correctness and privacy, has a lot of use cases in blockchain scaling and privacy.</li>
                            <li>zk-SNARK and zk-STARK have their own advantages, and the combination of these two has more potential.</li>
                            <li>zkVM empowers applications with zero-knowledge proofs, and zkVM can be categorized by instruction sets in mainstream, EVM, or newly-built ones.</li>
                            <li>EVM compatibility includes EVM compatibility, equivalence, and specification-level compatibility.</li>
                            <li>zkEVM is an EVM-compatible and zero-knowledge proof-friendly environment. It can be divided into native-based and compiler-based solutions.</li>
                            <li>Native-based zkEVM is the future of Ethereum and blockchain.</li>
                            <li>A general zkVM supports the Solidity lang is the future of Web3.</li>
                        </ul>


                        <h5>0. Zero-knowledge Proof</h5>
                        <p>An easy-to-understand definition to zero-knowledge proofs:</p>
                        <p>You are in elementary school. The teacher is the verifier, and you, the student, are the prover. How do you prove that you know the formula for solving a quadratic equation? That would require a math exam.</p>
                        <p>The teacher will give you 10 random questions related to quadratic equation, and if you have mastered them, you can do them all. In the process, you don’t memorize or write down the exact formula, but the teacher can simply verify your comprehension of quadratic equation.</p>
                        <img src={image0} alt="The Battle of the Cubic Equation" />
                        <p>In fact, this is what Tartaglia and Cardano (yes, that’s the name) did when they were fighting over who was the discoverer of the formula for the solution of third-degree equations of the type x 3 + bx = c. Neither of them wanted to tell the other what their formula was, but by doing the random problem sets, it was easy to verify, without revealing knowledge in the process, that they had that knowledge.</p>
                        <p>What is the use of zero-knowledge proofs? The use is that the whole process saves computational power and compresses space on the blockchain, while also perserving privacy, in line with the trustless and cryptography nature of blockchain.</p>


                        <h5>1. SNARK and STARK</h5>
                        <p>The term “zk” in the blockchain space is usually not a true zero-knowledge proof, but often a validity proof. These “misuses” are appeared in some parts of this article to avoid confusion over related terms.</p>
                        <img src={image1_1} alt="Proof System Overview" />
                        <p>In the current blockchain world, zk is arguably the most cutting-edge and optimal solution for scaling (validity proof without zk) and privacy (true zk). zk is widely used in projects such as Tornado.cash, ZCash, zkSync, zk.money, Filecoin, and Mina.</p>
                        <p>The current technical solutions are divided into two main categories: SNARK and STARK. The S in STARK stands for scalable, which implies that the statement being proved has repeated structure, whereas SNARKs support arbitrary circuits that are preprocessed to enable succinct proofs. The technical practice of SNARK is more dominant, and STARK is mainly adopted by StarkWare on a large scale in production. Here is a comparison between them:</p>
                        <img src={image1_2} alt="Comparison between SNARKs,STARKs,Bulletproofs" />
                        <p>In terms of meme, STARK is also better than SNARK (Star Wars, Star Trek).</p>
                        <p>If SNARK is the future of Ethereum 2.0, then STARK will be the future of Ethereum 3.0. In all, STARK’s advantages are:</p>
                        <ul>
                            <li>Lower gas (scalable)</li>
                            <li>Larger batch size (scalable * 2)</li>
                            <li>Faster proving (scalable * 3)</li>
                            <li>No trusted setup (the generated parameters are only valid for the current application, and need to be re-set up if there are changes)</li>
                            <li>Post-quantum security</li>
                        </ul>
                        <p>But the proofs generated by STARK are much larger, and quite a bit larger. Due to some limitations of like WASM, which may require additional operations at build time (this example uses SNARK though). Mir gave an AIR-based STARK practice at Starky before, as part of Plonky2 (the relationship between Plonky2 and Starky is complicated…). Personally, I think the large size can be optimized by various approaches, but the time complexity of the algorithm itself is hard to compress further.</p>
                        <p>These zero-knowledge proof technologies can be combined to build more powerful applications. For example, Polygon Hermez uses SNARK to verify the correctness of STARK, thereby reducing the gas fee when the proof is finally settled.</p>
                        <p>To sum up, SNARK and STARK are both excellent zero-knowledge proof technologies, each with its own advantages, and their combination has more potential.</p>


                        <h5>2. zkVM</h5>
                        <p>The aforementioned Tornado.cash and zk.money are both similarly zero-knowledge proof applications that only support transfer operations, but not general-purpose computation. By analogy, these applications have only the functionality of Bitcoin, and are nowhere near as Turing-completeness and DApp ecosystem as Ethereum (smart contracts on Bitcoin doesn’t make it well).</p>
                        <p>zkVM is a virtual machine that guarantees secure and verifiable trustworthiness by zero-knowledge proofs. zkVM is simply the machine that you enter the old state and program, and it return the new state in a trusted manner. It allows all applications to be given the superpower of zero-knowledge proofs.</p>
                        <p>Miden’s presentation at ETH Amsterdam gave a good overview of what zkVM really is in one chart:</p>
                        <img src={image2_1} alt="What is zkVM" />
                        <p>zkVM’s Pro:</p>
                        <ul>
                            <li>Easy to use: Developers can use zkVM to run programs in a trusted manner without learning cryptography or developing with zk circuits (does not mean there is no barrier)</li>
                            <li>Generality: zkVM can generate proofs for any program or computation.</li>
                            <li>Simplicity: A relatively small number of constraints can describe the entire VM (no need to repeatedly generate the entire VM’s circuit).</li>
                            <li>Recursive: Free recursive feature. As with generality, verification of VMs can be performed by VMs. This is fun, for example you can put a zkVM inside a zkVM, similar to what StarkWare says the concept of L3.</li>
                        </ul>
                        <p>zkVM’s Con:</p>
                        <ul>
                            <li>Specificity in computational architecture: Not all zero-knowledge proof systems can be used for zkVM.</li>
                            <li>Performance issues: Circuits need to be optimized, and optimizations can be performed for specific computations.</li>
                        </ul>
                        <p>There are three main types of zkVMs, with their instruction sets in parentheses: mainstream (WASM, RISC-V), EVM (EVM bytecode), and ZK-Optimized (new instruction sets optimized for zero-knowledge proofs, such as Cairo and zkSync’s). Below is a comparison of the types based on Miden’s presentation at ETH Amsterdam:</p>
                        <img src={image2_2} alt="Comparison at ETH Amsterdam" />
                        <p>Much of what the zero-knowledge proof development ecosystem does is mostly allow developers to use Circom libraries (and snarkyjs for that matter) or other newly created languages (Leo or Cairo, which have odd limitations) to do zk DApp development, but it’s not as straightforward and easy to learn as using Solidity on Ethereum.</p>
                        <p>In addition, there are many projects, such as zkSync, Scroll, or several under the Polygon umbrella that are trying to make zkEVM or other zkVMs.</p>         
                    

                        <h5>3. EVM</h5>
                        <p>EVM is an Ethereum virtual machine, which can also be understood as the execution environments for running smart contracts.</p>
                        <p>For several years, various blockchains have been trying to be EVM-compatible to access the Ethereum development ecosystem. For this concept, EVM compatibility, equivalence and some other definitions have been derived.</p>
                        <p>EVM Compatibility: Solidity and other language level compatibility.
                        EVM Equivalence: compatibility at the EVM bytecode level.
                        EVM Specification-level Compatibility: what is commonly referred to as true zkEVM. In most cases, it’s even backwards compatible optimized supersets, providing account abstraction (i.e. each account is a smart contract) and other features that Layer1 EVMs do not provide.</p>
        

                        <h5>4. zkEVM</h5>
                        <p>Let’s take a look at zkEVM. By definition, zkEVM is an EVM-compatible and zero-knowledge proof-friendly virtual machine that guarantees the correctness of programs, operations, and inputs and outputs.</p>
                        <p>To do zkEVM for general-purpose computing, there are two main difficulties to be solved:</p>
                        <h5>a) Circuit Complexity</h5>        
                        <p>Different contracts require different circuits to be generated, and these circuits are “complex”.</p>

                        <p>This relies on various optimizations, such as Aleo (but it is not a direct ZK… Just to have an example of the optimizations) to compute proof concurrently through distributed clusters, or to accelerate it through various hardware optimizations</p>
                        <h5>b) Design Difficulty</h5>    
                        <p>zkEVM is not only a refactoring of the EVM, but also a refactoring of the entire state transition of the Ethereum using zero-knowledge proof techniques.</p>

                        <p>When the EVM was designed, it was not expected that zkEVM would be done later, which made it very difficult to implement. The result is that there are two routes. Both of which are in the diagram.</p>       
                        <img src={image4_1} alt="2 routes of Native-EVM & Customized-EVM" />
                        <p>Or in terms of VM architecture, it looks like this (super thanks to Scroll Tech for the original summary!). The Opcode refers to the EVM Opcode. The StarkWare part is to use Warp to convert Solidity to Cairo contracts, or to write contracts directly in Cairo for a good development experience and a better set of tools.</p>
                        <img src={image4_2} alt="VM Architecture" />    
                        <p>At the developer and user level, I think these solutions are basically indistinguishable, but in terms of infrastructure, the further to the right EVM is, the better the compatibility and seamless access to infrastructure such as Geth, but also the slower the development.</p>
                    
                    
                        <h5>5. zkEVM and zkVM</h5> 
                        <p>The existence of zkEVM I see as a way to refurbish and patch the Ethereum ecosystem and add to its prosperity, while the existence of zkVM is not necessarily an enhancement to Ethereum, but also has greater potential.</p>
                        <p>StarkNet’s Cairo VM may not be the perfect zkVM I thought it would be, but it can do a lot more than EVM or zkEVM, and more than just extend the functionality at the EIP level. Machine learning models can be run on Cairo VM, and there is even a machine learning modeling platform being built on StarkNet right now.</p>
                        <p>Compared to zkEVM, a zkVM is much easier to build (no need to worry about EVM technical debt), much more flexible (no need to worry about EVM updates), and much easier to optimize (hardware and software optimization of circuits and provers is much easier and cheaper than building zkEVM).</p>
                        <p>Of course, one of the smallest but fatal drawbacks of zkVM is that if zkVM does not support EVM compatibility (at the Solidity language level), then it is very difficult for zkVM to have the most complete and mature Web3 development ecosystem as EVM does.</p>
                        <p>zkVM is perhaps the bigger trend, allowing vertical optimization of EVM to become a horizontal expansion of the EVM ecosystem, going beyond the limitations of EVM.</p>
                        
                        
                        <h5>6. zkVM’s Future</h5>
                        <p>What if there was a universal zkVM that would allow smart contracts in all programming languages, not just Solidity, not just Cairo, but Rust, C++, Go, to run with zero knowledge proofs? (Stellar tried, but failed.)</p>
                        <p>As what @kelvinfichter said: Why zkEVM if zkMIPS? As what @KyleSamani said: EVM is a bug not a feature. Why zkEVM if zkVM?</p>
                        <p>zkVM like Winterfall, Distaff or Miden VM are not very developer friendly. Nervos has RISC-V VM, but Nervos does not use zero-knowledge proof technology.</p>
                        <p>The optimal solution is to build a WASM or RISC-V zkVM, preferably with support for Rust, Go, C++, or even Solidity (zkSync can help on that!). If there is such a general zkVM, then it would be a zkEVM killer.</p>
                        <p>The number of Web3 developers is about 0.07% of all developers, which means that the number of Solidity developers is actually even smaller than 0.07%. The number of Cairo and Leo developers is even smaller. Such a perfect zkVM targets almost 100% of developers, and any developer in almost any language can get a perfect zero-knowledge runtime environment.</p>
                        <img src={image6} alt="Web3 VS. All developers in the world" />
                        <p>If Web3 and Crypto ever rule the world, I don’t think it will be the EVM ecosystem that takes over 100% of all developers, but rather all developers will slowly be convert to Web3 and Crypto developers. This is the beauty of the universal zkVM.</p>
                        <p>Native zkEVM is the future of the blockchain.</p>
                        <p>General zkVM is the future of Web3.</p>


                        <h5>Related Links</h5> 
                        <p>https://brewminate.com/a-mathematical-duel-in-16th-century-renaissance-venice/</p>
                        <p>https://twitter.com/_bfarmer/status/1520091937444925440</p>
                        <p>https://twitter.com/EliBenSasson/status/1514242653671546890</p>
                        <p>https://hackmd.io/V-7Aal05Tiy-ozmzTGBYPA?view=</p>
                        <p>https://twitter.com/_bfarmer/status/1511486435077017607</p>
                        <p>https://github.com/mir-protocol/plonky2/tree/main/starky</p>
                        <p>https://blog.polygon.technology/introducing-plonky2/</p>
                        <p>https://twitter.com/dlubarov/status/1520090852093091840</p>
                        <p>https://blog.polygon.technology/zkverse-deep-dive-into-polygon-hermez-2-0/</p>
                        <p>https://www.youtube.com/watch?v=81UAaiIgIYA</p>
                        <p>https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f</p>
                        <p>https://trapdoor-tech.github.io/zkstark-book/Cairo_example/frame.html</p>
                        <p>https://twitter.com/toghrulmaharram/status/1518270138876891138</p>
                        <p>https://twitter.com/gluk64/status/1518617582420611072</p>
                        <p>https://twitter.com/kelvinfichter/status/1522389737021001734</p>
                        <p>https://twitter.com/guiltygyoza/status/1458494941684850688</p>
                        <p>https://gizatech.xyz</p>
                        {/* <p>https://www.reddit.com/r/Stellar/comments/q6ar3w/what_happened_to_zkvm_on_stellar/</p> */}
                        <p>https://twitter.com/kelvinfichter/status/1516509144068464644</p>
                        <p>https://twitter.com/KyleSamani/status/1511683267770163200</p>
                        <p>https://github.com/novifinancial/winterfell#Usage</p>
                        <p>https://github.com/GuildOfWeavers/distaff</p>
                        <p>https://github.com/maticnetwork/miden</p>
                        <p>https://docs.nervos.org/docs/basics/concepts/ckb-vm/</p>
                        
                    </div>

                    <div className="rd_related_content">
                        <div className="prev_article">
                            <Article {...previous} />
                            <p className="related_btn">
                                <Arrow />
                                Last article
                            </p>
                        </div>
                        <div className="next_article">
                            <Article {...next} />
                            <p className="related_btn">
                                Next article
                                <Arrow />
                            </p>
                        </div>
                    </div>

                    <div className="back_to_top_wrapper">
                        <a href="#top" className="back_to_top_link">
                            <Back2Top />
                        </a>
                    </div>

                </div>
            </div>



            <Footer />
        </React.Fragment>
    );
}