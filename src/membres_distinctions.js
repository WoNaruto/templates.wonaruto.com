var source = {
    "distinctions": [
        {
            "categorie": "Arène",
            "categorie-code": "arene",
            "data": [
                {
                    "code": "arene-participer",
                    "nom": "Ave, Caesar, morituri te salutant",
                    "description": "Participer à une Arène",
                    "template": "http://images.wonaruto.com/s/a247aa41bdd6c0d49c650b41a38e12ba.png",
                    "niveau": 1
                },
                {
                    "code": "arene-participer-10",
                    "nom": "Doctore",
                    "description": "Avoir participé à 10 Arènes",
                    "template": "http://images.wonaruto.com/s/8a4f264e610622c1187f43c23c48c01e.png",
                    "niveau": 2
                },
                {
                    "code": "arene-senshi-%s-top",
                    "nom": "Champion de l'Empereur",
                    "description": "Etre Meilleur Senshi de l'Arène",
                    "template": "http://images.wonaruto.com/s/a3c12215d48d97670b73cfdba65ac1a9.png",
                    "niveau": 7
                },
                {
                    "code": "arene-senshi-podium",
                    "nom": "Champions",
                    "description": "Etre sur le podium du classement des Senshi d'une Arène",
                    "template": "http://images.wonaruto.com/s/1d29e0e0d6f3b8d331029e55170f55a1.png",
                    "niveau": 5
                },
                {
                    "code": "arene-senshi-top-2",
                    "nom": "Et après on va me dire que c'est de la chance",
                    "description": "Etre Meilleur Senshi de deux Arènes",
                    "template": "http://images.wonaruto.com/s/e961fa2ddc462410140bdcd199899478.png",
                    "niveau": 8
                },
                {
                    "code": "arene-senshi-top-jour",
                    "nom": "Star d'un jour",
                    "description": "Etre Meilleur Senshi d'une journée d'Arène",
                    "template": "http://images.wonaruto.com/s/a0e7566dda3b9cb428afa9a8b5adf887.png",
                    "niveau": 4
                },
                {
                    "code": "arene-top-100",
                    "nom": "Garde pas du tout rapprochée",
                    "description": "Finir dans le Top 100 d'une Arène",
                    "template": "http://images.wonaruto.com/s/f6d43f952e29763c8a3471dc8c661efe.png",
                    "niveau": 3
                },
                {
                    "code": "arene-degats-2000",
                    "nom": "Plus que 98 !",
                    "description": "Cumuler 2000 dégâts en Arène",
                    "template": "http://images.wonaruto.com/s/7a878b67a71ca395fe2963a3c02ecc37.png",
                    "niveau": 2
                },
                {
                    "code": "arene-tuer-1",
                    "nom": "Like a Virgin",
                    "description": "Tuer l'un des participants d'une Arène",
                    "template": "http://images.wonaruto.com/s/e18a4ce74972d8d811ffa8d50f816990.png",
                    "niveau": 1
                },
                {
                    "code": "arene-meurtres-podium",
                    "nom": "Executeurs",
                    "description": "Etre sur le podium du classement des Tueurs d'une Arène",
                    "template": "http://images.wonaruto.com/s/9a2769a755f8710930ca210cf47c0a1c.png",
                    "niveau": 5
                },
                {
                    "code": "arene-zones-top",
                    "nom": "Stratège de l'Empereur",
                    "description": "Etre Top Zones de l'Arène",
                    "template": "http://images.wonaruto.com/s/61328ce577dd55ceebb6c43aec758aa8.png",
                    "niveau": 3
                },
                {
                    "code": "arene-zones-maitriser-51",
                    "nom": "I want to believe",
                    "description": "Maîtriser la zone 51 d'une Arène",
                    "template": "http://images.wonaruto.com/s/7c0041a579105befb5cf32fc9cbb2ed0.png",
                    "niveau": 2
                },
                {
                    "code": "arene-meurtres-175",
                    "nom": "Eventreur de Chesapeake",
                    "description": "Cumuler 175 meurtres en Arène",
                    "template": "http://images.wonaruto.com/s/53e9c943180dedf3de6ae28960960f9c.png",
                    "niveau": 4
                }
            ],
            "count": function () {
                return this.data.length;
            },
            "render_progression": function () {
                return '<span id="mclasse">' + this.count() + ' / 30</span>';
            },
            "render_bar": function () {
                return '<div class="stats-barre-2"><div class="bb-1" style="width:' + parseFloat((this.count() / 30) * 100).toFixed(2) + '%;"></div></div>';
            },
            "render_nom": function () {
                return this.nom.replace(/'/g, '&#39;');
            },
            "render_description": function () {
                return this.description.replace(/'/g, '&#39;');
            },
            "render_details": function () {
                var s = Math.random(0, 10);
                var a = Math.random(0, 10);
                var b = Math.random(0, 10);
                var c = Math.random(0, 10);
                var d = Math.random(0, 10);
                var e = Math.random(0, 10);

                return s + " S, " + a + "A, " + b + "B, " + c + "C, " + d + "D, " + e + "E";
            }
        },
        {
            "categorie": "Evènement",
            "categorie-code": "events",
            "data": [
                {
                    "code": "event-noel-cadeau",
                    "nom": "H0H 0H0",
                    "description": "Venir récupérer son cadeau le jour de Noël",
                    "template": "http://images.wonaruto.com/s/0b975ee51bf9b05907123126a3c5d3b7.png",
                    "niveau": 1
                },
                {
                    "code": "event-zombie-round",
                    "nom": "Día de Muertos",
                    "description": "Remporter un Round de type Zombies au Naruto Fight Club",
                    "template": "http://images.wonaruto.com/s/a48f20b8a8d589fa88ad3f1d3c445660.png",
                    "niveau": 2
                },
                {
                    "code": "event-zombie-100",
                    "nom": "Zombies, niveau collège",
                    "description": "Terminer dans le Top 100 d'un évènement A mort les Zombies",
                    "template": "http://images.wonaruto.com/s/dc3e33054e6b2f3a7d19504d82d30287.png",
                    "niveau": 1
                }
            ],
            "count": function () {
                return this.data.length;
            },
            "render_progression": function () {
                return '<span id="mclasse">' + this.count() + ' / 10</span>';
            },
            "render_bar": function () {
                return '<div class="stats-barre-2"><div class="bb-1" style="width:' + parseFloat((this.count() / 30) * 100).toFixed(2) + '%;"></div></div>';
            },
            "render_nom": function () {
                return this.nom.replace(/'/g, '&#39;');
            },
            "render_description": function () {
                return this.description.replace(/'/g, '&#39;');
            },
            "render_details": function () {
                var s = Math.random(0, 10);
                var a = Math.random(0, 10);
                var b = Math.random(0, 10);
                var c = Math.random(0, 10);
                var d = Math.random(0, 10);
                var e = Math.random(0, 10);

                return s + " S, " + a + "A, " + b + "B, " + c + "C, " + d + "D, " + e + "E";
            }
        },
        {
            "categorie": "Forêt de la Mort",
            "categorie-code": "fdm",
            "data": [
                {
                    "code": "fdm-elimination-epreuve-1",
                    "nom": "La vie ne tenait qu'à un rouleau",
                    "description": "Se faire éliminer lors de la première épreuve de la Forêt de la Mort (sans être inactif)",
                    "template": "http://images.wonaruto.com/s/396c392a793af64c293d26158fc189cc.png",
                    "niveau": 1
                },
                {
                    "code": "fdm-participer",
                    "nom": "Bienvenus, Hansel et Gretel",
                    "description": "Participer à une Forêt de la Mort",
                    "template": "http://images.wonaruto.com/s/64868c05a8cf8e6596a2237153049e55.png",
                    "niveau": 1
                }
            ],
            "count": function () {
                return this.data.length;
            },
            "render_progression": function () {
                return '<span id="mclasse">' + this.count() + ' / 10</span>';
            },
            "render_bar": function () {
                return '<div class="stats-barre-2"><div class="bb-1" style="width:' + parseFloat((this.count() / 30) * 100).toFixed(2) + '%;"></div></div>';
            },
            "render_nom": function () {
                return this.nom.replace(/'/g, '&#39;');
            },
            "render_description": function () {
                return this.description.replace(/'/g, '&#39;');
            },
            "render_details": function () {
                var s = Math.random(0, 10);
                var a = Math.random(0, 10);
                var b = Math.random(0, 10);
                var c = Math.random(0, 10);
                var d = Math.random(0, 10);
                var e = Math.random(0, 10);

                return s + " S, " + a + "A, " + b + "B, " + c + "C, " + d + "D, " + e + "E";
            }
        }
    ]
};