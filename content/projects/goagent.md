---
title: "Goagent"
date: 2026-01-01
draft: false
weight: 1
description: "Framework para agentes de IA en Go, equivalente conceptual a LangChain/LangGraph de Python, pero diseñado desde cero de forma idiomática en Go (no un port de esas librerías). Proyecto personal en fase beta, en desarrollo activo desde febrero de 2026."
technologies: ["Go", "Agentes de IA", "RAG", "LLM", "MCP", "OpenTelemetry", "GitHub Actions"]
repo_url: "https://github.com/Germanblandin1/goagent"
demo_url: ""
image: ""
---

- Implementación del patrón ReAct (Reasoning + Acting): un loop de agente que alterna entre invocación de modelos (LLMs) y ejecución de herramientas (tools) de forma concurrente.
- Diseño de sistemas de memoria: historial de conversación de corto plazo (con políticas de ventana) y recuperación semántica de largo plazo vía embeddings, con soporte para PostgreSQL+pgvector, Qdrant y SQLite+sqlite-vec.
- Desarrollo de un módulo de orquestación multiagente: pipelines lineales, grafos dinámicos con ramificación y loops, grupos paralelos, y un patrón supervisor coordinado por LLM.
- Implementación de un pipeline de RAG (Retrieval-Augmented Generation) con chunkers configurables (texto, recursivo, por oración, por página) y una herramienta de búsqueda sobre corpus de documentos.
- Integración del protocolo MCP (Model Context Protocol) vía stdio y SSE, junto con proveedores de modelos como Ollama y Anthropic (Claude), y el embedder de Voyage AI.
- Incorporación de observabilidad con OpenTelemetry (spans y métricas RED) y mecanismos de resiliencia: timeouts por herramienta, circuit breaker, reintentos con backoff exponencial y middleware de despacho configurable.
- Configuración de workflows de GitHub Actions para verificar calidad de código y aspectos de seguridad en cada cambio.
