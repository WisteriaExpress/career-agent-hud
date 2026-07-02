# Career Agent HUD — Portfolio Case Study / Studium projektu

Career Agent HUD to aplikacja portfolio wspierająca przygotowanie do pierwszej pracy w IT.  
Dokument zawiera opis projektu w dwóch wersjach językowych:

- **polskiej** — jako głównej,
- **angielskiej** — do GitHuba, LinkedIna, CV i rekrutacji międzynarodowej.

---

# CZĘŚĆ 1 — POLSKI

## Opis projektu

Career Agent HUD to wielostronicowa aplikacja webowa zbudowana w **Next.js**, **React**, **TypeScript** i **CSS Modules**.

Aplikacja pomaga uporządkować projekty portfolio, wygenerować opisy projektów do CV, porównać przykładową ofertę pracy z aktualnymi umiejętnościami, przygotować pytania rekrutacyjne oraz stworzyć końcowy raport przygotowania do rekrutacji.

Projekt został przygotowany jako aplikacja portfolio dla osoby aplikującej na pierwszą pracę w IT / frontendzie.

---

## Krótki opis

Career Agent HUD to dashboard kariery, który łączy portfolio, generator opisów do CV, analizę oferty pracy, przygotowanie do rozmowy kwalifikacyjnej i raport końcowy w jednym narzędziu.

---

## Problem

Przygotowanie do pierwszej pracy w IT wymaga ogarnięcia wielu elementów naraz:

- projektów portfolio,
- opisów do CV,
- opisów po angielsku,
- wymagań z ofert pracy,
- brakujących umiejętności,
- pytań rekrutacyjnych,
- wyjaśnienia własnych projektów,
- końcowych materiałów aplikacyjnych.

Początkujące osoby często mają projekty, ale nie zawsze wiedzą, jak opisać je jasno i profesjonalnie dla rekrutera.

Career Agent HUD rozwiązuje ten problem przez zamianę danych o projektach w uporządkowane materiały rekrutacyjne.

---

## Rozwiązanie

Aplikacja używa typowanych danych projektów oraz funkcji mock-agenta, które generują uporządkowane wyniki dla różnych etapów przygotowania do rekrutacji.

Aktualna wersja zawiera:

- dashboard kariery,
- listę projektów,
- generator opisów do CV po polsku i angielsku,
- analizę przykładowej oferty pracy,
- trener rozmowy kwalifikacyjnej,
- raport końcowy,
- workflow w stylu agenta.

Projekt nie udaje w pełni autonomicznego systemu AI. Pokazuje bezpieczny, kontrolowany i zrozumiały workflow agentowy.

---

## Główne funkcje

### Dashboard

Dashboard pokazuje ogólny stan przygotowania do rekrutacji.

Zawiera:

- liczbę projektów portfolio,
- liczbę gotowych projektów,
- wynik gotowości,
- ostatnie wyniki mock-agenta,
- szybkie przejścia do modułów.

---

### Projekty

Strona Projects prezentuje uporządkowane dane projektów portfolio.

Każdy projekt zawiera:

- tytuł,
- krótki opis,
- długi opis,
- stack technologiczny,
- funkcje,
- rozwiązane problemy,
- pokazane umiejętności,
- opis do CV po polsku,
- opis do CV po angielsku,
- status.

---

### Agent Console

Agent Console prezentuje wyniki mock-agenta w kontrolowanych trybach.

Aktualne tryby agenta:

- przegląd projektu,
- opis do CV po polsku,
- opis do CV po angielsku,
- dopasowanie do oferty pracy,
- przygotowanie do rozmowy,
- raport eksportu.

Ten moduł pokazuje umiejętność oddzielenia logiki od interfejsu oraz projektowania aplikacji opartych na workflow.

---

### CV Generator

CV Generator zamienia dane projektów w profesjonalne opisy gotowe do użycia w CV.

Skupia się na:

- jasnym języku,
- uczciwym przedstawieniu doświadczenia,
- opisach przyjaznych rekruterowi,
- wersji polskiej i angielskiej,
- unikaniu przesady i wymyślonych kompetencji.

---

### Job Matcher

Job Matcher porównuje przykładową ofertę pracy z aktualnym portfolio i umiejętnościami.

Pokazuje:

- wymagane umiejętności,
- mile widziane umiejętności,
- obowiązki,
- pasujące projekty,
- brakujące umiejętności,
- rekomendacje.

Ten moduł pokazuje myślenie produktowe i praktyczne wsparcie procesu aplikowania.

---

### Interview Trainer

Interview Trainer pomaga przygotować się do rozmowy kwalifikacyjnej.

Zawiera:

- pytania techniczne,
- pytania miękkie,
- proste odpowiedzi po angielsku,
- rekomendacje przygotowania.

Ten moduł jest ważny, bo łączy portfolio z realnymi sytuacjami na rozmowie kwalifikacyjnej.

---

### Export Report

Moduł Export generuje raport w stylu Markdown.

Łączy:

- podsumowanie portfolio,
- opisy projektów,
- wyniki agenta,
- wpisy do CV,
- przygotowanie do rozmowy,
- następne kroki.

W kolejnych wersjach ten moduł może zostać rozbudowany o prawdziwy eksport do Markdown, PDF albo DOCX.

---

## Technologie

- **Next.js 16**
- **React**
- **TypeScript**
- **CSS Modules**
- **ESLint**
- **Turbopack**
- **dane mockowe**
- **funkcje mock-agenta**

---

## Pokazane umiejętności techniczne

Projekt pokazuje:

- budowę wielostronicowej aplikacji,
- użycie App Routera w Next.js,
- pracę z komponentami React,
- modelowanie danych w TypeScript,
- oddzielenie danych, logiki i prezentacji,
- tworzenie funkcji mock-agenta,
- projektowanie dashboardu,
- responsywny layout,
- stylowanie przez CSS Modules,
- renderowanie uporządkowanych danych,
- myślenie produktowe pod rekrutację,
- rozwiązywanie problemów z buildem i ESLintem.

---

## Architektura projektu

Aplikacja jest zorganizowana wokół typowanych danych i oddzielonej logiki.

Uproszczona architektura:

```txt
types/career.ts
  ↓
data/mockProjects.ts
  ↓
lib/mockAgent.ts
  ↓
app routes
  ↓
strony dashboardu i raporty