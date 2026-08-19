/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar, Header } from './components/Layout';
import Dashboard from './components/Dashboard';
import Leads from './components/Leads';
import Attendance from './components/Attendance';
import Agenda from './components/Agenda';
import Properties from './components/Properties';
import Proposals from './components/Proposals';
import Contracts from './components/Contracts';
import Finance from './components/Finance';

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        
        <div className="flex-1 flex flex-col min-w-0">
          <Routes>
            <Route path="/" element={
              <>
                <Header title="Dashboard" subtitle="Bem-vindo de volta, João!" />
                <main className="p-6">
                  <Dashboard />
                </main>
              </>
            } />
            <Route path="/leads" element={
              <>
                <Header title="Leads" subtitle="Gerencie seus potenciais clientes." />
                <main className="p-6">
                  <Leads />
                </main>
              </>
            } />
            <Route path="/atendimento" element={
              <>
                <Header title="Atendimento" subtitle="Central de mensagens e chat." />
                <main className="p-6 h-[calc(100vh-88px)]">
                  <Attendance />
                </main>
              </>
            } />
            <Route path="/agenda" element={
              <>
                <Header title="Agenda & Visitas" subtitle="Organize seus compromissos." />
                <main className="p-6">
                  <Agenda />
                </main>
              </>
            } />
            <Route path="/imoveis" element={
              <>
                <Header title="Imóveis" subtitle="Catálogo completo de propriedades." />
                <main className="p-6">
                  <Properties />
                </main>
              </>
            } />
            <Route path="/propostas" element={
              <>
                <Header title="Propostas" subtitle="Acompanhamento de negociações." />
                <main className="p-6">
                  <Proposals />
                </main>
              </>
            } />
            <Route path="/contratos" element={
              <>
                <Header title="Contratos" subtitle="Gestão de contratos e documentos." />
                <main className="p-6">
                  <Contracts />
                </main>
              </>
            } />
            <Route path="/financeiro" element={
              <>
                <Header title="Financeiro" subtitle="Controle de caixa e comissões." />
                <main className="p-6">
                  <Finance />
                </main>
              </>
            } />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
