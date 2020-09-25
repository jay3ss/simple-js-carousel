"""A simple server"""
import http.server
import socketserver


def run(ip_address='', port=8000):
    address = (ip_address, port)
    handler = None


def main():
    handler = http.server.SimpleHTTPRequestHandler

    # with socketserver.TCPServer('', )
