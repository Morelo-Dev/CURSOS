import { useState, useEffect } from 'react';
import { helpService, type HelpLink, type HelpLinkCreate } from '..';

export const HelpLinksManager = () => {
    const [helpLinks, setHelpLinks] = useState<HelpLink[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [formData, setFormData] = useState<HelpLinkCreate>({
        routePath: '',
        title: '',
        videoUrl: '',
        documentUrl: '',
        manualUrl: '',
        faqUrl: '',
        contactEmail: '',
        whatsappNumber: '',
        isActive: true
    });

    useEffect(() => {
        loadHelpLinks();
    }, []);

    const loadHelpLinks = async () => {
        setIsLoading(true);
        try {
            const data = await helpService.getAll();
            setHelpLinks(data);
        } catch (error) {
            console.error('Error loading help links:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (editingId) {
                await helpService.update(editingId, formData);
            } else {
                await helpService.create(formData);
            }

            resetForm();
            loadHelpLinks();
        } catch (error) {
            console.error('Error saving help link:', error);
        }
    };

    const handleEdit = (helpLink: HelpLink) => {
        setEditingId(helpLink.id);
        setFormData({
            routePath: helpLink.routePath,
            title: helpLink.title,
            videoUrl: helpLink.videoUrl || '',
            documentUrl: helpLink.documentUrl || '',
            manualUrl: helpLink.manualUrl || '',
            faqUrl: helpLink.faqUrl || '',
            contactEmail: helpLink.contactEmail || '',
            whatsappNumber: helpLink.whatsappNumber || '',
            isActive: helpLink.isActive
        });
    };

    const handleDelete = async (id: number) => {
        if (window.confirm('¿Está seguro de eliminar este enlace de ayuda?')) {
            try {
                await helpService.delete(id);
                loadHelpLinks();
            } catch (error) {
                console.error('Error deleting help link:', error);
            }
        }
    };

    const resetForm = () => {
        setEditingId(null);
        setFormData({
            routePath: '',
            title: '',
            videoUrl: '',
            documentUrl: '',
            manualUrl: '',
            faqUrl: '',
            contactEmail: '',
            whatsappNumber: '',
            isActive: true
        });
    };

    return (
        <div className="help-links-manager">
            <div className="box box-primary">
                <div className="box-header with-border">
                    <h3 className="box-title">
                        {editingId ? 'Editar Enlace de Ayuda' : 'Nuevo Enlace de Ayuda'}
                    </h3>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="box-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Ruta *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="/Planeacion/PrescolarDBA/MatrizInstitucional"
                                        value={formData.routePath}
                                        onChange={(e) => setFormData({ ...formData, routePath: e.target.value })}
                                        required
                                    />
                                    <small className="text-muted">
                                        Debe coincidir exactamente con la ruta en el sistema
                                    </small>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Título *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Matriz Institucional"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Video Tutorial (YouTube)</label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        placeholder="https://youtube.com/watch?v=..."
                                        value={formData.videoUrl}
                                        onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Manual PDF</label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        placeholder="https://docs.sinai.edu.co/manual.pdf"
                                        value={formData.documentUrl}
                                        onChange={(e) => setFormData({ ...formData, documentUrl: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Manual Online</label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        placeholder="https://ayuda.sinai.edu.co/..."
                                        value={formData.manualUrl}
                                        onChange={(e) => setFormData({ ...formData, manualUrl: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Preguntas Frecuentes</label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        placeholder="https://ayuda.sinai.edu.co/faq/..."
                                        value={formData.faqUrl}
                                        onChange={(e) => setFormData({ ...formData, faqUrl: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Email de Soporte</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="soporte@sinai.edu.co"
                                        value={formData.contactEmail}
                                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>WhatsApp</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="+573001234567"
                                        value={formData.whatsappNumber}
                                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="checkbox">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={formData.isActive}
                                            onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                                        />
                                        Activo
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box-footer">
                        <button type="submit" className="btn btn-primary">
                            <i className="fa fa-save"></i> Guardar
                        </button>
                        {editingId && (
                            <button
                                type="button"
                                className="btn btn-default"
                                onClick={resetForm}
                                style={{ marginLeft: '10px' }}
                            >
                                <i className="fa fa-times"></i> Cancelar
                            </button>
                        )}
                    </div>
                </form>
            </div>

            <div className="box box-info">
                <div className="box-header with-border">
                    <h3 className="box-title">Enlaces de Ayuda Configurados</h3>
                </div>

                <div className="box-body">
                    {isLoading ? (
                        <p className="text-center">
                            <i className="fa fa-spinner fa-spin"></i> Cargando...
                        </p>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Ruta</th>
                                        <th>Título</th>
                                        <th>Recursos</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {helpLinks.map((link) => (
                                        <tr key={link.id}>
                                            <td><code>{link.routePath}</code></td>
                                            <td>{link.title}</td>
                                            <td>
                                                {link.videoUrl && <span className="label label-danger">Video</span>}
                                                {' '}
                                                {link.documentUrl && <span className="label label-primary">PDF</span>}
                                                {' '}
                                                {link.manualUrl && <span className="label label-info">Manual</span>}
                                                {' '}
                                                {link.faqUrl && <span className="label label-warning">FAQ</span>}
                                            </td>
                                            <td>
                                                {link.isActive ? (
                                                    <span className="label label-success">Activo</span>
                                                ) : (
                                                    <span className="label label-default">Inactivo</span>
                                                )}
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-sm btn-primary"
                                                    onClick={() => handleEdit(link)}
                                                    title="Editar"
                                                >
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                                {' '}
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => handleDelete(link.id)}
                                                    title="Eliminar"
                                                >
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {helpLinks.length === 0 && (
                                        <tr>
                                            <td colSpan={5} className="text-center">
                                                No hay enlaces de ayuda configurados
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};