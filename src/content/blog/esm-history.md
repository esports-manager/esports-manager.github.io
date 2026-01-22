---
title: "Building eSports Manager: a 14 year journey"
description: "A retrospective on the long journey behind eSports Manager, from early abandoned ideas to a working prototype, covering years of experimentation, technical challenges, and lessons learned along the way."
pubDate: 2026-01-23
heroImage: "/assets/homepage_screenshot.png"
tags: ["update", "history", "development"]
draft: false
---

## Initial idea

The story of **eSports Manager** goes way back.

In 2010, during the FIFA World Cup in South Africa, I was a teenager with absolutely no idea how to build a game. At the time, I played a lot of *Football Manager* and *Championship Manager*. Before that, there were *Brasfoot* and *Masfoot*, which were huge inspirations for me. I was just starting to dip my toes into programming using tools like **Multimedia Fusion**, and to be honest, I wasn't very interested in "real" programming yet.

I mocked up a project I called **Soccer City**, inspired by the name of the World Cup final stadium. The idea was to make a football manager–style game, but that was as far as it went. The thought of actually programming something like that felt overwhelming, and the project died quickly, leaving behind only a few mockup screens.

Fast forward to 2016. I was in my second year at university, and that old idea came back to me. This time, though, I was playing *League of Legends* regularly. I remember wondering why there wasn't a proper *League of Legends manager* game. I started sketching ideas, trying to imagine what such a game would look like. But once again, my programming skills weren't there yet, and the project never really moved forward.

## First attempts

That idea stayed in the back of my mind for years. I tried to start it multiple times, but every attempt ended the same way: I would look at the scope of the project, get overwhelmed by the complexity, and give up.

In early 2020, just before the pandemic, I finished my university final project (TCC, here in Brazil), which was a recommender system written in **Python** and **Ionic**. After working with Python for so long, I felt much more confident with the language and wanted to keep using it. That's when **eSports Manager** officially began.

At that point, I had no idea how to structure a standalone Python application or turn it into a desktop app. I had to learn everything from scratch. I also had very little experience with simulation systems. There weren't many similar projects to learn from, and the closest thing I could find was **Bygfoot**, which was written in C. I knew some C, but not nearly enough to fully understand its internals.

Still, I pushed forward. I started writing code in Python, took courses, bought books, and finally learned the language properly. I discovered **PySimpleGUI** and used it to build the UI. By the end of 2020, I had a functional prototype: match simulation worked, and I spent an unreasonable amount of time struggling with data serialization.

Eventually, though, PySimpleGUI started to feel limiting. I wasn't happy with the results, and getting the UI to look the way I wanted required experience I simply didn't have. I experimented with other approaches (React, Ionic, Angular, and other JS web-based frontends), but I hated the experience. Anything heavily tied to JavaScript or TypeScript just didn't click with me. Even today, after trying Vite + React again for newer eSM experiments, I still don't enjoy it.

## Frontend problems

By 2021, eSports Manager was close to being abandoned.

I tried to keep it alive by experimenting with **PyQt** and **PySide**, but Qt felt too restrictive in its own way. I loved what could be done with HTML and CSS, but Python-based UI solutions felt miles behind the JavaScript ecosystem. Eventually, I shifted my focus to other projects, using that time to become a better programmer overall.

Things changed again at the end of 2023 and the beginning of 2024. I started experimenting with **Flask**, **Jinja**, **SQLAlchemy**, and **HTMX**. It felt promising, although a bit bloated. Around that time, I discovered **Pywebview**, which seemed like a solid alternative to Electron. Shortly after, I found **FastAPI** and **SQLModel**, which felt faster, cleaner, and more modern than Flask.

The problem was that I had never built anything this large with FastAPI before. I had to learn it from scratch, and that took time. Once again, the frontend was the hardest part. Designing interfaces has always been difficult for me, and getting something I was actually happy with was frustrating and time-consuming.

Around this time, AI tools for coding started to improve noticeably. I had avoided them for a long time, partly because I felt they would delegitimize my work. In my head, "real programmers" wrote everything by hand. That was already a bit of a lie (I was using autocomplete tools like TabNine and Codeium), but still, I was writing code I fully understood and designed myself.

My first attempts with AI were... bad. The results were frustrating. The models produced broken code, messy frontends, and solutions that simply didn't work. It didn't feel worth it.

A few months later, I tried again. And this time, it paid off.

## AI to the rescue

When I gave the agent clear instructions, it delivered results that were genuinely useful. The first UI screens it generated for eSports Manager were good enough to build upon. I tweaked them, reused patterns, and used them as inspiration for the rest of the interface. Honestly, I have no idea how long it would have taken me to reach that point on my own.

That's when my perspective on AI changed. Instead of replacing my work, it made me more productive. It handled the boring parts I kept postponing forever and helped me move faster toward a working prototype. I still had to fix things, adapt solutions, and make design decisions, but I wasn't stuck anymore.

The same happened on the backend. When you're facing a problem you don't fully understand yet, it usually takes a while to even figure out what to search for. AI helped me bridge that gap. The solutions weren't perfect, but with some tweaking, they worked, and I learned a lot in the process.

Today, I write a lot of the code myself. But when I need to quickly sketch ideas or bootstrap a feature, I still rely on AI to get past the boring parts. It saves time and keeps the project moving.

## The project today

The current stack is admittedly a bit bloated:

**FastAPI + SQLModel + Pywebview + Jinja2 + HTMX + AlpineJS**

It's a lot to maintain, but it works, and I'm sticking with it for the MVP. Right now, the game already has:

* A working dashboard
* A match simulation system with picks and bans
* A functional database and game session system
* Several core pages implemented

# Current MVP

For the MVP, you'll be able to:

1. Create your manager
2. Choose your team
3. Schedule practice sessions
4. Receive inbox messages and plan your next actions
5. Define your team's strategy
6. Select the players for each match
7. Pick champions based on the current meta
8. Simulate matches with real-time event descriptions
9. Develop your players
10. Compete in a league and fight for the title

Features like finances, transfers, and game patches aren't in yet, but this already feels like a solid and playable starting point.

Stay tuned for more updates.
