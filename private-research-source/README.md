# Source de recherche privée

Ce dossier est réservé au fichier source du mémoire :

```
private-research-source/memoire-dorra-ben-aissa-2026.pdf
```

Il est exclu du dépôt Git (voir `.gitignore` à la racine) et **ne doit jamais être
publié tel quel** sur le site ou sur GitHub. Le contenu du mémoire n'est diffusé
sur la plateforme que sous forme retravaillée, vérifiée et explicitement autorisée.

## Workflow d'extraction et de publication

1. **Placer le PDF** dans ce dossier (il restera local, jamais poussé sur le dépôt).
2. **Extraire un contenu** (résultat, citation, figure, donnée du questionnaire) en notant
   systématiquement le numéro de page dans le mémoire.
3. **Vérifier** la citation ou la donnée : est-elle exacte, complète, correctement attribuée ?
4. **Transformer en donnée structurée** dans le fichier `src/data/*.ts` correspondant :
   - Résultats de questionnaire → `src/data/surveyResults.ts`
   - Citations et profils d'experts → `src/data/experts.ts`, `src/data/expertThemes.ts`
   - Hypothèses → `src/data/hypotheses.ts`
   - Frise historique → `src/data/timeline.ts`
   - Bibliographie → `src/data/bibliography.ts`
5. **Renseigner la page source** (`sourcePage`) et le statut (`status: 'confirmé'` au lieu de
   `'à compléter depuis le mémoire'`) uniquement une fois la donnée vérifiée.
6. **Vérifier les autorisations** avant toute publication d'une citation ou d'un profil d'expert :
   - `publicationConsent: true` — l'expert a autorisé la publication de son profil.
   - `identityVisibility` — `'public'`, `'anonymous'` ou `'private'` selon ce qui a été convenu.
   - `quoteApproval: true` — l'expert a validé la citation exacte qui lui est attribuée.
   - Pour chaque citation : `verified: true` et `approvedForPublication: true`.
7. **Ne publier que les contenus vérifiés et autorisés.** Tant qu'une donnée n'est pas
   confirmée, elle doit rester à `value: null` / `status: 'à compléter depuis le mémoire'`
   plutôt que d'être estimée ou inventée.

## Règles impératives

- Ne jamais inventer une citation d'expert.
- Ne jamais inventer une donnée quantitative (pourcentage, statistique).
- Ne jamais présenter une hypothèse comme une vérité universelle.
- Ne jamais présenter une recommandation UX comme une norme officielle.
- Ne jamais publier de coordonnées personnelles, d'enregistrements ou de réponses
  individuelles au questionnaire.
