#!/bin/bash
# Chạy server (ưu tiên Python trong .venv để có thư viện anthropic)
cd "$(dirname "$0")"
if [ -x .venv/bin/python ]; then PY=.venv/bin/python; else PY=python3; fi
exec "$PY" serve.py "$@"
