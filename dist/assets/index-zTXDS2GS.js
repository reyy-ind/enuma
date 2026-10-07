(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const o=["student-001","student-002","student-003","student-004","student-005"];async function c(n){try{const e=await fetch(`/students/${n}.json`);if(!e.ok)throw new Error(`Data ${n} tidak ditemukan`);return await e.json()}catch(e){return console.error(e),{nama:"Data tidak ditemukan",absen:"-",kelas:"-"}}}async function d(){const n=await Promise.all(o.map(e=>c(e)));document.querySelector("#app").innerHTML=`
        <header class="header">
            <div class="container">

                <p class="badge">
                    GIT & GITHUB PRACTICE
                </p>

                <h1>Team Dashboard</h1>

                <p class="subtitle">
                    From Students For Students.
                </p>

            </div>
        </header>

        <main class="container">

            <section class="overview">

                <div>
                    <p class="section-label">
                        PROJECT
                    </p>

                    <h2>
                        Pelatihan Git & GitHub.
                    </h2>

                    <p>
                    
                    </p>
                </div>

                <div class="total">
                    <strong>${n.length}</strong>
                    <span>Anggota</span>
                </div>

            </section>

            <section class="team">

                <div class="section-heading">

                    <div>
                        <p class="section-label">
                            TEAM MEMBERS
                        </p>

                        <h2>
                            Identitas Anggota
                        </h2>
                    </div>

                </div>

                <div class="members">

                    ${n.map((e,r)=>`
                        <article class="member-card">

                            <div class="member-number">
                                ${String(r+1).padStart(2,"0")}
                            </div>

                            <div class="member-content">

                                <h3>
                                    ${e.nama}
                                </h3>

                                <div class="identity">

                                    <div>
                                        <span>
                                            ABSEN
                                        </span>

                                        <strong>
                                            ${e.absen}
                                        </strong>
                                    </div>

                                    <div>
                                        <span>
                                            KELAS
                                        </span>

                                        <strong>
                                            ${e.kelas}
                                        </strong>
                                    </div>

                                    <div>
        
        
                                    <span>
                                      AKUN GITHUB
                                    </span>

                                        <strong>
                                            ${e.akun_github}
                                        </strong>
                                    </div>


                                </div>

                            </div>

                        </article>
                    `).join("")}

                </div>

            </section>

        </main>

        <footer>
            Git Collaboration Dashboard
        </footer>
    `}d();
