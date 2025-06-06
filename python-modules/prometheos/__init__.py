"""
Generated by scripts/generate-unified-client.js
This file wraps the OpenAPI Generator Python client with our desktop bridge

PrometheOS Python Client
Provides a Python API for interacting with the PrometheOS desktop environment.
"""

import asyncio
from typing import Any, Dict, Optional, Union
import js

# Re-export generated client components
try:
    # Try relative import first (development environment)
    from .generated import *
except ImportError:
    try:
        # Try absolute import (Pyodide environment)
        from prometheos_client_python_generated.prometheos_client import *
    except ImportError:
        # Handle case where generated client is not available
        print("Warning: Generated client components not available")
        pass


class DesktopBridge:
    """Desktop API bridge for Python/Pyodide environment"""

    def __init__(self):
        self._desktop = None
        # Don't check availability immediately - allow manual initialization
        try:
            self._check_desktop_availability()
        except Exception:
            # Initialization can fail, will be retried later
            pass

    def _check_desktop_availability(self):
        """Check if desktop API is available in the global scope"""
        try:
            # In Pyodide, we can access JavaScript globals through js module
            if hasattr(js, 'desktop') and hasattr(js.desktop, 'api'):
                self._desktop = js.desktop
                return True
            else:
                self._desktop = None
                return False
        except Exception as e:
            self._desktop = None
            return False

    async def execute(self, component_id: str, action_id: str, params: Optional[Dict[str, Any]] = None) -> Any:
        """Execute an API call through the desktop bridge"""
        # Try to re-check desktop availability if not already available
        if not self._desktop:
            self._check_desktop_availability()

        if not self._desktop:
            raise RuntimeError("Desktop API bridge not available")

        try:
            # Convert Python dict to JavaScript object if needed
            js_params = js.Object.fromEntries(
                params.items()) if params else js.undefined

            # Call the desktop API and await the result
            result = await self._desktop.api.execute(component_id, action_id, js_params)

            # Convert JavaScript result back to Python if needed
            return result.to_py() if hasattr(result, 'to_py') else result
        except Exception as e:
            raise RuntimeError(f"Desktop API call failed: {e}")


# Global desktop client instance
_desktop_client = DesktopBridge()


class Launcher:
    """Launcher API for managing applications"""

    @staticmethod
    async def launch_app(app_id: str) -> Any:
        """Launch an application by ID"""
        return await _desktop_client.execute('launcher', 'launchApp', {'appId': app_id})

    @staticmethod
    async def kill_app(app_id: str) -> Any:
        """Kill an application by ID"""
        return await _desktop_client.execute('launcher', 'killApp', {'appId': app_id})

    @staticmethod
    async def notify(message: str, notification_type: str = 'radix') -> Any:
        """Show a notification"""
        return await _desktop_client.execute('launcher', 'notify', {
            'message': message,
            'type': notification_type
        })


class Dialog:
    """Dialog API for user interactions"""

    @staticmethod
    async def open_dialog(
        title: str,
        description: Optional[str] = None,
        confirm_label: Optional[str] = None,
        cancel_label: Optional[str] = None
    ) -> Any:
        """Open a dialog box"""
        params = {'title': title}
        if description:
            params['description'] = description
        if confirm_label:
            params['confirmLabel'] = confirm_label
        if cancel_label:
            params['cancelLabel'] = cancel_label

        return await _desktop_client.execute('dialog', 'openDialog', params)


class OnEvent:
    """Event waiting API"""

    @staticmethod
    async def wait_for_event(event_id: str, timeout: Optional[int] = None) -> Any:
        """Wait for a specific event"""
        params = {'eventId': event_id}
        if timeout:
            params['timeout'] = timeout

        return await _desktop_client.execute('onEvent', 'waitForEvent', params)


class Event:
    """Event management API"""

    @staticmethod
    async def list_events() -> Any:
        """List all available events"""
        return await _desktop_client.execute('event', 'listEvents', {})


class Api:
    """Low-level API access"""

    @staticmethod
    async def execute(component_id: str, action_id: str, params: Optional[Dict[str, Any]] = None) -> Any:
        """Execute a low-level API call"""
        return await _desktop_client.execute(component_id, action_id, params)


# Global initialization functions
def initialize(desktop_obj=None):
    """Initialize the PrometheOS client with optional desktop object"""
    global _desktop_client
    try:
        if desktop_obj:
            # Manual initialization with provided desktop object
            _desktop_client._desktop = desktop_obj
            return True
        else:
            # Auto-initialization - try to detect desktop bridge
            _desktop_client._check_desktop_availability()
            return _desktop_client._desktop is not None
    except Exception as e:
        print(f"Initialization failed: {e}")
        return False


def is_available():
    """Check if the PrometheOS client is available and ready to use"""
    global _desktop_client
    try:
        return _desktop_client._desktop is not None
    except Exception:
        return False


# Create instances for convenience
launcher = Launcher()
dialog = Dialog()
on_event = OnEvent()
event = Event()
api = Api()

# Export everything
__all__ = [
    'DesktopBridge',
    'Launcher',
    'Dialog',
    'OnEvent',
    'Event',
    'Api',
    'initialize',
    'is_available',
    'launcher',
    'dialog',
    'on_event',
    'event',
    'api'
]
