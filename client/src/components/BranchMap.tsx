import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useEffect } from 'react';

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Branch {
  name: string;
  latitude: number;
  longitude: number;
  region: string;
  hours: string;
  contact: string;
}

const branches: Branch[] = [
  {
    name: "Rwesero Branch",
    latitude: -2.3600368,
    longitude: 29.0905478,
    region: "Kivu Belt",
    hours: "Mon - Sat (6 am - 6 pm)",
    contact: "+250798583111"
  },
  {
    name: "Kamembe Branch",
    latitude: -2.4857834,
    longitude: 28.9143878,
    region: "Kivu Belt",
    hours: "Mon - Sat (6 am - 6 pm)",
    contact: "+250792399967"
  },
  {
    name: "Rusizi 1 Branch",
    latitude: -2.4908901,
    longitude: 28.8950208,
    region: "Kivu Belt",
    hours: "Mon - Sat (6 am - 6 pm)",
    contact: "+250791224025"
  },
  {
    name: "Tyazo Branch",
    latitude: -2.3319079,
    longitude: 29.1374097,
    region: "Kivu Belt",
    hours: "Mon - Sat (6 am - 6 pm)",
    contact: "+250798694164"
  },
  {
    name: "Kimironko Branch",
    latitude: -1.9492928,
    longitude: 30.1266079,
    region: "Kigali",
    hours: "Mon - Sat (6 am - 6 pm)",
    contact: "+250798694163"
  },
  {
    name: "Nyabugogo Branch",
    latitude: -1.9426476,
    longitude: 30.0449631,
    region: "Kigali",
    hours: "Mon - Sat (6 am - 6 pm)",
    contact: "+250798694156"
  },
  {
    name: "Nyamirambo Branch",
    latitude: -1.9666507,
    longitude: 30.0589475,
    region: "Kigali",
    hours: "Mon - Sat (6 am - 6 pm)",
    contact: "+250798694159"
  },
  {
    name: "Kiyovu Branch",
    latitude: -1.9479832,
    longitude: 30.0693793,
    region: "Kigali",
    hours: "Mon - Sat (6 am - 6 pm)",
    contact: "+250798694162"
  },
  {
    name: "Ziniya Branch",
    latitude: -1.9716968,
    longitude: 30.0991687,
    region: "Kigali",
    hours: "Mon - Sat (6 am - 6 pm)",
    contact: "+250798694154"
  },
  {
    name: "Remera-Giporoso Branch",
    latitude: -1.9627310,
    longitude: 30.121150,
    region: "Kigali",
    hours: "Mon - Sat (6 am - 6 pm)",
    contact: "+250798694155"
  },
  {
    name: "Batsinda Branch",
    latitude: -1.906512,
    longitude: 30.079187,
    region: "Kigali",
    hours: "Mon - Sat (6 am - 6 pm)",
    contact: "+250798694161"
  },
  {
    name: "Gikondo Branch",
    latitude: -1.973079,
    longitude: 30.07682,
    region: "Kigali",
    hours: "Mon - Sat (6 am - 6 pm)",
    contact: "+250798694157"
  },
  {
    name: "Kanombe Branch",
    latitude: -1.976610,
    longitude: 30.170512,
    region: "Kigali",
    hours: "Mon - Sat (6 am - 6 pm)",
    contact: "+250795460029"
  },
  {
    name: "Kabuga Branch",
    latitude: -1.985355,
    longitude: 30.224222,
    region: "Kigali",
    hours: "Mon - Sat (6 am - 6 pm)",
    contact: "+250798694184"
  },
  {
    name: "Gatenga Branch",
    latitude: -1.978204,
    longitude: 30.099724,
    region: "Kigali",
    hours: "Mon - Sat (6 am - 6 pm)",
    contact: "+250798583136"
  },
  {
    name: "Gisozi Branch",
    latitude: -1.917460,
    longitude: 30.056651,
    region: "Kigali",
    hours: "Mon - Sat (6 am - 6 pm)",
    contact: "+250792399969"
  }
];

// Calculate center of all branches
const centerLat = branches.reduce((sum, b) => sum + b.latitude, 0) / branches.length;
const centerLng = branches.reduce((sum, b) => sum + b.longitude, 0) / branches.length;

export default function BranchMap() {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-border" data-testid="branch-map">
      <MapContainer
        center={[centerLat, centerLng]}
        zoom={8}
        scrollWheelZoom={false}
        style={{ height: '500px', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {branches.map((branch, index) => (
          <Marker 
            key={index} 
            position={[branch.latitude, branch.longitude]}
          >
            <Popup>
              <div className="p-2 min-w-[200px]">
                <h3 className="font-bold text-primary mb-2 text-base flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {branch.name}
                </h3>
                <div className="space-y-1 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-medium">Region:</span> {branch.region}
                  </p>
                  <p className="text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {branch.hours}
                  </p>
                  <p className="text-muted-foreground flex items-center gap-1">
                    <Phone className="h-3 w-3" />
                    {branch.contact}
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
