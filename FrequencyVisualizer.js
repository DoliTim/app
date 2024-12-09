import React, { useState } from 'react';

const frequencyCategories = [
  {
    id: 'earth',
    name: 'Earth Frequencies',
    description: 'Natural frequencies of our planet',
    frequencies: [
      {
        id: 'schumann-first',
        hz: 7.83,
        name: 'Schumann First Harmonic',
        description: 'Earth\'s primary resonant frequency',
        benefits: [
          'Deep grounding',
          'Stress reduction',
          'Enhanced healing',
          'Better sleep',
          'Improved vitality'
        ],
        color: '#2E7D32',
        history: 'Discovered by Winfried Otto Schumann in 1952, this resonance is created by lightning discharges in the Earth-ionosphere cavity.'
      },
      {
        id: 'schumann-second',
        hz: 14.3,
        name: 'Second Harmonic',
        description: 'Enhanced awareness frequency',
        benefits: [
          'Mental clarity',
          'Focus enhancement',
          'Cognitive function',
          'Learning ability',
          'Information processing'
        ],
        color: '#1565C0'
      }
    ]
  },
  {
    id: 'solfeggio',
    name: 'Solfeggio Frequencies',
    description: 'Ancient healing tones',
    frequencies: [
      {
        id: 'solfeggio-396',
        hz: 396,
        name: 'Liberation',
        description: 'Liberating guilt and fear',
        benefits: [
          'Release fear',
          'Remove guilt',
          'Clear trauma',
          'Emotional balance',
          'Root chakra activation'
        ],
        color: '#C62828',
        chakra: 'Root'
      },
      {
        id: 'solfeggio-417',
        hz: 417,
        name: 'Change & Transformation',
        description: 'Facilitating change and cellular regeneration',
        benefits: [
          'Break negative patterns',
          'Facilitate positive change',
          'Cleanse traumatic experiences',
          'Cellular regeneration',
          'Sacral chakra activation'
        ],
        color: '#F57C00',
        chakra: 'Sacral'
      },
      {
        id: 'solfeggio-528',
        hz: 528,
        name: 'Miracle',
        description: 'DNA repair and transformation',
        benefits: [
          'DNA repair',
          'Cellular healing',
          'Miracle manifestation',
          'Heart chakra opening',
          'Inner peace'
        ],
        color: '#388E3C',
        chakra: 'Heart'
      }
    ]
  }
];

function FrequencyCard({ frequency, onClick, isSelected }) {
  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '24px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    transform: isSelected ? 'scale(1.02)' : 'scale(1)',
    boxShadow: isSelected 
      ? `0 8px 32px ${frequency.color}33` 
      : '0 4px 16px rgba(0,0,0,0.1)',
  };

  const titleStyle = {
    color: frequency.color,
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '8px'
  };

  const hzStyle = {
    fontSize: '2em',
    fontWeight: '800',
    marginBottom: '16px',
    color: '#fff'
  };

  return (
    <div style={cardStyle} onClick={() => onClick(frequency)}>
      <h3 style={titleStyle}>{frequency.name}</h3>
      <div style={hzStyle}>{frequency.hz} Hz</div>
      <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.5' }}>
        {frequency.description}
      </p>
    </div>
  );
}

function FrequencyDetails({ frequency }) {
  const style = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '16px',
    padding: '32px',
    marginTop: '32px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
  };

  return (
    <div style={style}>
      <h2 style={{ color: frequency.color, fontSize: '2em', marginTop: 0 }}>
        {frequency.name}
      </h2>
      <div style={{ fontSize: '3em', color: '#fff', marginBottom: '24px' }}>
        {frequency.hz} Hz
      </div>
      <p style={{ fontSize: '1.2em', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '24px' }}>
        {frequency.description}
      </p>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ color: frequency.color, marginBottom: '16px' }}>Benefits</h3>
        <ul style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8' }}>
          {frequency.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      {frequency.history && (
        <div>
          <h3 style={{ color: frequency.color, marginBottom: '16px' }}>History</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
            {frequency.history}
          </p>
        </div>
      )}
      {frequency.chakra && (
        <div style={{ marginTop: '24px', color: frequency.color }}>
          Chakra: {frequency.chakra}
        </div>
      )}
    </div>
  );
}

export function FrequencyVisualizer() {
  const [selectedFrequency, setSelectedFrequency] = useState(null);

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '40px 20px',
    backgroundColor: '#1a1a1a',
    minHeight: '100vh',
    color: '#fff',
  };

  return (
    <div style={containerStyle}>
      {frequencyCategories.map((category) => (
        <div key={category.id} style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2em', marginBottom: '24px' }}>{category.name}</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '24px' }}>
            {category.description}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {category.frequencies.map((freq) => (
              <FrequencyCard
                key={freq.id}
                frequency={freq}
                onClick={setSelectedFrequency}
                isSelected={selectedFrequency?.id === freq.id}
              />
            ))}
          </div>
        </div>
      ))}
      {selectedFrequency && <FrequencyDetails frequency={selectedFrequency} />}
    </div>
  );
} 